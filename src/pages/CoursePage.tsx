import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { allModules, courseLevels } from '../data';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, CheckCircle2, ChevronRight, Filter, Search, Award } from 'lucide-react';

export const CoursePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeLevelParam = searchParams.get('level');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>(
    activeLevelParam ? parseInt(activeLevelParam, 10) : 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const { isModuleCompleted, overallPercent } = useProgress();

  const handleLevelChange = (lvl: number | 'all') => {
    setSelectedLevel(lvl);
    if (lvl === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ level: lvl.toString() });
    }
  };

  const filteredModules = allModules.filter((m) => {
    const matchesLevel = selectedLevel === 'all' || m.level === selectedLevel;
    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="space-y-8 py-2">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
            AKADEMIK KURS DASTURI
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Barcha 25 Ta Modul va Bosqichlar
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            0 dan boshlab real hisob auditigacha bo'lgan to'liq o'quv dasturi. Har bir modul aniq amaliy maqsad va darslikka ega.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#0d1017] p-3 rounded-xl border border-slate-800 shrink-0 self-start md:self-auto">
          <Award className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-[11px] font-mono text-slate-400">Umumiy Progress</div>
            <div className="text-sm font-bold font-mono text-emerald-400">{overallPercent}% tugallandi</div>
          </div>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0e121a] p-3.5 rounded-xl border border-slate-800">
        {/* Level Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => handleLevelChange('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedLevel === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800/80 text-slate-400 hover:text-white'
            }`}
          >
            Barchasi (25)
          </button>

          {courseLevels.map((lvl) => (
            <button
              key={lvl.level}
              onClick={() => handleLevelChange(lvl.level)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap ${
                selectedLevel === lvl.level
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white'
              }`}
            >
              {lvl.title}
            </button>
          ))}
        </div>

        {/* Local Search Input */}
        <div className="relative sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Modul nomini qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#080a0f] border border-slate-700/80 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Modules List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredModules.map((m) => {
          const isDone = isModuleCompleted(m.id);
          const firstLesson = m.lessons[0];
          const qualityScore = firstLesson?.mainVideo.qualityScore;

          return (
            <div
              key={m.id}
              className={`rounded-2xl border transition-all flex flex-col justify-between p-5 sm:p-6 group ${
                isDone
                  ? 'bg-[#0e141a] border-emerald-900/60 hover:border-emerald-700/80'
                  : 'bg-[#10141d] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                {/* Card Top Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#080a0f] border border-slate-800 text-amber-400">
                      MODUL {m.id < 10 ? `0${m.id}` : m.id}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      LEVEL {m.level}
                    </span>
                  </div>

                  {isDone ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Bajarildi</span>
                    </span>
                  ) : qualityScore ? (
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Sifat: {qualityScore}/100
                    </span>
                  ) : null}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {m.title}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-medium mt-0.5 line-clamp-1">
                    {m.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {m.objective}
                </p>

                {/* Lesson metadata line */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/60">
                  <span>Darslar: {m.lessons.length} ta dars</span>
                  <span className="text-slate-400">Kanal: {m.bestChannel}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4">
                <Link
                  to={`/course/module/${m.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:bg-slate-700"
                >
                  <span>Modulni ochish</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-[#0e121a] border border-slate-800 text-slate-400 text-sm">
          Qidiruv shartlariga mos keluvchi modul topilmadi.
        </div>
      )}
    </div>
  );
};
