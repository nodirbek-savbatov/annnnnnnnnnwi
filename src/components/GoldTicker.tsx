import React, { useState, useEffect } from 'react';
import { Activity, Clock } from 'lucide-react';

export const GoldTicker: React.FC = () => {
  const [price, setPrice] = useState(2648.35);
  const [change, setChange] = useState(14.80);
  const [percentChange, setPercentChange] = useState(0.56);

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle realistic tick
      const delta = (Math.random() - 0.48) * 0.40;
      setPrice((prev) => +(prev + delta).toFixed(2));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 bg-[#090b10] border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between text-xs font-mono text-slate-400 overflow-x-auto scrollbar-none select-none">
      <div className="flex items-center gap-4 sm:gap-6 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-slate-200">XAU/USD (GOLD)</span>
          <span className="text-white font-extrabold tracking-wide">${price.toFixed(2)}</span>
          <span className={`text-[11px] font-semibold ${change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {change >= 0 ? '+' : ''}{change.toFixed(2)} ({percentChange > 0 ? '+' : ''}{percentChange}%)
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-500 border-l border-slate-800 pl-4">
          <span>Spred: <strong className="text-slate-300 font-normal">1.8 pips</strong></span>
          <span>ATR (D1): <strong className="text-slate-300 font-normal">285 pips</strong></span>
          <span>1 Lot: <strong className="text-slate-300 font-normal">100 oz ($10/pip)</strong></span>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 ml-4">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline text-slate-500">Faol Sessiya:</span>
          <span className="text-amber-400 font-medium">London / NY Kesishuvi</span>
        </div>
      </div>
    </div>
  );
};
