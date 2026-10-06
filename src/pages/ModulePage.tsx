import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getModuleById, allModules } from '../data';
import { useProgress } from '../context/ProgressContext';
import {
  GraduationCap,
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Video,
  Target,
  FileText,
} from 'lucide-react';

export const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { isLessonCompleted, isModuleCompleted } = useProgress();

  const currentMod = getModuleById(moduleId || '1');

  if (!currentMod) {
    return (
      <div className="p-12 text-center text-slate-400">
        <h2 className="text-xl font-bold text-white mb-2">Modul topilmadi</h2>
        <Link to="/course" className="text-amber-400 underline text-sm">
          Modullar ro'yxatiga qaytish
        </Link>
      </div>
    );
  }

  const prevModId = currentMod.id > 1 ? currentMod.id - 1 : null;
  const nextModId = currentMod.id < allModules.length ? currentMod.id + 1 : null;

  return (
    <div className="space-y-8 py-2 max-w-5xl mx-auto">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Link to="/course" className="hover:text-amber-400 transition-colors">
            Modullar
          </Link>
          <span>/</span>
          <span className="text-white">Modul {currentMod.id}</span>
        </div>

        <div className="flex items-center gap-2">
          {prevModId && (
            <Link
              to={`/course/module/${prevModId}`}
              className="p-1.5 rounded-lg bg-[#121622] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Oldingi modul"
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
          )}
          {nextModId && (
            <Link
              to={`/course/module/${nextModId}`}
              className="p-1.5 rounded-lg bg-[#121622] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Keyingi modul"
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Module Overview Card */}
      <div className="bg-[#10141d] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              MODULE {currentMod.id < 10 ? `0${currentMod.id}` : currentMod.id}
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase">
              LEVEL {currentMod.level}
            </span>
          </div>

          {isModuleCompleted(currentMod.id) && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-mono font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Modul to'liq bajarildi</span>
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {currentMod.title}
          </h1>
          <p className="text-sm font-medium text-amber-400">
            {currentMod.subtitle}
          </p>
        </div>

        {/* Objective */}
        <div className="p-4 rounded-xl bg-[#090c12] border border-slate-800 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 font-semibold uppercase">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>Modul Maqsadi:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {currentMod.objective}
          </p>
        </div>

        {/* Best Video & Best Channel metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
          <div>
            Tavsiya etilgan eng yaxshi kanal: <strong className="text-amber-400 font-semibold">{currentMod.bestChannel}</strong>
          </div>
          {currentMod.bestVideo && (
            <div>
              · Eng yaxshi video: <strong className="text-slate-200 font-normal">{currentMod.bestVideo}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Lessons Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-400" />
          <span>Modul Darslari ({currentMod.lessons.length})</span>
        </h2>

        <div className="space-y-4">
          {currentMod.lessons.map((lesson) => {
            const isCompleted = isLessonCompleted(lesson.id);

            return (
              <div
                key={lesson.id}
                className={`rounded-2xl border p-5 sm:p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  isCompleted
                    ? 'bg-[#0e141a] border-emerald-900/60'
                    : 'bg-[#10141d] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {lesson.lessonNumber}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {lesson.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pl-10">
                    <strong>🎯 Maqsad:</strong> {lesson.objective}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pl-10 font-mono">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Video className="w-3.5 h-3.5 text-amber-400" />
                      {lesson.mainVideo.title}
                    </span>
                    <span>·</span>
                    <span className="text-amber-400">⭐ {lesson.mainVideo.qualityScore}/100</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {lesson.mainVideo.duration}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      {lesson.tasks.length} ta topshiriq
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 self-end md:self-center">
                  {isCompleted && (
                    <span className="hidden sm:flex items-center gap-1 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Tugallangan</span>
                    </span>
                  )}
                  <Link
                    to={`/course/module/${currentMod.id}/lesson/${lesson.lessonNumber}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-amber-500/10 cursor-pointer"
                  >
                    <span>Darsni ochish</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
