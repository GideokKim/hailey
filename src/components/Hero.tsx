import React from 'react';

interface HeroProps {
  currentWeek: number;
}

const Hero: React.FC<HeroProps> = ({ currentWeek }) => {
  const getTrimester = (week: number) => {
    if (week <= 13) return '첫 번째 삼분기';
    if (week <= 26) return '두 번째 삼분기';
    return '세 번째 삼분기';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-20">
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          임신 <span className="text-primary-600">여정</span>을 함께
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          아기와 함께하는 특별한 시간을 Hailey와 함께 기록하고 관리하세요.
          매주 새로운 변화와 정보를 확인할 수 있습니다.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">{currentWeek}</div>
              <div className="text-gray-600">임신 주차</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-800 mb-2">
                {getTrimester(currentWeek)}
              </div>
              <div className="text-gray-600">현재 단계</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-800 mb-2">
                {40 - currentWeek}
              </div>
              <div className="text-gray-600">출산까지 남은 주</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <button className="btn-primary text-lg px-8 py-3">
            임신 일기 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
