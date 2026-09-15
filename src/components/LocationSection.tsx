import React, { useState } from 'react';
import { MapPin, Phone, Copy, Check, Navigation, ExternalLink, Clock, Bus, Car } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import storeFrontImg from '../assets/images/ire_store_front_1789115348717.jpg';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(COMPANY_INFO.address)}`;
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(COMPANY_INFO.address)}`;

  return (
    <section id="location" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            LOCATION & CONTACT
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            오시는 길 & <span className="text-blue-700">매장 안내</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            부산 연제구 과정로 295-2에 위치한 본점 매장에 오시면 각종 방수·도장 자재를 실물로 확인하실 수 있습니다.
          </p>
        </div>

        {/* 2-Column Info & Visual */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Address & Direct Map links */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Store Name & Rep */}
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>이레 특수방수공사 본점 전시장</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    부산광역시 연제구 과정로 295-2
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    (대표 문영주 / 우수방수종합전시판매 · 도장공사일체)
                  </p>
                </div>

                {/* Contact numbers */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 font-medium">대표 직통 휴대폰 (긴급 상담)</span>
                      <p className="text-base sm:text-lg font-black text-slate-900">{COMPANY_INFO.phoneMobile}</p>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneMobile}`}
                      className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      통화하기
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 font-medium">사무실 및 팩스 (FAX)</span>
                      <p className="text-base sm:text-lg font-black text-slate-900">{COMPANY_INFO.phoneOffice}</p>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneOffice}`}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      사무실 연결
                    </a>
                  </div>
                </div>

                {/* Copy Address Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold transition-colors shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">주소가 복사되었습니다!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>도로명 주소 복사</span>
                      </>
                    )}
                  </button>

                  <span className="text-xs text-slate-500">
                    네비게이션에 "과정로 295-2"를 검색하세요.
                  </span>
                </div>

                {/* Map App Links */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-700">지도로 바로 길찾기:</span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={naverMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>네이버 지도 보기</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>

                    <a
                      href={kakaoMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>카카오맵 보기</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Transportation info */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">자가용 / 화물차</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">매장 앞 잠시 정차 및 방수 자재 상하차 가능</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">영업 시간</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{COMPANY_INFO.businessHours}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Store Photo Showcase & Map Preview */}
            <div className="lg:col-span-6 bg-slate-100 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200">
              
              <div className="relative h-72 sm:h-80 overflow-hidden group">
                <img
                  src={storeFrontImg}
                  alt="이레특수방수 실제 매장 전경"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md">
                  실제 매장 전경 (연제구 과정로 295-2)
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-black text-lg sm:text-xl">이레특수방수공사</p>
                  <p className="text-xs text-slate-200 mt-1">
                    페인트 · 방수공사전문 · 액체/탄성/우레탄/주입방수 · 자재판매
                  </p>
                </div>
              </div>

              <div className="p-6 bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-400">출장 시공 가능 지역</span>
                  <span className="text-slate-400">당일 무료 방문 실측</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  부산광역시 연제구, 동래구, 해운대구, 금정구, 부산진구, 수영구, 남구, 북구, 사상구, 사하구 등 부산 전 지역 및 김해, 양산, 울산, 창원 경남 전역
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">긴급 누수 출동 문의</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneMobile}`}
                    className="text-xs font-black text-cyan-300 hover:text-cyan-200 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    010-9898-5604 (대표 문영주)
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
