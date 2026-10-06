import React from 'react';

interface Props {
  type: 'structure' | 'supply_demand' | 'breakout_retest' | 'liquidity';
  title?: string;
  caption?: string;
}

export const ChartDiagram: React.FC<Props> = ({ type, title, caption }) => {
  return (
    <div className="bg-[#0e121a] border border-slate-800 rounded-xl p-5 my-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
            TRADING CHART ILUSTROVKA
          </span>
          <h4 className="text-sm font-semibold text-slate-100 mt-0.5">
            {title || (
              type === 'structure' ? 'Bozor strukturasi: HH, HL va BOS / CHoCH' :
              type === 'supply_demand' ? 'Demand Order Block & Imbalance (FVG) reaksiyasi' :
              type === 'breakout_retest' ? 'Haqiqiy Breakout va Retest mexanikasi' :
              'Equal Highs (EQH) va Liquidity Sweep (Likvidlik ovi)'
            )}
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>XAUUSD · H1 / H4</span>
        </div>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="w-full aspect-[2/1] sm:aspect-[2.4/1] bg-[#090b10] rounded-lg border border-slate-800/80 p-2 sm:p-4 flex items-center justify-center relative select-none">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {type === 'structure' && (
          <svg viewBox="0 0 600 260" className="w-full h-full max-h-72">
            {/* Uptrend lines */}
            <polyline
              points="40,210 120,130 180,170 280,80 340,130 440,40"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bearish reversal drop */}
            <polyline
              points="440,40 500,180 540,140 580,230"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Break of Structure (BOS) dotted line */}
            <line x1="280" y1="80" x2="440" y2="80" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="350" y="72" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">BOS (Break of Structure)</text>

            {/* Change of Character (CHoCH) line at last HL */}
            <line x1="340" y1="130" x2="520" y2="130" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="360" y="145" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">CHoCH (Oxirgi HL buzilishi)</text>

            {/* Swing labels */}
            <circle cx="120" cy="130" r="4" fill="#10b981" />
            <text x="110" y="118" fill="#94a3b8" fontSize="10" fontFamily="monospace">HH 1</text>

            <circle cx="180" cy="170" r="4" fill="#10b981" />
            <text x="175" y="190" fill="#94a3b8" fontSize="10" fontFamily="monospace">HL 1</text>

            <circle cx="280" cy="80" r="4" fill="#10b981" />
            <text x="270" y="68" fill="#94a3b8" fontSize="10" fontFamily="monospace">HH 2</text>

            <circle cx="340" cy="130" r="5" fill="#f59e0b" />
            <text x="330" y="120" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">Valid HL</text>

            <circle cx="440" cy="40" r="5" fill="#10b981" />
            <text x="430" y="28" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">HH 3 (Top)</text>

            <circle cx="500" cy="180" r="4" fill="#ef4444" />
            <text x="505" y="195" fill="#ef4444" fontSize="10" fontFamily="monospace">LL (Lower Low)</text>
          </svg>
        )}

        {type === 'supply_demand' && (
          <svg viewBox="0 0 600 260" className="w-full h-full max-h-72">
            {/* Demand Order Block Box */}
            <rect x="180" y="160" width="340" height="40" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" rx="4" />
            <text x="190" y="184" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">DEMAND ORDER BLOCK (OB ZONE)</text>

            {/* Imbalance / FVG region */}
            <rect x="230" y="90" width="80" height="70" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2" rx="2" />
            <text x="236" y="128" fill="#f59e0b" fontSize="10" fontFamily="monospace">FVG (Gap)</text>

            {/* Prior downtrend into OB */}
            <polyline points="40,60 100,120 140,100 200,180" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

            {/* Impulsive expansion (BOS) */}
            <polyline points="200,180 270,50" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <text x="278" y="55" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">Impuls / BOS ↑</text>

            {/* Pullback / Mitigation back to OB */}
            <polyline points="270,50 340,110 380,95 430,170" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" strokeLinecap="round" />
            <text x="350" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace">Mitigation (Qaytish)</text>

            {/* Powerful Buy Rejection Out of OB */}
            <polyline points="430,170 510,70 570,30" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="430" cy="170" r="5" fill="#10b981" />
            <text x="440" y="195" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">BUY ENTRY (Confluence)</text>
          </svg>
        )}

        {type === 'breakout_retest' && (
          <svg viewBox="0 0 600 260" className="w-full h-full max-h-72">
            {/* Key Resistance / Support Horizontal Zone */}
            <rect x="40" y="120" width="520" height="24" fill="rgba(59, 130, 246, 0.12)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" rx="3" />
            <text x="50" y="136" fill="#60a5fa" fontSize="11" fontFamily="monospace" fontWeight="bold">KEY LEVEL (Sobiq Resistance → Yangi Support Flip)</text>

            {/* Price bouncing below resistance */}
            <polyline points="60,200 120,130 160,170 220,128 260,155" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

            {/* Breakout Candle closing cleanly ABOVE line */}
            <rect x="290" y="80" width="14" height="55" fill="#10b981" rx="1" />
            <line x1="297" y1="65" x2="297" y2="145" stroke="#10b981" strokeWidth="2" />
            <text x="250" y="55" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">HAQIQIY BREAKOUT</text>
            <text x="250" y="68" fill="#64748b" fontSize="9" fontFamily="monospace">(Tana chiziqdan yuqorida)</text>

            {/* Retest curve */}
            <path d="M 310,95 Q 360,95 400,126" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="400" cy="126" r="5" fill="#f59e0b" />
            <text x="375" y="160" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">RETEST NUQTASI</text>

            {/* Confirmed continuation */}
            <polyline points="400,126 470,70 540,30" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
            <text x="480" y="45" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">BUY Reaksiya ↑</text>
          </svg>
        )}

        {type === 'liquidity' && (
          <svg viewBox="0 0 600 260" className="w-full h-full max-h-72">
            {/* Equal Highs line */}
            <line x1="60" y1="90" x2="480" y2="90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="70" y="78" fill="#f87171" fontSize="11" fontFamily="monospace" fontWeight="bold">EQUAL HIGHS (EQH) — BUY-SIDE LIQUIDITY $$$</text>

            {/* Price forming EQH 1 and EQH 2 */}
            <polyline points="50,180 120,90 170,160 250,90 310,150" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="120" cy="90" r="4" fill="#ef4444" />
            <circle cx="250" cy="90" r="4" fill="#ef4444" />

            {/* Stop Loss pool labels */}
            <text x="210" y="75" fill="#f59e0b" fontSize="10" fontFamily="monospace">Stop Loss / Buy Stoplar</text>

            {/* Aggressive Liquidity Sweep (Long wick above EQH) */}
            <line x1="380" y1="40" x2="380" y2="120" stroke="#ef4444" strokeWidth="2" />
            <rect x="374" y="92" width="12" height="24" fill="#ef4444" rx="1" />
            <text x="330" y="30" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">LIQUIDITY SWEEP! (Ovi)</text>
            <text x="330" y="42" fill="#94a3b8" fontSize="9" fontFamily="monospace">(Wick yuqoriga teshib qaytadi)</text>

            {/* Sudden massive bearish drop */}
            <polyline points="380,105 440,180 480,160 550,230" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
            <text x="490" y="210" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">REVERSAL HARAKAT ↓</text>
          </svg>
        )}
      </div>

      {caption && (
        <p className="text-xs text-slate-400 mt-3 italic border-t border-slate-800/60 pt-2">
          {caption}
        </p>
      )}
    </div>
  );
};
