import React, { useState } from 'react';
import { TrendingUp, AlertCircle, CheckCircle2, Sigma } from 'lucide-react';

export const ExpectancyCalculator: React.FC = () => {
  const [winRate, setWinRate] = useState<number>(45);
  const [avgWin, setAvgWin] = useState<number>(300);
  const [avgLoss, setAvgLoss] = useState<number>(100);
  const [totalTrades, setTotalTrades] = useState<number>(100);

  const lossRate = 100 - winRate;
  const winRateDec = winRate / 100;
  const lossRateDec = lossRate / 100;

  // Modul 24 Formula
  const expectancy = (winRateDec * avgWin) - (lossRateDec * avgLoss);

  const totalProfit = (winRateDec * totalTrades) * avgWin;
  const totalLoss = (lossRateDec * totalTrades) * avgLoss;
  const profitFactor = totalLoss > 0 ? totalProfit / totalLoss : totalProfit > 0 ? 99 : 0;

  const isProfitable = expectancy > 0;
  const isHealthyPF = profitFactor >= 1.5;

  return (
    <div className="bg-[#121622] border border-blue-500/30 rounded-xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Sigma className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">
            Strategiya Statistikasi: Expectancy & Profit Factor Kalkulyatori
          </h3>
          <p className="text-xs text-slate-400">
            Modul 24 formulasi: Har bir savdodan kutilayotgan matematik foyda (Edge) ni tahlil qiling
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Win Rate (%)
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="99"
              value={winRate}
              onChange={(e) => setWinRate(Math.min(99, Math.max(1, parseFloat(e.target.value) || 1)))}
              className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-mono">%</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            O'rtacha G'alaba ($)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
            <input
              type="number"
              min="1"
              value={avgWin}
              onChange={(e) => setAvgWin(Math.max(1, parseFloat(e.target.value) || 1))}
              className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg pl-7 pr-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            O'rtacha Zarar ($)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
            <input
              type="number"
              min="1"
              value={avgLoss}
              onChange={(e) => setAvgLoss(Math.max(1, parseFloat(e.target.value) || 1))}
              className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg pl-7 pr-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Sinov Savdolari Soni
          </label>
          <input
            type="number"
            min="10"
            max="1000"
            value={totalTrades}
            onChange={(e) => setTotalTrades(Math.max(10, parseInt(e.target.value, 10) || 100))}
            className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
          />
          <span className="text-[10px] text-slate-500">PDF tavsiyasi: 100 ta savdo</span>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#090c12] border border-slate-800">
        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400">Har bir savdodan Expectancy (Kutilma):</span>
          <div className={`text-2xl font-bold font-mono ${isProfitable ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isProfitable ? '+' : ''}${expectancy.toFixed(2)}
          </div>
          <span className="text-xs text-slate-500">
            {isProfitable ? 'Matematik jihatdan foydali tizim' : 'Zararli tizim (Qayta ko\'rib chiqing)'}
          </span>
        </div>

        <div className="space-y-1 sm:border-l sm:border-slate-800 sm:pl-4">
          <span className="text-xs font-mono text-slate-400">Profit Factor (Foyda / Zarar):</span>
          <div className={`text-3xl font-extrabold font-mono ${isHealthyPF ? 'text-emerald-400' : 'text-amber-400'}`}>
            {profitFactor.toFixed(2)}
          </div>
          <span className="text-xs text-slate-500">
            {isHealthyPF ? 'Standartdan yuqori (≥ 1.5 sog\'lom tizim)' : '1.5 dan past — takomillashtirish zarur'}
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-blue-950/40 border border-blue-800/60 flex items-start gap-2.5 text-xs text-blue-300">
        {isProfitable ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
        )}
        <div>
          <strong>Darslik xulosasi:</strong> {isProfitable ? (
            `Ushbu tizim ${totalTrades} ta savdoda jami $${(expectancy * totalTrades).toFixed(0)} kutilayotgan sof foyda keltiradi. Strategiya statistik ustunlikka (Edge) ega.`
          ) : (
            `Kutilma manfiy ($${expectancy.toFixed(2)}). Hatto ko'p urinish bo'lsa ham kapital kamayib boraveradi. Risk/Reward yoki kirish filtrlashini o'zgartiring.`
          )}
        </div>
      </div>
    </div>
  );
};
