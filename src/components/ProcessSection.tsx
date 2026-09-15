import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, ShieldAlert, Wrench, ArrowRight } from 'lucide-react';
import rooftopWorkImg from '../assets/images/rooftop_urethane_work_1789115360351.jpg';
import finishedRoofImg from '../assets/images/finished_urethane_roof_1789115387806.jpg';

export const ProcessSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const processSteps = [
    {
      step: '01',
      name: '바탕면 연삭(그라인딩) & 하지 정리',
      desc: '부풀거나 들뜬 기존 노후 우레탄 도막을 대형 다이아몬드 연삭기와 진공 집진기로 완벽히 제거합니다. 콘크리트 미세 모공을 열어 새 방수재가 박리되지 않도록 기초를 닦습니다.',
      point: '하자 방지의 80% 결정',
    },
    {
      step: '02',
      name: '크랙 V-커팅 & 우레탄 실란트 보강',
      desc: '미세 크랙부터 깊은 균열까지 V자 홈을 파고 고탄성 변성 우레탄 실란트를 꼼꼼히 충진합니다. 구조적 거동 시에도 균열이 번지는 것을 사전 차단합니다.',
      point: '균열 누수 원천 차단',
    },
    {
      step: '03',
      name: '우레탄 하도(프라이머) 고침투 도포',
      desc: '콘크리트 기공 속으로 깊숙이 침투하는 우레탄 전용 하도를 충분히 도포하여 소지면을 강화하고 중도 도막과의 영구적인 접착 결합력을 형성합니다.',
      point: '들뜸 현상 원천 예방',
    },
    {
      step: '04',
      name: '우레탄 중도 1·2차 규정 두께 시공',
      desc: 'KS F 3211 인증 정품 노루페인트 에코 크린탄 2100을 규정 도막 두께(평균 3mm)로 2회 나누어 균일하게 타설합니다. 탄성과 인장강도를 극대화합니다.',
      point: 'KS 1호 정품·정량 엄수',
    },
    {
      step: '05',
      name: '자외선 차단 우레탄 상도(탑코트) 마감',
      desc: '강렬한 햇빛의 자외선과 비바람, 눈, 산성비로부터 중도 방수층을 보호하는 무황변성 탑코트를 도포하여 반영구적인 내구성과 미관을 완성합니다.',
      point: '내후성 극대화 마감',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            STANDARD WORKFLOW
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            왜 이레특수방수는 <span className="text-blue-700">하자가 없을까요?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            보이지 않는 바닥 연삭부터 정량 중도 도막 형성까지, 5단계 원칙 시공을 타협 없이 지켜냅니다.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-blue-300 hover:shadow-xs transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-50 -mr-3 -mt-3 rounded-bl-2xl text-blue-300 flex items-end justify-start pl-2 pb-1 font-black text-xs">
                {item.step}
              </div>

              <div>
                <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 mb-2">
                  {item.point}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>단계 {item.step}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Comparison Showcase */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                시공 전후 비교 (Before & After)
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                들뜨고 부식된 바닥이<br />
                <span className="text-blue-700">이음매 없는 완벽 도막</span>으로 거듭납니다
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                슬라이더를 좌우로 조절하여 <strong>다이아몬드 연삭 하지 정리 단계</strong>와 
                <strong> 최종 우레탄 방수 완료 상태</strong>를 직접 비교해 보세요.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                  <span><strong>Before (좌측):</strong> 노후 도막 철거 및 레이턴스 다이아몬드 그라인딩</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                  <span><strong>After (우측):</strong> 노루 에코 크린탄 2100 정품 중·상도 완성</span>
                </div>
              </div>
            </div>

            {/* Before / After Interactive Slider Container */}
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-inner select-none border border-slate-300">
                
                {/* Background: After (Finished roof) */}
                <img
                  src={finishedRoofImg}
                  alt="우레탄 방수 시공 완료"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  AFTER : 정품 시공 완료
                </div>

                {/* Foreground: Before (Grinding / Floor prep), clipped */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={rooftopWorkImg}
                    alt="바탕면 연삭 작업"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    BEFORE : 바탕 연삭 정리
                  </div>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center font-black text-xs border border-slate-200">
                    ↔
                  </div>
                </div>

                {/* Hidden range input for accessible interaction */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                  aria-label="Before and after comparison slider"
                />
              </div>

              <p className="text-center text-xs text-slate-400 mt-2">
                * 사진 위를 좌우로 드래그하여 시공 전/후 상태를 비교해 보세요.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
