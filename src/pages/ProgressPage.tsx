import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { courseLevels, allModules } from '../data';
import { ReadinessChecklist } from '../components/ReadinessChecklist';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const ProgressPage: React.FC = () => {
  const {
    overallPercent,
    completedLessonsCount,
    totalLessons,
    checklistCheckedCount,
    checklistTotalCount,
    checklistPercent,
    isModuleCompleted,
    isLessonCompleted,
    resetProgress,
  } = useProgress();

  const handleReset = () => {
    if (window.confirm("Barcha o'quv progressi va checklist holatini tozalashni xohlaysizmi?")) {
      resetProgress();
    }
  };

  return (
    <div className="space-y-10 py-2 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
            STATISTIKA VA AUDIT
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Shaxsiy O'quv Progressi
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Barcha 25 ta modul, video topshiriqlar va real hisobga o'tish tayyorgarligi holati.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-700 text-xs font-mono transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Progressni tozalash</span>
        </button>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-[#10141d] border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Umumiy O'zlashtirish</span>
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">
            {overallPercent}%
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-amber-500"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-400 pt-1">
            {completedLessonsCount} / {totalLessons} ta dars yakunlandi
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#10141d] border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Real Hisob Tayyorgarligi</span>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-emerald-400">
            {checklistPercent}%
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-emerald-400"
              style={{ width: `${checklistPercent}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-400 pt-1">
            {checklistCheckedCount} / {checklistTotalCount} audit mezonlari bajarildi
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#10141d] border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Yakunlangan Modullar</span>
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-blue-400">
            {allModules.filter((m) => isModuleCompleted(m.id)).length} / 25
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-blue-400"
              style={{
                width: `${(allModules.filter((m) => isModuleCompleted(m.id)).length / 25) * 100}%`,
              }}
            />
          </div>
          <div className="text-[11px] text-slate-400 pt-1">
            Har bir modul barcha darslari bilan to'liq o'rganilishi kerak
          </div>
        </div>
      </div>

      {/* Level-by-Level Breakdown */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">
          Bosqichlar (Level) Bo'yicha Progress
        </h2>

        <div className="space-y-3">
          {courseLevels.map((lvl) => {
            const modulesInLvl = allModules.filter((m) => lvl.moduleNumbers.includes(m.id));
            const completedCount = modulesInLvl.filter((m) => isModuleCompleted(m.id)).length;
            const lvlPercent = Math.round((completedCount / modulesInLvl.length) * 100);

            return (
              <div
                key={lvl.level}
                className="p-5 rounded-2xl bg-[#10141d] border border-slate-800 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase"
                        style={{ backgroundColor: `${lvl.color}20`, color: lvl.color }}
                      >
                        {lvl.title}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {lvl.subtitle}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span>{completedCount} / {modulesInLvl.length} modul</span>
                    <span className="text-white font-bold">{lvlPercent}%</span>
                  </div>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{ width: `${lvlPercent}%`, backgroundColor: lvl.color }}
                  />
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 pt-1">
                  {modulesInLvl.map((m) => {
                    const done = isModuleCompleted(m.id);
                    return (
                      <Link
                        key={m.id}
                        to={`/course/module/${m.id}`}
                        className={`p-2 rounded-lg border text-center transition-colors ${
                          done
                            ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                            : 'bg-[#0a0d14] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <div className="text-[10px] font-mono font-bold">M{m.id}</div>
                        <div className="text-[9px] truncate">{done ? '✓ Bajarildi' : 'Kutilmoqda'}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive 25-Point Audit Checklist from Module 25 */}
      <ReadinessChecklist />
    </div>
  );
};
