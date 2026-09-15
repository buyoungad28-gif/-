import React from 'react';
import { Shield, Phone, MapPin, Printer, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-black">
                <Shield className="w-5 h-5 text-cyan-300" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                이레 <span className="text-blue-400">특수방수공사</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              30년 현장 기술력과 100% KS 인증 정품 자재로 옥상 우레탄 방수, 에폭시 바닥, 외벽 도장, 크랙보수 인젝션 그라우팅을 책임 시공하는 부산 최고의 방수 전문 기업입니다.
            </p>

            <div className="pt-2 text-xs space-y-1 text-slate-300">
              <p>
                <strong className="text-white">상호명:</strong> 이레 특수방수공사 &nbsp;|&nbsp;{' '}
                <strong className="text-white">대표:</strong> {COMPANY_INFO.representative}
              </p>
              <p>
                <strong className="text-white">사업장 주소:</strong> {COMPANY_INFO.address} ({COMPANY_INFO.addressDetail})
              </p>
              <p>
                <strong className="text-white">대표 직통:</strong> {COMPANY_INFO.phoneMobile} &nbsp;|&nbsp;{' '}
                <strong className="text-white">사무실/팩스:</strong> {COMPANY_INFO.phoneOffice}
              </p>
            </div>
          </div>

          {/* Quick Business Specialties */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              주요 사업 및 시공 분야
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• 일반 방수 및 특수방수 (옥상 우레탄 도막, 침투식 방수)</li>
              <li>• 건축물 유지보수 및 내구성 구조 보강</li>
              <li>• 페인트 · 에폭시 · 우레탄 시공 (바닥 에폭시 & 외벽 스카이 도장)</li>
              <li>• 크랙보수 및 고압 인젝션 그라우팅 차수 시공</li>
              <li>• 국내 우수 방수·페인트 종합 자재 도소매 판매 (노루/제비스코)</li>
            </ul>
          </div>

          {/* Contact Fast Card */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              고객 상담 안내
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Phone className="w-4 h-4" />
                <span>24시간 긴급 누수 상담</span>
              </div>
              <p className="text-white font-extrabold text-base">
                {COMPANY_INFO.phoneMobile}
              </p>
              <p className="text-slate-400 text-[11px]">
                부산·경남 전 지역 무료 방문 실측 견적 지원
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-800"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>맨 위로 이동</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 이레 특수방수공사 (대표 문영주). All rights reserved.</p>
          <p className="text-slate-500">
            부산광역시 연제구 과정로 295-2 | TEL: 051-756-5604 | H.P: 010-9898-5604
          </p>
        </div>
      </div>
    </footer>
  );
};
