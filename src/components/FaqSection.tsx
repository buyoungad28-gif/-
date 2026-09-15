import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            자주 묻는 <span className="text-blue-700">방수·시공 질문</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            방수 공사 전 고객님들께서 가장 많이 궁금해하시는 사항을 정리해 드립니다.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-blue-700 font-extrabold text-sm sm:text-base">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <div className="flex items-start gap-2 pt-2">
                      <span className="text-emerald-600 font-extrabold text-sm shrink-0">A.</span>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <p className="text-sm font-bold text-slate-800">
            더 궁금한 점이 있으시거나 긴급 누수 상담이 필요하신가요?
          </p>
          <p className="text-xs text-slate-500">
            문영주 대표가 직접 전화로 친절하게 궁금증을 해결해 드립니다.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneMobile}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>010-9898-5604 직통 상담</span>
          </a>
        </div>

      </div>
    </section>
  );
};
