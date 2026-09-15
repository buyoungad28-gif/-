import React, { useState } from 'react';
import { Shield, Phone, Menu, X, Clock, MapPin, Calculator, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '회사소개', href: '#about' },
    { name: '시공분야', href: '#services' },
    { name: '시공공정', href: '#process' },
    { name: '시공실적', href: '#portfolio' },
    { name: '자재판매', href: '#materials' },
    { name: '견적계산기', href: '#calculator' },
    { name: '오시는길', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              부산·경남 전 지역 무료 방문 견적
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {COMPANY_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {COMPANY_INFO.businessHours}
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneOffice}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              사무실·팩스: <span className="text-white font-semibold">{COMPANY_INFO.phoneOffice}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight">
                  이레 <span className="text-blue-700">특수방수공사</span>
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  대표 문영주
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                일반·특수방수 · 우레탄/에폭시 · 크랙보수 · 자재 도소매
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-2xs"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              간편 견적문의
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneMobile}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold shadow-md shadow-blue-700/25 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{COMPANY_INFO.phoneMobile}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneMobile}`}
              className="p-2 rounded-lg bg-blue-700 text-white"
              title="전화 연결"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-800 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              온라인 무료 견적 신청
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneMobile}`}
              className="w-full py-3 rounded-lg bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 fill-white" />
              대표 직통 전화 (010-9898-5604)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
