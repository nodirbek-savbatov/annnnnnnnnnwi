import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { courseLevels, topUzbekChannels, allModules } from '../data';
import {
  GraduationCap,
  PlayCircle,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  Zap,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lastVisited, overallPercent, completedLessonsCount, totalLessons } = useProgress();

  const continueUrl = lastVisited
    ? `/course/module/${lastVisited.moduleId}/lesson/${lastVisited.lessonNumber}`
    : '/course/module/1/lesson/1';

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121622] via-[#0e121a] to-[#080a0f] border border-slate-800 p-6 sm:p-10 lg:p-14 shadow-2xl">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O'ZBEKCHA XAUUSD AKADEMIYASI</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                XAUUSD TRADING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">ACADEMY</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                0 dan professional darajagacha XAUUSD (Oltin) tradingni bosqichma-bosqich o‘rganing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={continueUrl}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
              >
                <GraduationCap className="w-5 h-5" />
                <span>🎓 Kursni boshlash</span>
              </Link>

              <Link
                to="/course"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>📚 Modullarni ko‘rish</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-white">25</div>
                <div className="text-xs text-slate-400">Akademik Modul</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-amber-400">5</div>
                <div className="text-xs text-slate-400">Bosqich (Level)</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">100%</div>
                <div className="text-xs text-slate-400">O'zbek Tilida</div>
              </div>
            </div>
          </div>

          {/* Right Visual: Terminal Status Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b0e14] border border-slate-800 rounded-2xl p-5 shadow-2xl relative space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-bold text-white">XAUUSD.PRO TERMINAL</span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                  SMC + RISK VOSITASI
                </span>
              </div>

              {/* Progress Tracker Card */}
              <div className="p-4 rounded-xl bg-[#121622] border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono">Shaxsiy O'zlashtirish:</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {completedLessonsCount} / {totalLessons} dars ({overallPercent}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400"
                    style={{ width: `${overallPercent}%` }}
                  />
                </div>
              </div>

              {/* Mini Terminal Preview Items */}
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#10141d] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Poydevor:</span>
                  <span className="text-slate-200">MT5, Orderlar & Lot mexanikasi</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#10141d] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Analitika:</span>
                  <span className="text-slate-200">Market Structure (BOS / CHoCH)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#10141d] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Risk Nazorati:</span>
                  <span className="text-amber-400 font-bold">1-2% Per Trade qat'iy limit</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#10141d] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Yakuniy Bosqich:</span>
                  <span className="text-emerald-400 font-bold">25 Talik Real Audit Checklisti</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={continueUrl}
                  className="w-full py-2.5 px-4 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center gap-2 text-xs font-mono font-semibold transition-colors"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Oxirgi o'rganilgan darsga o'tish</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Levels Roadmap Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
              O'QUV DASTURI METODIKASI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              5 Bosqichli Professional Treyding Yo'li
            </h2>
          </div>
          <Link
            to="/course"
            className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>Barcha modullar jadvali</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courseLevels.map((lvl) => {
            const count = lvl.moduleNumbers.length;
            return (
              <div
                key={lvl.level}
                className="bg-[#10141d] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ backgroundColor: `${lvl.color}20`, color: lvl.color }}
                    >
                      {lvl.title}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {count} ta Modul (M{lvl.moduleNumbers[0]}–{lvl.moduleNumbers[lvl.moduleNumbers.length - 1]})
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {lvl.subtitle}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={`/course?level=${lvl.level}`}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                  >
                    <span>Modullarni ko'rish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top-3 Uzbek Educational Channels (From PDF Summary Map) */}
      <section className="bg-[#0e121a] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold uppercase">
            <Award className="w-4 h-4" />
            <span>PDF MANBALAR XARITASI</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Kurs Bo'yicha Eng Yaxshi O'zbekcha Ta'lim Kanallari TOP-3
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            PDF darslikda taqdim etilgan eng tartibli, ilmiy va realistik ta'lim manbalari:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topUzbekChannels.map((ch) => (
            <div
              key={ch.name}
              className="bg-[#121622] border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-bold text-xs flex items-center justify-center">
                    #{ch.rank}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">YouTube Manbasi</span>
                </div>
                <h3 className="text-sm font-bold text-white">{ch.name}</h3>
                <p className="text-xs text-slate-300 font-medium">{ch.role}</p>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {ch.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1">
                {ch.topics.slice(0, 3).map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#090b10] text-slate-400 border border-slate-800"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Philosophy & Risk Discipline */}
      <section className="bg-gradient-to-r from-amber-950/20 via-[#121622] to-slate-900 border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>KURS AKADEMIK INTIZOMI</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            100% Signal Yo'q. Faqat Ilmiy Analitika va Qat'iy Risk Management.
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ushbu akademiyada hech qanday soxta va'dalar yoki sehrli indikatorlar targ'ib qilinmaydi. Maqsad — sizni bozor mexanikasini mustaqil tahlil qiladigan va o'z hisobini himoyalay oladigan mustaqil treyderga aylantirish.
          </p>
        </div>

        <Link
          to="/course/module/17/lesson/1"
          className="shrink-0 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-amber-500/10 cursor-pointer"
        >
          Risk Management Darsiga O'tish →
        </Link>
      </section>
    </div>
  );
};
