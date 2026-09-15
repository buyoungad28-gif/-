import React, { useState } from 'react';
import { Camera, MapPin, Calendar, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { PORTFOLIO_CASES } from '../data/companyData';
import { PortfolioCase } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<PortfolioCase | null>(null);

  const filterTabs = [
    { label: '전체 현장', value: 'all' },
    { label: '옥상 우레탄 방수', value: 'waterproof' },
    { label: '외벽 도장·스카이', value: 'exterior' },
    { label: '매장 & 자재 전시장', value: 'material' },
  ];

  const filteredCases = activeFilter === 'all'
    ? PORTFOLIO_CASES
    : PORTFOLIO_CASES.filter((c) => c.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
            REAL CONSTRUCTION PORTFOLIO
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            이레 특수방수공사 <span className="text-blue-700">현장 시공 갤러리</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            부산·경남 일대의 실제 시공 현장입니다. 거짓 없는 100% 정품 자재와 정밀 시공으로 고객 신뢰를 지켜갑니다.
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.value
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-blue-700/90 text-white text-xs font-bold px-3 py-1 rounded-md">
                  {item.badge}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-xs bg-slate-900/60 px-2 py-0.5 rounded text-slate-300">
                    {item.scope}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="text-blue-700 font-bold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    하자보증 완료
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Store Verification Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                오프라인 매장 실재성 보증
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                부산 연제구 과정로 295-2에 실제 전시 매장을 운영 중입니다
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                유령업체나 전화 중개업체가 아닙니다. 언제든 매장을 방문하셔서 자재를 직접 확인하시거나 문영주 대표와 대면 상담하실 수 있습니다.
              </p>
            </div>
            <a
              href="#location"
              className="shrink-0 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm shadow-sm transition-colors"
            >
              매장 위치 & 길찾기
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
