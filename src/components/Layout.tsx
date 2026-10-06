import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { GoldTicker } from './GoldTicker';
import { SearchModal } from './SearchModal';
import { ShieldAlert } from 'lucide-react';

export const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#0b0e14] text-slate-100 font-sans">
      {/* Sidebar (Desktop and Mobile drawer) */}
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Real-time Simulated Market Status & Session Bar */}
        <GoldTicker />

        {/* Global Navigation Header */}
        <Header
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        {/* Universal Footer with Trading Safety Warnings */}
        <footer className="border-t border-slate-800/80 bg-[#090b10] py-6 px-4 sm:px-8 mt-12 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
              <p>
                <strong>Moliya Bozorlari Ogohlantirishi:</strong> XAUUSD va Forex yuqori xavfli vositalardir. Saytdagi barcha materiallar faqat akademik ta'lim uchun mo'ljallangan. 100% kafolatlangan signal yoki daromad va'da qilinmaydi.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-600 shrink-0">
              XAUUSD Academy © 2026 · O'zbekcha Gold Trading Kursi
            </div>
          </div>
        </footer>
      </div>

      {/* Global Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};
