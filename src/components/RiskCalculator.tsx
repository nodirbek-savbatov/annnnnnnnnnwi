import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export const RiskCalculator: React.FC = () => {
  const [balance, setBalance] = useState<number>(1000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(20);
  const [pipValue, setPipValue] = useState<number>(10); // Standard $10 per pip for 1.00 lot XAUUSD

  // Calculation based on PDF Modul 17
  const riskAmount = (balance * riskPercent) / 100;
  const rawLotSize = stopLossPips > 0 && pipValue > 0 ? riskAmount / (stopLossPips * pipValue) : 0;
  // Floor / format to 2 decimal places for standard MT5 lot
  const lotSize = Math.max(0.01, Math.floor(rawLotSize * 100) / 100);

  const isRiskHigh = riskPercent > 2;

  return (
    <div className="bg-[#121622] border border-amber-500/30 rounded-xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">
            XAUUSD Professional Lot va Risk Kalkulyatori
          </h3>
          <p className="text-xs text-slate-400">
            Modul 17 formulasi bo'yicha: Har bir savdoda kapitalning 1-2% idan oshmagan xavfni hisoblang
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Depozit Balansi ($)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
            <input
              type="number"
              min="10"
              max="1000000"
              value={balance}
              onChange={(e) => setBalance(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg pl-7 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Risk Foizi (%)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0.1"
              max="10"
              step="0.5"
              value={riskPercent}
              onChange={(e) => setRiskPercent(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-mono">%</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Stop Loss (pips)
          </label>
          <input
            type="number"
            min="1"
            max="500"
            value={stopLossPips}
            onChange={(e) => setStopLossPips(Math.max(1, parseFloat(e.target.value) || 1))}
            className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            1 Lot Pip Qiymati ($)
          </label>
          <input
            type="number"
            min="1"
            value={pipValue}
            onChange={(e) => setPipValue(Math.max(1, parseFloat(e.target.value) || 10))}
            className="w-full bg-[#0a0d14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
          />
          <span className="text-[10px] text-slate-500">XAUUSD uchun standart $10</span>
        </div>
      </div>

      {/* Results Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#090c12] border border-slate-800">
        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400">Ruxsat berilgan maksimal zarar (Risk Amount):</span>
          <div className="text-2xl font-bold font-mono text-amber-400">
            ${riskAmount.toFixed(2)}
          </div>
          <span className="text-xs text-slate-500">
            Balansingizning {riskPercent}% qismi
          </span>
        </div>

        <div className="space-y-1 sm:border-l sm:border-slate-800 sm:pl-4">
          <span className="text-xs font-mono text-slate-400">MT5 da ochilishi kerak bo'lgan Lot Hajmi:</span>
          <div className="text-3xl font-extrabold font-mono text-emerald-400">
            {lotSize.toFixed(2)} <span className="text-sm font-normal text-slate-400">lot</span>
          </div>
          <span className="text-xs text-slate-500">
            SL urilsa aynan ${riskAmount.toFixed(2)} yo'qotiladi
          </span>
        </div>
      </div>

      {/* Warning or Success */}
      {isRiskHigh ? (
        <div className="mt-4 p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 flex items-start gap-2.5 text-xs text-rose-300">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <strong>DIQQAT: Risk 2% dan yuqori!</strong> Darslik talabiga ko'ra professional treyderlar bitta savdoga 1-2% dan ortiq xavf qo'ymaydi. Risk foizini kamaytiring.
          </div>
        </div>
      ) : (
        <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 flex items-start gap-2.5 text-xs text-emerald-300">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>Risk chegarasi me'yorda (1-2%).</strong> Sizning kapitalingiz matematik himoyalangan.
          </div>
        </div>
      )}

      {/* PDF Formula Quote */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
        <Info className="w-3.5 h-3.5 text-slate-500" />
        <span>PDF Darslik formulasi: Lot Size = Risk Amount / (Stop Loss × Pip Value)</span>
      </div>
    </div>
  );
};
