import React from 'react';
import { UserCheck, ShieldCheck, Award, Truck, MapPin, Phone, Building2, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, CORE_PROMISES } from '../data/companyData';
import storeFrontImg from '../assets/images/ire_store_front_1789115348717.jpg';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide">
            COMPANY INTRODUCTION
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            믿을 수 있는 방수 파트너, <span className="text-blue-700">이레 특수방수공사</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            건물의 누수와 균열은 겉만 덮는 땜질 처방으로는 절대 해결되지 않습니다.<br className="hidden sm:block" />
            풍부한 실무 경험과 과학적인 원인 분석으로 반영구적인 차수 환경을 구축합니다.
          </p>
        </div>

        {/* Representative Greeting & Store Feature Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Representative Note */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    대표 인사말
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    “정직한 자재와 원칙 시공이 가장 빠른 길입니다.”
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">이레 특수방수공사</div>
                  <div className="text-lg font-extrabold text-slate-900">
                    대표 <span className="text-blue-700">문영주</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  안녕하십니까? 이레특수방수공사 대표 문영주입니다.<br />
                  저희는 부산 연제구 과정로 295-2에 오프라인 전시장 및 자재 판매 본점을 두고,
                  옥상 우레탄 도막방수, 에폭시 바닥 시공, 외벽 고소도장, 건축물 유지보수 및 크랙보수 그라우팅 공사를 전문으로 수행하고 있습니다.
                </p>
                <p>
                  방수 공사에서 가장 중요한 것은 <strong className="text-slate-900 font-semibold">‘기초 바탕면 정리(그라인딩)’</strong>와 
                  <strong className="text-slate-900 font-semibold"> ‘KS 정품 자재의 규정 두께 시공’</strong>입니다.
                  눈앞의 이익을 위해 얇게 바르거나 하청을 주지 않고, 대표인 제가 직접 현장을 확인하여
                  원인부터 확실하게 뿌리 뽑아 드리겠습니다.
                </p>
                <p>
                  전문 자재 도소매 판매점도 함께 운영하고 있으므로, 고품질 자재를 투명한 가격에 공급받아 거품 없는 견적으로 보답하겠습니다.
                </p>
              </div>
            </div>

            {/* Signature & Direct Call */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  문
                </div>
                <div>
                  <div className="text-xs text-slate-500">직통 상담 연락처</div>
                  <div className="text-base font-extrabold text-slate-900">{COMPANY_INFO.phoneMobile}</div>
                </div>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phoneMobile}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                대표에게 직접 전화 걸기
              </a>
            </div>
          </div>

          {/* Store & Credentials Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200 flex flex-col">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={storeFrontImg}
                alt="이레특수방수 전시장 및 자재창고"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-cyan-300">오프라인 전문 매장 상시 운영</p>
                <p className="text-sm sm:text-base font-bold">부산 연제구 과정로 295-2 (1층)</p>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>주요 취급 브랜드 & 공급망</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['노루페인트 (NOROO)', '에코 크린탄 2100', '제비스코 (JEVISCO)', '우레탄 변성 실란트', '고압 발포 지수재'].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-blue-900">
                  <CheckCircle className="w-4 h-4 text-blue-700" />
                  <span>소량부터 대량까지 도소매 공급</span>
                </div>
                <p className="text-slate-600 leading-normal">
                  일반 소비자 셀프 시공 상담부터 시공업체 현장 납품까지 신속하게 대응합니다.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Promises Cards */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              이레 특수방수공사의 <span className="text-blue-700">4대 고객 약속</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_PROMISES.map((promise, index) => {
              const icons = [UserCheck, ShieldCheck, Award, Truck];
              const IconComp = icons[index % icons.length];

              return (
                <div
                  key={promise.title}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {promise.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {promise.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
