import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuickActionBarProps {
  onOpenEstimate: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenEstimate }) => {
  return (
    <aside aria-label="빠른 문의 바로가기" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 sm:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneMobile}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-700 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 fill-white" />
          <span>전화 상담</span>
        </a>

        <a
          href={`sms:${COMPANY_INFO.phoneMobile}?body=${encodeURIComponent('[이레특수방수] 견적 및 시공 문의드립니다.')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>문자 문의</span>
        </a>

        <button
          type="button"
          onClick={onOpenEstimate}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-amber-400" />
          <span>무료 견적</span>
        </button>
      </div>
    </aside>
  );
};
