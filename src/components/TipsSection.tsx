import React from 'react';

interface TipsSectionProps {
  currentWeek: number;
}

const TipsSection: React.FC<TipsSectionProps> = ({ currentWeek }) => {
  const getWeeklyTips = (week: number) => {
    const tipsData: { [key: number]: { title: string; tips: string[] } } = {
      1: {
        title: "1주차 - 임신 준비",
        tips: [
          "엽산 보충제 복용을 시작하세요",
          "규칙적인 생활습관을 유지하세요",
          "충분한 수분 섭취를 하세요"
        ]
      },
      4: {
        title: "4주차 - 착상 완료",
        tips: [
          "산전 검진을 예약하세요",
          "금연과 금주를 시작하세요",
          "충분한 휴식을 취하세요"
        ]
      },
      8: {
        title: "8주차 - 기관 형성",
        tips: [
          "정기적인 산전 검진을 받으세요",
          "균형 잡힌 영양소 섭취를 하세요",
          "가벼운 운동을 시작하세요"
        ]
      },
      12: {
        title: "12주차 - 첫 번째 삼분기 완료",
        tips: [
          "중기 초음파 검사를 예약하세요",
          "임산부용 운동을 본격적으로 시작하세요",
          "충분한 단백질 섭취를 하세요"
        ]
      },
      16: {
        title: "16주차 - 태동 시작",
        tips: [
          "아기의 움직임을 기록하세요",
          "임산부용 요가나 수영을 고려하세요",
          "철분 보충제 복용을 시작하세요"
        ]
      },
      20: {
        title: "20주차 - 중기 초음파",
        tips: [
          "상세한 기형 검사를 받으세요",
          "출산 준비 교육을 시작하세요",
          "출산 계획을 세워보세요"
        ]
      },
      24: {
        title: "24주차 - 뇌 발달",
        tips: [
          "아기와 대화를 나누세요",
          "임산부용 마사지를 받아보세요",
          "충분한 오메가-3 섭취를 하세요"
        ]
      },
      28: {
        title: "28주차 - 세 번째 삼분기 시작",
        tips: [
          "출산 준비를 본격적으로 시작하세요",
          "병원 가방을 준비하세요",
          "출산 교육을 받으세요"
        ]
      },
      32: {
        title: "32주차 - 체중 증가",
        tips: [
          "규칙적인 산전 검진을 받으세요",
          "출산 계획을 구체화하세요",
          "충분한 휴식을 취하세요"
        ]
      },
      36: {
        title: "36주차 - 출산 준비",
        tips: [
          "출산 징후를 알아두세요",
          "병원 연락처를 준비하세요",
          "가족들과 출산 계획을 공유하세요"
        ]
      },
      40: {
        title: "40주차 - 출산",
        tips: [
          "출산 징후가 나타나면 병원에 연락하세요",
          "차분하게 대응하세요",
          "가족들의 도움을 받으세요"
        ]
      }
    };
    
    return tipsData[week] || {
      title: `${week}주차 - 건강한 임신`,
      tips: [
        "규칙적인 산전 검진을 받으세요",
        "균형 잡힌 영양소 섭취를 하세요",
        "충분한 휴식을 취하세요",
        "가벼운 운동을 꾸준히 하세요"
      ]
    };
  };

  const currentTips = getWeeklyTips(currentWeek);

  const generalTips = [
    {
      category: "영양",
      tips: [
        "하루 3끼를 규칙적으로 먹기",
        "충분한 단백질 섭취 (육류, 생선, 계란, 콩류)",
        "신선한 채소와 과일 섭취",
        "충분한 수분 섭취 (하루 8잔 이상)",
        "카페인 섭취 제한"
      ]
    },
    {
      category: "운동",
      tips: [
        "가벼운 산책 (하루 30분)",
        "임산부용 요가",
        "수영",
        "임산부용 필라테스",
        "과도한 운동 피하기"
      ]
    },
    {
      category: "생활습관",
      tips: [
        "충분한 수면 (하루 8시간 이상)",
        "스트레스 관리",
        "규칙적인 생활습관",
        "금연과 금주",
        "충분한 휴식"
      ]
    }
  ];

  return (
    <section id="tips" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">임신 팁 & 조언</h2>
        <p className="text-gray-600">현재 주차에 맞는 맞춤형 팁과 일반적인 임신 관리법을 확인하세요</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 주차별 맞춤 팁 */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-primary-600">
            {currentTips.title} 맞춤 팁
          </h3>
          <div className="space-y-3">
            {currentTips.tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 일반적인 임신 관리 팁 */}
        <div className="space-y-6">
          {generalTips.map((category) => (
            <div key={category.category} className="card">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                {category.category} 관리
              </h4>
              <div className="space-y-2">
                {category.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-primary-500 text-sm">•</span>
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            💡 더 많은 정보가 필요하신가요?
          </h3>
          <p className="text-gray-600 mb-4">
            LLM 챗봇과 상담하여 개인화된 질문에 답변을 받아보세요
          </p>
          <button className="btn-primary">
            챗봇 상담 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
