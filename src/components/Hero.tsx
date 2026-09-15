import React from 'react';
import { Phone, CheckCircle2, Calculator, MapPin, Award, ShieldAlert, Sparkles, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import storeFrontImg from '../assets/images/ire_store_front_1789115348717.jpg';
import rooftopImg from '../assets/images/rooftop_urethane_work_1789115360351.jpg';
import buildingLiftImg from '../assets/images/building_exterior_lift_1789115373284.jpg';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Decorative Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Subtle light accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>부산 연제구 과정로 295-2 이레특수방수공사 본점</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-white">
              비 새는 곳, 갈라진 균열<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                원천 차수와 정밀 보강
              </span>으로<br />
              건물의 수명을 지킵니다.
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <strong className="text-white font-semibold">대표 문영주</strong>가 직접 현장 진단부터 시공까지 책임집니다.
              옥상 우레탄 방수, 주차장·공장 에폭시, 외벽 고소도장, 고압 그라우팅 인젝션 및 KS 인증 우수 방수자재 도소매 전문점입니다.
            </p>

            {/* Key trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                '대표 문영주 직접 무료 방문 견적',
                'KS 1호 노루페인트 에코 크린탄 100% 정품',
                '하자보수 책임 보증 및 정기 점검',
                '부산·경남 전역 출장 신속 시공',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={`tel:${COMPANY_INFO.phoneMobile}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-extrabold text-base shadow-lg shadow-blue-700/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 fill-white animate-bounce" />
                <span>대표 직통 전화 (010-9898-5604)</span>
              </a>

              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-white font-bold text-base border border-slate-600 transition-all hover:border-slate-500"
              >
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>무료 견적 계산 & 문의</span>
              </button>
            </div>

            {/* Contact numbers quick banner */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>대표 휴대폰: <strong className="text-slate-200">010-9898-5604</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>사무실 / 팩스: <strong className="text-slate-200">051-756-5604</strong></span>
              </div>
            </div>
          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 to-slate-700/30 shadow-2xl">
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700/60">
                {/* Main Hero Showcase Image (Storefront) */}
                <div className="relative h-64 sm:h-72 overflow-hidden group">
                  <img
                    src={storeFrontImg}
                    alt="이레 특수방수 매장 전경 및 자재 전시"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-blue-700/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md border border-blue-400/40">
                    부산 연제구 본점 실매장
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-bold text-sm sm:text-base leading-tight">
                      이레특수방수 전시장 & 시공센터
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      연제구 과정로 295-2 (노루페인트·제비스코 공식 취급)
                    </p>
                  </div>
                </div>

                {/* Sub thumbnails for work cases */}
                <div className="p-4 grid grid-cols-2 gap-3 bg-slate-900/90">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    <img
                      src={rooftopImg}
                      alt="옥상 연삭 작업"
                      className="w-12 h-12 rounded-md object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-200 truncate">옥상 연삭 & 우레탄</p>
                      <p className="text-[11px] text-emerald-400">정밀 바탕 정리</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    <img
                      src={buildingLiftImg}
                      alt="외벽 고소작업"
                      className="w-12 h-12 rounded-md object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-200 truncate">외벽 도장 & 방수</p>
                      <p className="text-[11px] text-cyan-400">스카이차 자체 시공</p>
                    </div>
                  </div>
                </div>

                {/* Bottom trust bar */}
                <div className="px-4 py-3 bg-slate-800/60 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>정품 규정 두께 100% 준수</span>
                  </div>
                  <a
                    href="#location"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    매장 위치보기
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-slate-900 p-3.5 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-black text-lg">
                30+
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">건축방수·도장</p>
                <p className="text-sm font-extrabold text-slate-900">현장 시공 노하우</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
