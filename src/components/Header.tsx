import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { Search, Menu, PlayCircle, Award, Download } from 'lucide-react';

interface Props {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<Props> = ({ onOpenMobileMenu, onOpenSearch }) => {
  const { lastVisited, overallPercent } = useProgress();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (lastVisited) {
      navigate(`/course/module/${lastVisited.moduleId}/lesson/${lastVisited.lessonNumber}`);
    } else {
      navigate('/course/module/1/lesson/1');
    }
  };

  return (
    <header className="h-16 bg-[#0d1017]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden cursor-pointer"
          aria-label="Menyuni ochish"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search trigger bar */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#080a0f] border border-slate-800 hover:border-slate-700 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer w-44 sm:w-64"
        >
          <Search className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Modul yoki termin qidirish...</span>
          <kbd className="hidden sm:inline-block ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            ⌘K
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Download ZIP button */}
        <a
          href="/xauusd-trading-academy.zip"
          download="xauusd-trading-academy.zip"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs border border-slate-700 transition-colors"
          title="Loyiha ZIP arxivini yuklab olish"
        >
          <Download className="w-3.5 h-3.5 text-amber-400" />
          <span>ZIP</span>
        </a>

        {/* Continue Learning button */}
        <button
          onClick={handleContinue}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/10 cursor-pointer"
        >
          <PlayCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Darsni davom ettirish</span>
          <span className="sm:hidden">Davom</span>
        </button>

        {/* Overall Progress tag */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080a0f] border border-slate-800 text-xs font-mono">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-400">Progress:</span>
          <span className="text-emerald-400 font-bold">{overallPercent}%</span>
        </div>
      </div>
    </header>
  );
};
