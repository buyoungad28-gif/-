import React, { useState } from 'react';
import { Calculator, Phone, Send, CheckCircle, Info, Sparkles, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface EstimateCalculatorProps {
  initialService?: string;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ initialService }) => {
  const [serviceType, setServiceType] = useState<string>(initialService || '옥상 우레탄 도막방수');
  const [pyeong, setPyeong] = useState<number>(50);
  const [condition, setCondition] = useState<string>('노후 들뜸 (전면 연삭 필요)');
  
  // Contact form state
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('부산 연제구');
  const [memo, setMemo] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Approximate guide calculation based on market standard for authentic KS urethane 3mm
  const getEstimatedRange = () => {
    let baseMin = 85000;
    let baseMax = 120000;

    if (serviceType.includes('옥상')) {
      baseMin = 85000;
      baseMax = 125000;
      if (condition.includes('전면 연삭')) {
        baseMin += 20000;
        baseMax += 30000;
      } else if (condition.includes('누수 진행')) {
        baseMin += 25000;
        baseMax += 35000;
      }
    } else if (serviceType.includes('에폭시')) {
      baseMin = 65000;
      baseMax = 110000;
      if (condition.includes('전면 연삭')) {
        baseMin += 15000;
        baseMax += 25000;
      }
    } else if (serviceType.includes('외벽')) {
      baseMin = 55000;
      baseMax = 95000;
    } else if (serviceType.includes('그라우팅')) {
      baseMin = 70000;
      baseMax = 130000;
    } else {
      // 자재 판매
      return {
        minPrice: '도소매가 최저 견적',
        maxPrice: '수량별 할인 적용',
        isMaterial: true,
      };
    }

    const minTotal = Math.round((baseMin * pyeong) / 10000);
    const maxTotal = Math.round((baseMax * pyeong) / 10000);

    return {
      minPrice: `${minTotal.toLocaleString()}만원`,
      maxPrice: `${maxTotal.toLocaleString()}만원`,
      unitMin: `${(baseMin / 10000).toFixed(1)}만원`,
      unitMax: `${(baseMax / 10000).toFixed(1)}만원`,
      isMaterial: false,
    };
  };

  const estimate = getEstimatedRange();
  const squareMeter = Math.round(pyeong * 3.3058);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }

    // Save to local storage
    const inquiryData = {
      id: Date.now().toString(),
      name,
      phone,
      location,
      serviceType,
      pyeong,
      condition,
      memo,
      createdAt: new Date().toLocaleString('ko-KR'),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ire_inquiries') || '[]');
      existing.unshift(inquiryData);
      localStorage.setItem('ire_inquiries', JSON.stringify(existing));
    } catch {
      // fallback
    }

    setIsSubmitted(true);
  };

  // Generate SMS link with pre-filled text
  const smsBody = encodeURIComponent(
    `[이레특수방수 견적문의]\n성함: ${name || '고객'}\n위치: ${location}\n공종: ${serviceType}\n면적: 약 ${pyeong}평 (${squareMeter}m²)\n상태: ${condition}\n내용: ${memo || '방문 견적 요청'}`
  );

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
            INSTANT ESTIMATE CALCULATOR
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            실시간 <span className="text-blue-700">예상 견적 계산기 & 상담 신청</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            평수와 현장 상태를 선택하시면 대략적인 공사 규모와 예상 견적을 즉시 확인하실 수 있습니다.<br className="hidden sm:block" />
            정확한 견적은 문영주 대표가 직접 방문하여 현장 실측 후 무료로 산출해 드립니다.
          </p>
        </div>

        {/* Main 2-Column Card */}
        <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Calculator Controls */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              {/* 1. Service Type */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  1. 시공 종류 선택
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    '옥상 우레탄 도막방수',
                    '바닥 에폭시 시공',
                    '건물 외벽 방수 & 도장',
                    '크랙보수 & 인젝션 그라우팅',
                    '방수·도장 자재 구매',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setServiceType(type)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                        serviceType === type
                          ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Area Pyeong Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    2. 시공 면적 (평수 / m²)
                  </label>
                  <div className="text-sm font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                    약 {pyeong}평 <span className="text-slate-500 font-normal">({squareMeter} m²)</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={pyeong}
                  onChange={(e) => setPyeong(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                />

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>10평 (소형 발코니/주택)</span>
                  <span>50평 (일반 빌라 옥상)</span>
                  <span>100평 (상가 빌딩)</span>
                  <span>200평 (대형 건물)</span>
                </div>
              </div>

              {/* 3. Current Surface Condition */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  3. 현장 바닥/벽면 상태
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    '신축 콘크리트 (도막 없음)',
                    '기존 도막 양호 (재도장)',
                    '노후 들뜸 (전면 연삭 필요)',
                    '균열 및 누수 진행 중',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCondition(item)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                        condition === item
                          ? 'bg-blue-50 text-blue-800 border-blue-600 shadow-2xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Summary Result Box */}
              <div className="p-5 rounded-xl bg-blue-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    표준 예상 가이드 견적
                  </span>
                  <span className="text-[11px] text-slate-300">정품 KS 자재 규정 시공 기준</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400">
                    {estimate.minPrice} ~ {estimate.maxPrice}
                  </span>
                  {!estimate.isMaterial && (
                    <span className="text-xs text-slate-300">
                      (평당 약 {estimate.unitMin}~{estimate.unitMax})
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-blue-800/80">
                  * 위 금액은 자재비, 전문 연삭 장비 인건비, 하·중·상도 정석 시공이 포함된 표준 기준선이며,
                  현장 접근성 및 크랙 심도에 따라 차이가 있을 수 있습니다.
                </p>
              </div>

            </div>

            {/* Right Column: Instant Free Consultation Request Form */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      대표 문영주 무료 방문 견적 신청
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      연락처를 남겨주시면 10분 내로 친절히 연락드리겠습니다.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        성함 또는 건물명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="예: 홍길동 / 동래빌라"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="예: 010-0000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        현장 지역 (부산/경남)
                      </label>
                      <input
                        type="text"
                        placeholder="예: 부산 연제구 연산동 / 해운대구"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        현장 증상 및 문의사항
                      </label>
                      <textarea
                        rows={2}
                        placeholder="예: 비가 오면 천장에서 물이 배어나옵니다. 옥상 상태를 봐주세요."
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md shadow-blue-700/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>무료 방문 실측 견적 접수</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span>전화로 즉시 통화 원하시면:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneMobile}`}
                      className="font-bold text-blue-700 hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      010-9898-5604
                    </a>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900">
                      견적 상담 접수가 완료되었습니다!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      대표 문영주가 확인 후 <strong className="text-blue-700">{phone}</strong> 번호로 신속히 연락드리겠습니다.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 text-slate-700">
                    <p><strong>신청 공종:</strong> {serviceType}</p>
                    <p><strong>예상 면적:</strong> 약 {pyeong}평 ({squareMeter} m²)</p>
                    <p><strong>현장 상태:</strong> {condition}</p>
                    <p><strong>현장 위치:</strong> {location}</p>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={`sms:${COMPANY_INFO.phoneMobile}?body=${smsBody}`}
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <span>대표님께 문자로 바로 전송하기</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phoneMobile}`}
                      className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>대표 직통 전화 연결 (010-9898-5604)</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-700 underline mt-1"
                    >
                      새로운 견적 다시 계산하기
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
