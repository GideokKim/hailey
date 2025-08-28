import React, { useState } from 'react';
import ArticleDetail from './ArticleDetail';

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readCount: number;
  tags: string[];
  isFeatured?: boolean;
}

const InformationBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['전체', '영양', '운동', '건강관리', '출산준비', '육아정보', '의료정보'];

  const articles: Article[] = [
    {
      id: '1',
      title: '임신 중 필수 영양소와 식단 가이드',
      content: `임신 중에는 아기와 산모 모두를 위한 균형 잡힌 영양소 섭취가 매우 중요합니다.

## 🥗 주요 영양소별 가이드

### 1. 엽산 (Folic Acid)
- **중요성**: 신경관 결손증 예방
- **권장량**: 하루 400-800mcg
- **음식**: 시금치, 브로콜리, 아보카도, 콩류

### 2. 철분 (Iron)
- **중요성**: 빈혈 예방, 산모와 아기에게 산소 공급
- **권장량**: 하루 27mg
- **음식**: 붉은 고기, 시금치, 렌틸, 강화 곡물

### 3. 칼슘 (Calcium)
- **중요성**: 뼈와 치아 발달, 근육 수축
- **권장량**: 하루 1,000mg
- **음식**: 우유, 요거트, 치즈, 연어, 아몬드

### 4. 오메가-3 지방산
- **중요성**: 뇌와 눈 발달
- **권장량**: 하루 200-300mg DHA
- **음식**: 연어, 고등어, 아마씨, 호두

## 📋 일일 식단 예시

### 아침
- 오트밀 + 베리류 + 아몬드
- 우유 또는 두유
- 바나나

### 점심
- 현미밥 + 구운 연어
- 시금치 샐러드
- 브로콜리

### 저녁
- 닭가슴살 + 퀴노아
- 구운 고구마
- 아보카도 샐러드

## ⚠️ 주의사항

1. **생선**: 수은 함량이 높은 생선은 피하기
2. **카페인**: 하루 200mg 이하로 제한
3. **알코올**: 완전 금지
4. **생육**: 생고기, 생선, 날계란 피하기

## 💡 팁

- 하루 3끼를 규칙적으로 먹기
- 충분한 수분 섭취 (하루 8잔 이상)
- 과식보다는 적당한 양으로 여러 번 나누어 먹기
- 의사와 상담하여 개인 맞춤형 영양 계획 수립하기

건강한 임신을 위한 첫걸음은 바로 올바른 영양소 섭취입니다!`,
      category: '영양',
      author: '김영양',
      publishDate: '2024-08-28',
      readCount: 1247,
      tags: ['영양', '엽산', '철분', '칼슘', '오메가3'],
      isFeatured: true
    },
    {
      id: '2',
      title: '임산부를 위한 안전한 운동 가이드',
      content: `임신 중 운동은 산모와 아기의 건강에 매우 유익합니다. 하지만 안전한 운동 방법을 알아야 합니다.

## 🏃‍♀️ 임신 중 운동의 장점

### 1. 체력 향상
- 출산 시 필요한 체력과 지구력 증진
- 임신 중 피로감 감소
- 수면의 질 향상

### 2. 체중 관리
- 과도한 체중 증가 방지
- 혈당 조절에 도움
- 부종 감소

### 3. 정신 건강
- 스트레스 감소
- 우울증 예방
- 자신감 향상

## 🎯 추천 운동 종류

### 1. 걷기 (Walking)
- **강도**: 가벼운~중간
- **시간**: 하루 30분
- **주의사항**: 편안한 신발 착용, 무리하지 않기

### 2. 임산부 요가
- **강도**: 가벼운
- **시간**: 하루 20-30분
- **주의사항**: 전문 강사 지도 하에 진행

### 3. 수영
- **강도**: 가벼운~중간
- **시간**: 하루 30분
- **주의사항**: 수온 확인, 미끄러지지 않도록 주의

### 4. 임산부 필라테스
- **강도**: 가벼운
- **시간**: 하루 20-30분
- **주의사항**: 복부 압박 동작 피하기

## ⚠️ 운동 시 주의사항

1. **의사 상담**: 운동 시작 전 반드시 의사와 상담
2. **과도한 운동 금지**: 숨이 찰 정도의 운동은 피하기
3. **체온 조절**: 과열 방지를 위해 충분한 수분 섭취
4. **자세 주의**: 복부를 압박하는 자세 피하기

## 🚫 피해야 할 운동

- 스쿼시, 테니스 등 급격한 방향 전환이 있는 운동
- 스키, 스노보드 등 넘어질 위험이 있는 운동
- 복부를 압박하는 윗몸 일으키기
- 고강도 인터벌 트레이닝

## 💡 운동 팁

- 운동 전후 충분한 스트레칭
- 편안한 복장 착용
- 규칙적인 운동 습관
- 몸의 신호에 주의 기울이기

건강한 임신을 위한 운동은 반드시 안전하게 진행해야 합니다!`,
      category: '운동',
      author: '박운동',
      publishDate: '2024-08-27',
      readCount: 892,
      tags: ['운동', '요가', '수영', '산책']
    },
    {
      id: '3',
      title: '산전 검진 일정과 준비사항',
      content: `정기적인 산전 검진은 건강한 임신과 출산의 기본입니다. 체계적인 검진 일정을 알아보세요.

## 📅 산전 검진 일정표

### 첫 번째 삼분기 (1-13주차)

#### 4-6주차: 첫 번째 방문
- **검사 항목**: 임신 확인, 기본 건강 상태 점검
- **준비사항**: 이전 병력, 복용 중인 약물 정보
- **결과**: 임신 주차 확인, 예상 출산일 계산

#### 8-10주차: 초음파 검사
- **검사 항목**: 태아 심장 박동 확인, 자궁 내 위치 확인
- **준비사항**: 방광을 가득 채우기 (음료 2-3잔)
- **결과**: 태아 생존 여부, 다태아 여부 확인

#### 11-13주차: 선별 검사
- **검사 항목**: 다운증후군 선별 검사, 초기 기형 검사
- **준비사항**: 공복 상태로 방문
- **결과**: 유전적 이상 가능성 평가

### 두 번째 삼분기 (14-26주차)

#### 16-18주차: 정기 검진
- **검사 항목**: 혈압, 체중, 소변 검사, 태아 심장 박동
- **준비사항**: 특별한 준비 불필요
- **결과**: 태아 성장 상태, 산모 건강 상태

#### 20-22주차: 중기 초음파
- **검사 항목**: 상세한 기형 검사, 태아 성별 확인
- **준비사항**: 방광을 가득 채우기
- **결과**: 태아 기형 여부, 성별, 성장 상태

#### 24-26주차: 당뇨 검사
- **검사 항목**: 임신성 당뇨 선별 검사
- **준비사항**: 공복 상태로 방문
- **결과**: 당뇨 위험도 평가

### 세 번째 삼분기 (27-40주차)

#### 28-30주차: 정기 검진
- **검사 항목**: 혈압, 체중, 소변, 태아 위치 확인
- **준비사항**: 특별한 준비 불필요
- **결과**: 태아 성장, 산모 건강 상태

#### 32-34주차: 태아 성장 확인
- **검사 항목**: 태아 크기 측정, 태위 확인
- **준비사항**: 특별한 준비 불필요
- **결과**: 태아 성장 속도, 출산 준비 상태

#### 36-38주차: 출산 준비 검진
- **검사 항목**: 태아 위치, 산모 골반 상태, 출산 계획
- **준비사항**: 출산 관련 질문 준비
- **결과**: 출산 방법 결정, 병원 입원 준비

#### 39-40주차: 최종 검진
- **검사 항목**: 태아 상태, 산모 상태, 출산 징후
- **준비사항**: 출산 징후 인지 교육
- **결과**: 출산 시기 예측, 응급 상황 대처법

## 🏥 검진 전 준비사항

### 1. 기본 준비
- 신분증, 보험증 지참
- 이전 검진 결과지
- 복용 중인 약물 목록
- 질문 사항 정리

### 2. 검사별 준비
- **초음파**: 방광 충만 (음료 2-3잔)
- **혈액 검사**: 공복 상태 (8-12시간)
- **소변 검사**: 중간뇨 채취

### 3. 복장
- 편안한 옷 착용
- 검사하기 쉬운 하의
- 신발은 쉽게 벗을 수 있는 것

## 📋 검진 시 확인사항

### 1. 태아 관련
- 태아 크기와 성장 속도
- 태아 심장 박동
- 태아 위치와 태위
- 양수량

### 2. 산모 관련
- 혈압과 체중 변화
- 소변 검사 결과
- 빈혈 여부
- 당뇨 여부

### 3. 출산 관련
- 예상 출산일
- 출산 방법 결정
- 병원 입원 시기
- 출산 징후 인지

## ⚠️ 주의사항

1. **규칙적인 검진**: 의사가 정한 일정을 반드시 지키기
2. **비정상 증상**: 출혈, 통증, 부종 등이 있으면 즉시 병원 방문
3. **약물 복용**: 의사와 상담 없이 약물 복용 금지
4. **검진 결과**: 비정상 결과가 있으면 추가 검사 진행

## 💡 팁

- 검진 일정을 캘린더에 표시
- 질문 사항을 미리 정리해서 가져가기
- 검진 결과를 파일로 보관
- 의사와의 소통을 원활하게 하기

정기적인 산전 검진으로 건강한 임신과 출산을 준비하세요!`,
      category: '의료정보',
      author: '이의사',
      publishDate: '2024-08-26',
      readCount: 1563,
      tags: ['산전검진', '초음파', '혈액검사']
    },
    {
      id: '4',
      title: '출산 준비 체크리스트',
      content: '출산을 앞둔 산모를 위한 완벽한 준비 가이드...',
      category: '출산준비',
      author: '최출산',
      publishDate: '2024-08-25',
      readCount: 2034,
      tags: ['출산준비', '병원가방', '출산징후']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === '전체' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredArticles = articles.filter(article => article.isFeatured);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  // 게시글 상세 보기 모드
  if (selectedArticle) {
    return <ArticleDetail article={selectedArticle} onBack={handleBackToList} />;
  }

  // 게시글 목록 모드
  return (
    <section id="information-board" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">임신 정보 게시판</h2>
        <p className="text-gray-600">전문가들이 제공하는 신뢰할 수 있는 임신 관련 정보를 확인하세요</p>
      </div>

      {/* 검색 및 카테고리 필터 */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="정보 검색하기..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 추천 글 */}
      {featuredArticles.length > 0 && (
        <div className="card bg-gradient-to-r from-pink-50 to-purple-50">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">🌟 추천 정보</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleArticleClick(article)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.publishDate}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {article.content.substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">👁️ {article.readCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 게시글 목록 */}
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <div 
            key={article.id} 
            className="card hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleArticleClick(article)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.publishDate}</span>
                  {article.isFeatured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      ⭐ 추천
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {article.content.substring(0, 200)}...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>✍️ {article.author}</span>
                    <span>👁️ {article.readCount}</span>
                  </div>
                  <div className="flex gap-2">
                    {article.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 게시글 작성 버튼 */}
      <div className="text-center">
        <button className="btn-primary">
          ✍️ 새로운 정보 글 작성하기
        </button>
      </div>
    </section>
  );
};

export default InformationBoard;
