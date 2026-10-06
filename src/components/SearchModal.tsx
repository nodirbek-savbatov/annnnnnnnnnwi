import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { allModules } from '../data';
import { Search, X, BookOpen, Video, ArrowRight, CornerDownLeft } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'module' | 'lesson';
  moduleId: number;
  lessonNumber?: number;
  title: string;
  subtitle: string;
  matchContext: string;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic across all modules and lessons
  const results: SearchResult[] = [];
  const q = query.toLowerCase().trim();

  if (q.length > 0) {
    allModules.forEach((m) => {
      // Check module title, subtitle, objective, description
      const modText = `${m.title} ${m.subtitle} ${m.description} ${m.objective}`.toLowerCase();
      if (modText.includes(q)) {
        results.push({
          type: 'module',
          moduleId: m.id,
          title: `Modul ${m.id}: ${m.title}`,
          subtitle: m.subtitle,
          matchContext: m.objective,
        });
      }

      // Check lessons
      m.lessons.forEach((l) => {
        const lessonText = `${l.title} ${l.objective} ${l.mainVideo.title} ${l.mainVideo.channel} ${l.analysis.coveredTopics.join(' ')} ${l.whyThisVideo.join(' ')} ${l.tasks.join(' ')}`.toLowerCase();
        if (lessonText.includes(q)) {
          results.push({
            type: 'lesson',
            moduleId: m.id,
            lessonNumber: l.lessonNumber,
            title: `Modul ${m.id} · Dars ${l.lessonNumber}: ${l.title}`,
            subtitle: l.mainVideo.title,
            matchContext: l.objective,
          });
        }
      });
    });
  }

  const handleSelect = (result: SearchResult) => {
    onClose();
    if (result.type === 'module') {
      navigate(`/course/module/${result.moduleId}`);
    } else {
      navigate(`/course/module/${result.moduleId}/lesson/${result.lessonNumber}`);
    }
  };

  const popularKeywords = [
    'XAUUSD', 'Liquidity', 'BOS', 'CHoCH', 'Order Block', 'FVG', 'RSI', 'Risk Management', 'NFP', 'CPI', 'FOMC', 'Psychology', 'Backtesting', 'Trading Journal'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-[#121622] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#0d1017]">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Modul, dars, mavzu yoki termin qidiring (masalan, BOS, Liquidity, NFP)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-0 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-800 border border-slate-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Quick Tag suggestions if query empty */}
        {query.trim().length === 0 && (
          <div className="p-5 overflow-y-auto">
            <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
              Tezkor qidiruv so'zlari:
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => setQuery(kw)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#090c12] border border-slate-800 hover:border-amber-500/50 hover:text-amber-300 text-slate-300 transition-colors cursor-pointer"
                >
                  {kw}
                </button>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#090c12] border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              💡 Sayt ichidagi barcha 25 ta modul, video manbalar, sifat baholari, savollar va SMC konsepsiyalari bo'yicha to'liq indeks qilingan.
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim().length > 0 && (
          <div className="p-3 overflow-y-auto space-y-1.5 divide-y divide-slate-800/60">
            {results.length > 0 ? (
              results.map((r, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(r)}
                  className="p-3 rounded-xl hover:bg-slate-800/70 transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-slate-800 text-amber-400 shrink-0">
                        {r.type === 'module' ? (
                          <BookOpen className="w-3.5 h-3.5" />
                        ) : (
                          <Video className="w-3.5 h-3.5" />
                        )}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                        {r.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 pl-6">
                      {r.matchContext}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-sm">
                "{query}" bo'yicha hech qanday modul yoki dars topilmadi.
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#090c12] border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Tanlash uchun</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
              ENTER
            </kbd>
          </div>
          <span>Jami 25 ta modul indekslangan</span>
        </div>
      </div>
    </div>
  );
};
