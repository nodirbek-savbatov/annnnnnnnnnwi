import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-5">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold text-white font-mono">404</h1>
        <h2 className="text-xl font-bold text-slate-200">Sahifa Topilmadi</h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md">
          Siz qidirayotgan sahifa yoki modul mavjud emas yoki boshqa manzilga ko'chirilgan.
        </p>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>

        <Link
          to="/course"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Barcha modullar</span>
        </Link>
      </div>
    </div>
  );
};
