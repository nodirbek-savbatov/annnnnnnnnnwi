import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { courseLevels, allModules } from '../data';
import { useProgress } from '../context/ProgressContext';
import {
  LayoutDashboard,
  GraduationCap,
  TrendingUp,
  FolderOpen,
  Info,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Award,
  Layers,
  X
} from 'lucide-react';

interface Props {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<Props> = ({ mobileOpen, onCloseMobile }) => {
  const { overallPercent, isModuleCompleted } = useProgress();
  const location = useLocation();

  // Levels open/collapse state (all expanded by default for easy navigation)
  const [openLevels, setOpenLevels] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleLevel = (lvl: number) => {
    setOpenLevels((prev) => ({ ...prev, [lvl]: !prev[lvl] }));
  };

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
      isActive
        ? 'bg-amber-500/10 text-amber-400 font-semibold border-l-2 border-amber-500'
        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
    }`;

  const content = (
    <div className="h-full flex flex-col bg-[#0b0e14] border-r border-slate-800/80 w-72 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <NavLink to="/" onClick={onCloseMobile} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 font-extrabold text-slate-950 text-base">
            AU
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
              <span>XAUUSD ACADEMY</span>
            </div>
            <div className="text-[10px] font-mono text-amber-400 font-medium">
              GOLD TRADING PLATFORM
            </div>
          </div>
        </NavLink>

        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Progress pill in sidebar */}
      <div className="px-5 py-3.5 border-b border-slate-800/60 bg-[#090b10]">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
          <span>O'quv Progressi</span>
          <span className="text-amber-400 font-bold">{overallPercent}%</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Navigation Links & Levels */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
        {/* Main Links */}
        <div className="space-y-1">
          <NavLink to="/" onClick={onCloseMobile} className={navItemClass}>
            <LayoutDashboard className="w-4 h-4 text-slate-400" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/course" onClick={onCloseMobile} className={navItemClass}>
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span>Barcha Modullar (25)</span>
          </NavLink>

          <NavLink to="/progress" onClick={onCloseMobile} className={navItemClass}>
            <TrendingUp className="w-4 h-4 text-slate-400" />
            <span>Progress & Audit</span>
          </NavLink>

          <NavLink to="/resources" onClick={onCloseMobile} className={navItemClass}>
            <FolderOpen className="w-4 h-4 text-slate-400" />
            <span>Resurslar & Kanallar</span>
          </NavLink>

          <NavLink to="/about" onClick={onCloseMobile} className={navItemClass}>
            <Info className="w-4 h-4 text-slate-400" />
            <span>Kurs Haqida</span>
          </NavLink>
        </div>

        {/* Levels Tree */}
        <div className="space-y-4 pt-2 border-t border-slate-800/80">
          <div className="px-3 text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
            KURS STRUKTURASI
          </div>

          <div className="space-y-2">
            {courseLevels.map((lvl) => {
              const isOpen = openLevels[lvl.level];
              const modulesInLevel = allModules.filter((m) => lvl.moduleNumbers.includes(m.id));

              return (
                <div key={lvl.level} className="rounded-lg overflow-hidden bg-[#0d1017] border border-slate-800/60">
                  {/* Level Accordion Header */}
                  <button
                    onClick={() => toggleLevel(lvl.level)}
                    className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: lvl.color }}
                      />
                      <span className="text-xs font-mono font-bold text-slate-200">
                        {lvl.title}
                      </span>
                      <span className="text-[10px] text-slate-500 truncate">
                        (M{lvl.moduleNumbers[0]}–{lvl.moduleNumbers[lvl.moduleNumbers.length - 1]})
                      </span>
                    </div>

                    {isOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {/* Level Modules List */}
                  {isOpen && (
                    <div className="px-2 pb-2 pt-0.5 space-y-0.5 border-t border-slate-800/40">
                      {modulesInLevel.map((m) => {
                        const isDone = isModuleCompleted(m.id);
                        const isCurrent = location.pathname.startsWith(`/course/module/${m.id}`);

                        return (
                          <NavLink
                            key={m.id}
                            to={`/course/module/${m.id}`}
                            onClick={onCloseMobile}
                            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] transition-colors ${
                              isCurrent
                                ? 'bg-amber-500/15 text-amber-300 font-semibold'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                          >
                            <span className="truncate">
                              Modul {m.id}: {m.title}
                            </span>
                            {isDone && (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 ml-1.5" />
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Safety Notice Footer */}
      <div className="p-4 border-t border-slate-800/80 bg-[#090b10] text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5 text-slate-400 font-medium mb-1">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Ta'limiy Platforma</span>
        </div>
        <p className="line-clamp-2 text-slate-500 text-[10px]">
          XAUUSD moliyaviy ta'lim standarti. Soxta signallarsiz sof bilim.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 shrink-0">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 w-72 h-full shadow-2xl animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
