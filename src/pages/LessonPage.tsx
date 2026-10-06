import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getModuleById, getLessonById, getPrevNextLesson, allModules } from '../data';
import { useProgress } from '../context/ProgressContext';
import { VideoPlayer } from '../components/VideoPlayer';
import { Badge } from '../components/Badges';
import { ChartDiagram } from '../components/ChartDiagram';
import { RiskCalculator } from '../components/RiskCalculator';
import { ExpectancyCalculator } from '../components/ExpectancyCalculator';
import { ReadinessChecklist } from '../components/ReadinessChecklist';
import { QuizComponent } from '../components/QuizComponent';
import {
  Target,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BookmarkCheck,
  MapPin,
  Sparkles,
  Info,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const LessonPage: React.FC = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();

  const modNum = parseInt(moduleId || '1', 10);
  const lesNum = parseInt(lessonId || '1', 10);

  const currentMod = getModuleById(modNum);
  const currentLesson = getLessonById(modNum, lesNum);

  const {
    isLessonCompleted,
    toggleLessonCompleted,
    markLessonCompleted,
    setLastVisitedLesson,
  } = useProgress();

  useEffect(() => {
    if (currentMod && currentLesson) {
      setLastVisitedLesson(currentMod.id, currentLesson.lessonNumber);
      window.scrollTo(0, 0);
    }
  }, [currentMod, currentLesson]);

  if (!currentMod || !currentLesson) {
    return (
      <div className="p-12 text-center text-slate-400">
        <h2 className="text-xl font-bold text-white mb-2">Dars topilmadi</h2>
        <Link to="/course" className="text-amber-400 underline text-sm">
          Barcha modullarga qaytish
        </Link>
      </div>
    );
  }

  const { prev, next } = getPrevNextLesson(currentMod.id, currentLesson.lessonNumber);
  const isCompleted = isLessonCompleted(currentLesson.id);

  const handleToggleComplete = () => {
    toggleLessonCompleted(currentLesson.id, currentMod.id);
    if (!isCompleted) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="space-y-10 py-2 max-w-4xl mx-auto">
      {/* Breadcrumbs & Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Link to="/course" className="hover:text-amber-400 transition-colors">
            Modullar
          </Link>
          <span>/</span>
          <Link to={`/course/module/${currentMod.id}`} className="hover:text-amber-400 transition-colors">
            Modul {currentMod.id}
          </Link>
          <span>/</span>
          <span className="text-white">Dars {currentLesson.lessonNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          {prev && (
            <Link
              to={`/course/module/${prev.moduleId}/lesson/${prev.lessonNumber}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#121622] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Oldingi dars</span>
            </Link>
          )}

          {next && (
            <Link
              to={`/course/module/${next.moduleId}/lesson/${next.lessonNumber}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#121622] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <span className="hidden sm:inline">Keyingi dars</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Lesson Hero Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            MODULE {currentMod.id} · LESSON {currentLesson.lessonNumber}
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase">
            LEVEL {currentMod.level}
          </span>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40">
              <CheckCircle2 className="w-3 h-3" />
              <span>O'rganildi</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {currentLesson.title}
        </h1>
      </div>

      {/* 🎯 DARS MAQSADI */}
      <section className="p-5 rounded-2xl bg-[#10141d] border border-slate-800 space-y-2 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
          <Target className="w-4 h-4" />
          <span>🎯 DARS MAQSADI:</span>
        </div>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
          {currentLesson.objective}
        </p>
      </section>

      {/* 🎬 ASOSIY VIDEO */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
            <span>🏆 ASOSIY VIDEO DARS:</span>
          </div>
        </div>

        <VideoPlayer video={currentLesson.mainVideo} isMain={true} />
      </section>

      {/* 🔍 VIDEO TAHLILI */}
      <section className="bg-[#10141d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">
        <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
            <span>🔍 VIDEO TAHLILI</span>
          </h3>
          <span className="text-[11px] font-mono text-slate-500">PDF Akademik ekspertiza</span>
        </div>

        {/* Covered topics */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-400 font-semibold uppercase">
            Video quyidagi mavzularni qamrab oladi:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentLesson.analysis.coveredTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#0a0d14] border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Missing topics */}
        {currentLesson.analysis.missingTopics.length > 0 && (
          <div className="space-y-3 pt-2 border-t border-slate-800/60">
            <div className="text-xs font-mono text-slate-400 font-semibold uppercase">
              Qamrab olinmagan mavzular:
            </div>
            <div className="space-y-2">
              {currentLesson.analysis.missingTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#0a0d14] border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings or Dubious */}
        {currentLesson.analysis.warningsOrDubious && (
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-3 text-xs text-amber-200 leading-relaxed">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">Shubhali / Noto'g'ri joylar tahlili: </strong>
              <span>{currentLesson.analysis.warningsOrDubious}</span>
            </div>
          </div>
        )}
      </section>

      {/* 📌 NIMA UCHUN AYNAN SHU VIDEO? */}
      {currentLesson.whyThisVideo.length > 0 && (
        <section className="bg-[#10141d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="pb-3 border-b border-slate-800">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              📌 NIMA UCHUN AYNAN SHU VIDEO?
            </h3>
          </div>
          <div className="space-y-2.5">
            {currentLesson.whyThisVideo.map((reason, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#0a0d14] border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
              >
                <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🥈 ZAXIRA VIDEO */}
      <section className="bg-[#10141d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
        <div className="pb-3 border-b border-slate-800">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
            <span>🥈 ZAXIRA VIDEO</span>
          </h3>
        </div>

        {currentLesson.backupVideo.youtubeUrl ? (
          <div className="p-4 rounded-xl bg-[#0a0d14] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-slate-500">Muqobil Zaxira Manba:</div>
              <h4 className="text-sm font-semibold text-white">
                {currentLesson.backupVideo.title}
              </h4>
              <div className="text-xs text-slate-400">
                Kanal: <span className="text-amber-400">{currentLesson.backupVideo.channel}</span>
              </div>
              {currentLesson.backupVideo.whenToUse && (
                <div className="text-xs text-slate-400 italic pt-1">
                  Qachon foydalanish: {currentLesson.backupVideo.whenToUse}
                </div>
              )}
            </div>

            <a
              href={currentLesson.backupVideo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors shrink-0 self-start sm:self-center"
            >
              <span>Zaxira videoni ko'rish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#0a0d14] border border-slate-800/80 text-xs text-slate-400 italic flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              {currentLesson.backupVideo.note || "Bu darsga 100% mos va sifatli muqobil o'zbekcha zaxira video topilmadi."}
            </span>
          </div>
        )}
      </section>

      {/* 📚 DARSLIK BILAN BOG'LANISH */}
      <section className="bg-[#10141d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            📚 DARSLIK BILAN BOG'LANISH
          </h3>
          <span className="text-[11px] font-mono text-slate-500">Akademik Qoidalar</span>
        </div>

        {currentLesson.textbookConnection.beforeText && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentLesson.textbookConnection.beforeText}
          </p>
        )}

        {/* Badges (FACT, RULE, HEURISTIC, COMMON PRACTICE, UNCERTAIN, etc.) */}
        <div className="space-y-3">
          {currentLesson.textbookConnection.badges.map((badge, idx) => (
            <Badge key={idx} type={badge.type} text={badge.text} />
          ))}
        </div>

        {/* Formula Display if present */}
        {currentLesson.textbookConnection.formula && (
          <div className="p-4 rounded-xl bg-[#080b10] border border-amber-500/30 space-y-2">
            <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
              DARSLIK FORMULASI:
            </div>
            <pre className="text-xs sm:text-sm font-mono text-emerald-300 whitespace-pre-wrap bg-black/40 p-3 rounded-lg border border-slate-800">
              {currentLesson.textbookConnection.formula}
            </pre>
            {currentLesson.textbookConnection.formulaExplanation && (
              <p className="text-xs text-slate-300 italic pt-1">
                {currentLesson.textbookConnection.formulaExplanation}
              </p>
            )}
          </div>
        )}

        {currentLesson.textbookConnection.notes && (
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            {currentLesson.textbookConnection.notes.map((note, idx) => (
              <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-amber-400 font-mono">•</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        )}

        {currentLesson.textbookConnection.afterText && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            {currentLesson.textbookConnection.afterText}
          </p>
        )}
      </section>

      {/* DYNAMIC INTERACTIVE TOOLS (Charts, Calculators, Checklist) */}
      {currentLesson.chartType && (
        <ChartDiagram
          type={currentLesson.chartType}
          caption={currentLesson.textbookConnection.chartPrompt}
        />
      )}

      {currentLesson.hasCalculator === 'risk' && <RiskCalculator />}
      {currentLesson.hasCalculator === 'expectancy' && <ExpectancyCalculator />}
      {currentLesson.hasChecklist && <ReadinessChecklist />}

      {/* 🎯 VIDEO KO'RISH VAZIFASI & INTERACTIVE QUIZ */}
      <QuizComponent
        questions={currentLesson.quizQuestions}
        tasks={currentLesson.tasks}
      />

      {/* 📚 MODUL VIDEO XARITASI */}
      <section className="bg-[#0e121a] border border-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400">
          <MapPin className="w-4 h-4" />
          <span>MODUL {currentMod.id} VIDEO XARITASI</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#090c12] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-white">
              Dars 1: {currentLesson.title}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              {currentLesson.mainVideo.channel} · {currentLesson.mainVideo.title}
            </div>
          </div>
          <a
            href={currentLesson.mainVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-amber-400 hover:text-amber-300 underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Havolani ochish</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Bottom Completion Toggle & Prev/Next Action Bar */}
      <div className="p-6 rounded-2xl bg-[#10141d] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <button
          onClick={handleToggleComplete}
          className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isCompleted
              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/80 hover:bg-emerald-900'
              : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
          }`}
        >
          <BookmarkCheck className="w-4 h-4" />
          <span>{isCompleted ? "✓ Dars o'rganilgan deb belgilandi" : "Darsni tugatdim deb belgilash"}</span>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {prev && (
            <Link
              to={`/course/module/${prev.moduleId}/lesson/${prev.lessonNumber}`}
              className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Oldingi</span>
            </Link>
          )}

          {next && (
            <Link
              to={`/course/module/${next.moduleId}/lesson/${next.lessonNumber}`}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
            >
              <span>Keyingi Dars</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
