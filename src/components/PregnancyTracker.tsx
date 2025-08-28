import React from 'react';

interface PregnancyTrackerProps {
  currentWeek: number;
  onWeekChange: (week: number) => void;
}

const PregnancyTracker: React.FC<PregnancyTrackerProps> = ({ currentWeek, onWeekChange }) => {
  const weeks = Array.from({ length: 40 }, (_, i) => i + 1);
  
  const getWeekInfo = (week: number) => {
    const weekData: { [key: number]: { title: string; description: string; size: string } } = {
      1: { title: "착상", description: "수정란이 자궁에 착상하기 시작합니다", size: "0.1mm" },
      4: { title: "심장 형성", description: "아기의 심장이 형성되기 시작합니다", size: "1mm" },
      8: { title: "기관 형성", description: "주요 기관들이 형성되기 시작합니다", size: "1.6cm" },
      12: { title: "성별 확인", description: "아기의 성별을 확인할 수 있습니다", size: "5.4cm" },
      16: { title: "태동", description: "아기의 움직임을 느낄 수 있습니다", size: "11.6cm" },
      20: { title: "중기 초음파", description: "상세한 기형 검사를 받습니다", size: "16.4cm" },
      24: { title: "뇌 발달", description: "뇌가 빠르게 발달합니다", size: "21.8cm" },
      28: { title: "폐 성숙", description: "폐가 성숙해집니다", size: "25.6cm" },
      32: { title: "체중 증가", description: "아기가 빠르게 자랍니다", size: "28.9cm" },
      36: { title: "출산 준비", description: "출산을 위한 준비가 완료됩니다", size: "34.6cm" },
      40: { title: "출산", description: "아기가 태어날 준비가 완료됩니다", size: "35.6cm" }
    };
    
    return weekData[week] || { title: `${week}주차`, description: "아기가 건강하게 자라고 있습니다", size: "계산 중..." };
  };

  const currentWeekInfo = getWeekInfo(currentWeek);

  return (
    <section id="tracker" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">임신 주차별 추적</h2>
        <p className="text-gray-600">현재 주차를 선택하여 아기의 발달 상황을 확인하세요</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 주차 선택 */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">주차 선택</h3>
          <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto">
            {weeks.map((week) => (
              <button
                key={week}
                onClick={() => onWeekChange(week)}
                className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                  week === currentWeek
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {week}
              </button>
            ))}
          </div>
        </div>

        {/* 현재 주차 정보 */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">현재 주차 정보</h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">{currentWeek}주차</div>
              <div className="text-primary-800 font-medium">{currentWeekInfo.title}</div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">아기 크기</h4>
              <p className="text-gray-600">{currentWeekInfo.size}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">발달 상황</h4>
              <p className="text-gray-600">{currentWeekInfo.description}</p>
            </div>
          </div>
        </div>

        {/* 진행률 */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">전체 진행률</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {Math.round((currentWeek / 40) * 100)}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(currentWeek / 40) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">
              <p>출산까지 {40 - currentWeek}주 남았습니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PregnancyTracker;
