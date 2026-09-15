import React, { useState } from 'react';
import { ShieldCheck, Building2, Paintbrush, Wrench, PackageCheck, Check, ArrowRight, PhoneCall } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);

  const activeService: ServiceItem = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'PackageCheck':
      default:
        return <PackageCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
            SPECIALIZED WORK
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            이레 특수방수공사 <span className="text-blue-700">핵심 시공 및 사업분야</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            건물 상태와 누수 원인에 맞춤화된 전문 공법을 적용하여 불필요한 공사비 지출을 줄이고 확실한 결과를 보장합니다.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {SERVICES.map((service) => {
            const isSelected = service.id === selectedId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25 scale-[1.02]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {getIcon(service.iconName)}
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Display Card */}
        <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Service Details & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 mb-2">
                  {activeService.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-blue-700 mt-1">
                  {activeService.subtitle}
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Key Features list */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  이레 특수방수공사 시공 특장점
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Targets */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  이런 건물에 적극 권장합니다:
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                  {activeService.recommendedFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-sm transition-all"
                >
                  <span>이 공법으로 무료 견적 산출하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneMobile}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-blue-700" />
                  <span>현장 즉시 문의</span>
                </a>
              </div>
            </div>

            {/* Service Image & Process Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-300 group">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold text-cyan-300">이레 특수방수 실제 시공 현장</p>
                  <p className="text-sm font-bold">{activeService.title}</p>
                </div>
              </div>

              {/* Step Summary Box */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>표준 정석 시공 프로세스</span>
                  <span className="text-[11px] text-blue-600 font-medium">원칙 엄수</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {activeService.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold shrink-0">{idx + 1}.</span>
                      <span>{step.replace(/^[0-9단계:]*\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Grid of all 5 services for scanning */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`cursor-pointer rounded-xl p-5 border transition-all ${
                selectedId === s.id
                  ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  {getIcon(s.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-600">{s.tag}</span>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">{s.title}</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {s.shortDesc}
              </p>
            </div>
          ))}

          {/* Quick Contact Box in Grid */}
          <div className="rounded-xl p-5 bg-gradient-to-br from-blue-700 to-slate-900 text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-cyan-300">24시간 긴급 상담</span>
              <h4 className="text-base font-bold text-white mt-1">
                누수 원인을 못 찾고 계신가요?
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                대표 문영주가 부산·경남 전역 직접 방문하여 원인을 무료 진단해 드립니다.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneMobile}`}
              className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white text-blue-900 font-extrabold text-xs shadow-sm hover:bg-blue-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-700" />
              <span>010-9898-5604 직통 연결</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
