import React, { useState } from 'react';
import { QuizQuestion } from '../types/course';
import { useProgress } from '../context/ProgressContext';
import { HelpCircle, CheckCircle, XCircle, RefreshCw, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  questions: QuizQuestion[];
  tasks: string[];
}

export const QuizComponent: React.FC<Props> = ({ questions, tasks }) => {
  const { quizAnswers, recordQuizAnswer } = useProgress();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    questions.forEach((q) => {
      if (quizAnswers[q.id] !== undefined) {
        initial[q.id] = quizAnswers[q.id];
      }
    });
    return initial;
  });

  const [submitted, setSubmitted] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    questions.forEach((q) => {
      if (quizAnswers[q.id] !== undefined) {
        initial[q.id] = true;
      }
    });
    return initial;
  });

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted[questionId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleCheck = (question: QuizQuestion) => {
    const chosen = selectedAnswers[question.id];
    if (chosen === undefined) return;

    setSubmitted((prev) => ({ ...prev, [question.id]: true }));
    recordQuizAnswer(question.id, chosen);

    if (chosen === question.correctOptionIndex) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleRetry = (questionId: string) => {
    setSubmitted((prev) => ({ ...prev, [questionId]: false }));
  };

  return (
    <div className="bg-[#121622] border border-slate-800 rounded-xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
            VIDEO KO'RISH VAZIFASI & TEST
          </span>
          <h3 className="text-base font-semibold text-white">
            Amaliy Savollar va Bilimni Mustahkamlash
          </h3>
        </div>
      </div>

      {/* PDF Video Viewing Tasks list */}
      {tasks.length > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-[#0b0e14] border border-slate-800">
          <div className="text-xs font-mono text-slate-400 mb-2 font-semibold uppercase">
            PDF Darslik Vazifalari:
          </div>
          <ul className="space-y-2">
            {tasks.map((task, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                <span className="text-amber-400 font-mono font-bold shrink-0">{idx + 1}.</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quiz Questions */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const chosen = selectedAnswers[q.id];
          const isDone = !!submitted[q.id];
          const isCorrect = isDone && chosen === q.correctOptionIndex;

          return (
            <div key={q.id} className="p-4 sm:p-5 rounded-xl bg-[#0d1017] border border-slate-800/80">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-amber-400 font-bold shrink-0">
                  {qIndex + 1}
                </span>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  {q.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {q.options.map((opt, optIndex) => {
                  let optStyle = 'border-slate-800 bg-[#090b10] text-slate-300 hover:border-slate-700';
                  if (chosen === optIndex) {
                    optStyle = 'border-amber-500 bg-amber-500/10 text-white';
                  }
                  if (isDone) {
                    if (optIndex === q.correctOptionIndex) {
                      optStyle = 'border-emerald-600 bg-emerald-950/40 text-emerald-200 font-medium';
                    } else if (chosen === optIndex && !isCorrect) {
                      optStyle = 'border-rose-600 bg-rose-950/40 text-rose-200';
                    } else {
                      optStyle = 'opacity-40 border-slate-800 bg-[#090b10] text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={optIndex}
                      disabled={isDone}
                      onClick={() => handleSelect(q.id, optIndex)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-400 shrink-0">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isDone && optIndex === q.correctOptionIndex && (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {isDone && chosen === optIndex && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons & Feedback */}
              {!isDone ? (
                <button
                  disabled={chosen === undefined}
                  onClick={() => handleCheck(q)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all ${
                    chosen !== undefined
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 cursor-pointer shadow-md'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>Javobni tekshirish</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div
                    className={`p-3 rounded-lg text-xs flex items-start gap-2.5 ${
                      isCorrect
                        ? 'bg-emerald-950/30 text-emerald-300 border border-emerald-800/40'
                        : 'bg-rose-950/30 text-rose-300 border border-rose-800/40'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold mb-0.5">
                        {isCorrect ? "To'g'ri javob!" : "Noto'g'ri."}
                      </div>
                      <p className="text-slate-300">{q.explanation}</p>
                    </div>
                  </div>

                  {!isCorrect && (
                    <button
                      onClick={() => handleRetry(q.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Qaytadan urinib ko'rish</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
