import React from 'react';
import { topUzbekChannels, allCourseChannels, externalTools } from '../data';
import {
  FolderOpen,
  Award,
  ExternalLink,
  Layers,
  Wrench,
  Video,
  CheckCircle2,
  Calendar,
  LineChart,
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  return (
    <div className="space-y-12 py-2 max-w-5xl mx-auto">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800">
        <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
          KURS MANBALARI & TAVSIYALAR
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
          Resurslar va Ta'lim Manbalari Xaritasi
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          PDF darslikda keltirilgan barcha video manbalar, top-3 o'zbekcha ta'lim kanallari hamda tahlil platformalari.
        </p>
      </div>

      {/* BUTUN KURS BO'YICHA YAKUNIY VIDEO MANBALAR XARITASI (SUMMARY MAP) */}
      <section className="bg-[#10141d] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
          <Layers className="w-5 h-5 text-amber-400" />
          <h2 className="text-base sm:text-lg font-bold text-white">
            Butun Kurs Bo'yicha Yakuniy Video Manbalar Xaritasi (Summary Map)
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#090c12] border border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase">
              <span>● LEVEL 1 (Modul 1–3):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              Trading asoslari, MT5 sozlash va orderlar.
            </p>
            <div className="text-xs font-mono text-slate-400">
              Asosiy kanallar: <span className="text-amber-400">Sardor Trader, Uranus, Feruzbek Aliev, Habibullo Saidimronov</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#090c12] border border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
              <span>● LEVEL 2 (Modul 4–11):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              Price Action, Structure, Supply/Demand va Liquidity.
            </p>
            <div className="text-xs font-mono text-slate-400">
              Asosiy kanallar: <span className="text-amber-400">Smart Money Uzbek, Feruzbek Aliev, HBS Hamjamiyati</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#090c12] border border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
              <span>● LEVEL 3 (Modul 12–16):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              Technical, Fundamental analysis, XAUUSD xususiyatlari va News.
            </p>
            <div className="text-xs font-mono text-slate-400">
              Asosiy kanallar: <span className="text-amber-400">Uranus, HBS Hamjamiyati, Sardor Trader, Muhammad Ali</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#090c12] border border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase">
              <span>● LEVEL 4 (Modul 17–21):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              Risk Management, Psychology, Entry/Exit models va Backtesting.
            </p>
            <div className="text-xs font-mono text-slate-400">
              Asosiy kanallar: <span className="text-amber-400">Sardor Trader, Smart Money Uzbek, Uranus</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#090c12] border border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-pink-400 uppercase">
              <span>● LEVEL 5 (Modul 22–25):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              Trading Journal, Demo Trading, Statistics va Real Account Audit.
            </p>
            <div className="text-xs font-mono text-slate-400">
              Asosiy kanallar: <span className="text-amber-400">Feruzbek Aliev, HBS Hamjamiyati, Sardor Trader</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOP-3 UZBEK CHANNELS DETAIL */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl font-bold text-white">
            Eng Yaxshi O'zbekcha Ta'lim Kanallari TOP-3 Taligi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topUzbekChannels.map((ch) => (
            <div
              key={ch.name}
              className="p-6 rounded-2xl bg-[#10141d] border border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 font-mono font-bold text-sm flex items-center justify-center border border-amber-500/20">
                    #{ch.rank}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">YouTube Ekspert</span>
                </div>

                <h3 className="text-base font-bold text-white">{ch.name}</h3>
                <div className="text-xs text-amber-400 font-medium">{ch.role}</div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-500">Asosiy mavzular:</div>
                <div className="flex flex-wrap gap-1">
                  {ch.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#090c12] text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTERNAL TOOLS & SOFTWARE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl font-bold text-white">
            Darslikda Talab Qilingan Amaliy Dasturiy Vositalar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {externalTools.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-xl bg-[#10141d] border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{tool.name}</h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {tool.category}
                  </span>
                </div>
                <div className="text-xs text-amber-400 font-medium">{tool.purpose}</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-2.5 rounded-lg bg-[#090c12] hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <span>Rasmiy sahifaga o'tish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
