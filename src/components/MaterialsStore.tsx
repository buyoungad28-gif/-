import React from 'react';
import { Package, Check, Phone, ShieldAlert, Sparkles, ShoppingBag } from 'lucide-react';
import { MATERIALS_CATALOG, COMPANY_INFO } from '../data/companyData';
import storeFrontImg from '../assets/images/ire_store_front_1789115348717.jpg';

export const MaterialsStore: React.FC = () => {
  return (
    <section id="materials" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            MATERIALS & WHOLESALE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            국내 우수 방수·도장 <span className="text-blue-700">종합 자재 판매</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            부산 연제구 과정로 295-2 오프라인 매장에서 노루페인트·제비스코 정품 방수재 및 도장 자재를 시공업체와 일반인께 최저 도소매가로 공급합니다.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-2xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">100% KS 인증 정품만 취급</h3>
            <p className="text-xs text-slate-500">노루페인트 에코 크린탄 2100 등 검증된 1군 정품 원자재</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-2xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">소량 1캔부터 현장 대량 납품</h3>
            <p className="text-xs text-slate-500">필요한 수량만큼 부담 없이 매장 즉시 수령 및 현장 용달 배송</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-2xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">셀프 시공 무료 기술 지도</h3>
            <p className="text-xs text-slate-500">문영주 대표가 직접 배합 비율, 롤러 작업 순서 친절 안내</p>
          </div>
        </div>

        {/* Materials Catalog Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              대표 취급 품목 리스트
            </h3>
            <span className="text-xs text-slate-500">
              * 매장 방문 또는 전화 주문 시 당일 출고 가능
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATERIALS_CATALOG.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    {item.isPopular && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-200">
                        인기 품목
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-blue-700 mb-3">
                    제조사: {item.brand} | 규격: {item.capacity}
                  </p>

                  <div className="p-2.5 rounded-lg bg-slate-50 text-xs text-slate-600 mb-4 border border-slate-100">
                    <span className="font-semibold text-slate-800">제품 규격:</span> {item.spec}
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">도소매가 문의</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneMobile}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    자재 단가 전화 문의
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Pickup Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                원하시는 방수 자재가 있으신가요?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                부산 연제구 과정로 295-2 매장 방문 또는 전화(051-756-5604, 010-9898-5604)로 재고 문의하시면 신속히 안내해 드립니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneOffice}`}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm transition-colors"
            >
              매장: 051-756-5604
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneMobile}`}
              className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              직통: 010-9898-5604
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
