import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { auditChecklistItems } from '../data';
import { CheckSquare, Square, ShieldCheck, AlertCircle, Sparkles, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReadinessChecklist: React.FC = () => {
  const { checklistChecked, toggleChecklistItem, checklistCheckedCount, checklistTotalCount, checklistPercent } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Backtesting', 'Demo', 'Risk', 'Journal', 'SMC', 'Psixologiya'];

  const filteredItems = selectedCategory === 'All'
    ? auditChecklistItems
    : auditChecklistItems.filter((i) => i.category === selectedCategory);

  const handleToggle = (id: string) => {
    toggleChecklistItem(id);
    if (!checklistChecked[id] && checklistCheckedCount + 1 === checklistTotalCount) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const getReadinessStatus = () => {
    if (checklistCheckedCount === checklistTotalCount) {
      return {
        text: "100% TAYYOR — Barcha 25 ta audit talablari bajarildi. Qat'iy intizom bilan real savdoni boshlash mumkin!",
        color: 'text-emerald-400',
        bg: 'bg-emerald-950/40 border-emerald-700/60',
      };
    }
    if (checklistCheckedCount >= 20) {
      return {
        text: "YAXSHI TAYYORLIK — Asosiy talablar bajarilgan, biroq qolgan kamchiliklarni to'liq bartaraf eting.",
        color: 'text-amber-400',
        bg: 'bg-amber-950/40 border-amber-700/60',
      };
    }
    return {
      text: "TAYYOR EMAS — Shoshilmang! Hali demoda kamida 2 oy va 100 ta backtest talablarini bajaring.",
      color: 'text-rose-400',
      bg: 'bg-rose-950/40 border-rose-700/60',
    };
  };

  const status = getReadinessStatus();

  return (
    <div className="bg-[#10141d] border border-slate-800 rounded-xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
            MODUL 25: YAKUNIY AUDIT
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
            Real Hisobga O'tishdan Oldingi 25 Talik Qat'iy Checklist
          </h3>
          <p className="text-xs text-slate-400">
            Darslikdagi talablar: 100 ta backtest, 2 oylik demo, 1-2% risk, savdo jurnali va barcha intizom qoidalari
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#0a0d14] px-4 py-2.5 rounded-lg border border-slate-700/80 self-start sm:self-auto">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Bajarildi</div>
            <div className="text-base font-bold font-mono text-emerald-400">
              {checklistCheckedCount} / {checklistTotalCount}
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-emerald-500/40 flex items-center justify-center font-mono text-xs font-bold text-white">
            {checklistPercent}%
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
          style={{ width: `${checklistPercent}%` }}
        />
      </div>

      {/* Status Alert */}
      <div className={`p-4 rounded-lg border mb-5 flex items-start gap-3 ${status.bg}`}>
        <ShieldCheck className={`w-5 h-5 shrink-0 mt-0.5 ${status.color}`} />
        <div>
          <div className={`text-xs font-bold uppercase tracking-wider ${status.color}`}>
            AUDIT HOLATI ({checklistPercent}%)
          </div>
          <p className="text-xs text-slate-200 mt-0.5">{status.text}</p>
        </div>
      </div>

      {/* Category Filter Pills (Interactive tabs) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-slate-500 mr-1 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {cat === 'All' ? 'Barcha 25 ta' : cat}
          </button>
        ))}
      </div>

      {/* Checklist Items */}
      <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
        {filteredItems.map((item, index) => {
          const isChecked = !!checklistChecked[item.id];
          return (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-emerald-950/20 border-emerald-800/60 text-slate-100'
                  : 'bg-[#0a0d14] border-slate-800/80 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="mt-0.5 shrink-0 text-emerald-400">
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 fill-emerald-500/20" />
                ) : (
                  <Square className="w-4 h-4 text-slate-600" />
                )}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-semibold ${isChecked ? 'line-through text-slate-400' : 'text-white'}`}>
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    Modul {item.moduleNumber} · {item.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
