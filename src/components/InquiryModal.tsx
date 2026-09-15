import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle, Sparkles, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = '옥상 우레탄 도막방수',
}) => {
  const [service, setService] = useState<string>(defaultService);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }

    const inquiry = {
      id: Date.now().toString(),
      name,
      phone,
      location: location || '부산/경남',
      service,
      message,
      createdAt: new Date().toLocaleString('ko-KR'),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ire_inquiries') || '[]');
      existing.unshift(inquiry);
      localStorage.setItem('ire_inquiries', JSON.stringify(existing));
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setLocation('');
    setMessage('');
    onClose();
  };

  const smsText = encodeURIComponent(
    `[이레특수방수 견적신청]\n성함: ${name || '고객'}\n연락처: ${phone}\n공종: ${service}\n지역: ${location || '부산'}\n내용: ${message || '상담 요청'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                대표 문영주 직접 방문 무료 견적
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                빠른 온라인 견적 상담 신청
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                기본 정보를 남겨주시면 대표가 신속히 현장 상담을 진행합니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  시공 또는 자재 분야 <span className="text-red-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  <option value="옥상 우레탄 도막방수">옥상 우레탄 도막방수</option>
                  <option value="건물 외벽 도장 및 방수 (스카이)">건물 외벽 도장 및 방수 (스카이)</option>
                  <option value="주차장 / 공장 에폭시 바닥">주차장 / 공장 에폭시 바닥</option>
                  <option value="크랙보수 및 인젝션 그라우팅 지수">크랙보수 및 인젝션 그라우팅 지수</option>
                  <option value="건축물 유지보수 및 구조 보강">건축물 유지보수 및 구조 보강</option>
                  <option value="방수·도장 전문 자재 구매">방수·도장 전문 자재 구매 (도소매)</option>
                  <option value="기타 일반 방수 문의">기타 일반 방수 문의</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    성함 또는 상호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  현장 위치 (동/구 또는 번지수)
                </label>
                <input
                  type="text"
                  placeholder="예: 부산 연제구 연산동 00빌라"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  상담 내용 (증상, 평수, 희망 일정 등)
                </label>
                <textarea
                  rows={2}
                  placeholder="옥상 크랙에서 비가 새고 있습니다. 대략 40평 정도 되는데 방문 견적 부탁드립니다."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>견적 상담 신청서 제출</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${COMPANY_INFO.phoneMobile}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-700"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  기다림 없이 바로 통화: <span className="underline">{COMPANY_INFO.phoneMobile}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">
                상담 신청이 정상 접수되었습니다!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                대표 문영주가 내용 확인 후 신속히 안내 전화를 드리겠습니다.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 text-slate-700">
              <p><strong>신청 고객:</strong> {name} ({phone})</p>
              <p><strong>상담 공종:</strong> {service}</p>
              {location && <p><strong>현장 위치:</strong> {location}</p>}
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`sms:${COMPANY_INFO.phoneMobile}?body=${smsText}`}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>대표님께 문자로 바로 전송하기</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneMobile}`}
                className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>대표 직통 전화 (010-9898-5604)</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-700 underline"
              >
                창 닫기
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
