import React from 'react';
import { Link } from 'react-router-dom';
import { courseLevels } from '../data';
import {
  GraduationCap,
  ShieldAlert,
  Target,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 py-2 max-w-4xl mx-auto">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
          AKADEMIYA HAQIDA
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          XAUUSD Trading Academy
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          O'zbek tilidagi professional va ilmiy asoslangan Oltin (Gold) savdosi ta'lim platformasi.
        </p>
      </div>

      {/* Kurs Maqsadi */}
      <section className="bg-[#10141d] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
          <Target className="w-4 h-4" />
          <span>KURS ASOSIY MAQSADI</span>
        </div>

        <h2 className="text-xl font-bold text-white">
          0 Dan Boshlovchini Real Hisobgacha Bosqichma-Bosqich Yetkazish
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Platformaning bosh maqsadi — foydalanuvchini tartibsiz savdo va hisob kuydirish illuziyasidan asrab, quyidagi qat'iy akademik ketma-ketlik orqali shakllantirish:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          {[
            { step: '01', title: 'Poydevor Nazariya', desc: 'MT5, Orderlar & Shamlar' },
            { step: '02', title: 'Price Action & SMC', desc: 'Bozor strukturasi, Likvidlik' },
            { step: '03', title: 'Makro & Yangilik', desc: 'DXY, NFP, CPI, XAUUSD' },
            { step: '04', title: 'Risk & Backtest', desc: '1-2% risk, 100 ta sinov' },
            { step: '05', title: 'Demo & Real Audit', desc: 'Journal, 25 talik checklist' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#090c12] border border-slate-800 space-y-1 text-center"
            >
              <div className="text-xs font-mono font-bold text-amber-400">{item.step}</div>
              <div className="text-xs font-semibold text-white">{item.title}</div>
              <div className="text-[10px] text-slate-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Bosqichli Level Strukturasi */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
          <Layers className="w-4 h-4" />
          <span>LEVEL STRUKTURASI</span>
        </div>
        <h2 className="text-xl font-bold text-white">
          5 Ta O'quv Bosqichi
        </h2>

        <div className="space-y-3">
          {courseLevels.map((lvl) => (
            <div
              key={lvl.level}
              className="p-5 rounded-xl bg-[#10141d] border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase"
                  style={{ backgroundColor: `${lvl.color}20`, color: lvl.color }}
                >
                  {lvl.title}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Modullar: {lvl.moduleNumbers.join(', ')}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">{lvl.subtitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{lvl.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Qat'iy Trading Xavfsizligi va Risk Ogohlantirishi */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-950/20 via-[#10141d] to-[#0e121a] border border-rose-800/40 space-y-4">
        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
          <AlertTriangle className="w-4 h-4" />
          <span>MUHIM XAVFSIZLIK VA ETODOLOGIYA OGOHLANTIRISHI</span>
        </div>

        <h3 className="text-lg font-bold text-white">
          Moliyaviy Mas'uliyat va Kafolat Yo'qligi
        </h3>

        <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
          <p>
            • <strong>100% Signal yoki Daromad Kafolati Yo'q:</strong> XAUUSD (Oltin) bozori yuqori volatillik va xavfga ega moliyaviy instrument hisoblanadi. Hech bir inson yoki indikator kelajakni aniq bilmaydi.
          </p>
          <p>
            • <strong>Kapital Xavfsizligi:</strong> O'z mablag'ingizni qarz, kredit yoki hayotiy zarur xarajatlar puli bilan tavakkal qilmang. Faqat yo'qotishga ruhiy tayyor bo'lgan erkin kapital bilangina real savdoga ruxsat beriladi.
          </p>
          <p>
            • <strong>Stop-Loss Shart:</strong> Stop lossiz savdo qilish — depozitni zudlik bilan yo'qotishning kafolatlangan usulidir.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="pt-4 text-center">
        <Link
          to="/course/module/1/lesson/1"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm font-mono transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
        >
          <BookOpen className="w-4 h-4" />
          <span>1-Moduldan O'rganishni Boshlash</span>
        </Link>
      </div>
    </div>
  );
};
