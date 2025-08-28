import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  dueDate?: string;
}

const HealthChecklist: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: '1',
      title: '산전 검진 예약',
      description: '첫 번째 산전 검진을 예약하세요',
      category: '의료',
      completed: false,
      dueDate: '2024-09-15'
    },
    {
      id: '2',
      title: '엽산 복용',
      description: '매일 엽산 보충제를 복용하세요',
      category: '영양',
      completed: false
    },
    {
      id: '3',
      title: '운동 시작',
      description: '임산부용 운동을 시작하세요',
      category: '운동',
      completed: false
    },
    {
      id: '4',
      title: '금연/금주',
      description: '흡연과 음주를 중단하세요',
      category: '생활습관',
      completed: false
    },
    {
      id: '5',
      title: '충분한 수분 섭취',
      description: '하루 8잔 이상의 물을 마시세요',
      category: '영양',
      completed: false
    },
    {
      id: '6',
      title: '충분한 휴식',
      description: '하루 8시간 이상의 수면을 취하세요',
      category: '생활습관',
      completed: false
    }
  ]);

  const toggleItem = (id: string) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const addNewItem = () => {
    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      title: '새로운 체크리스트 항목',
      description: '설명을 입력하세요',
      category: '기타',
      completed: false
    };
    setChecklist(prev => [...prev, newItem]);
  };

  const categories = ['의료', '영양', '운동', '생활습관', '기타'];
  const completedCount = checklist.filter(item => item.completed).length;
  const totalCount = checklist.length;

  return (
    <section id="checklist" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">건강 체크리스트</h2>
        <p className="text-gray-600">임신 중 건강 관리를 위한 체크리스트를 관리하세요</p>
      </div>

      {/* 진행률 요약 */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">전체 진행률</h3>
          <span className="text-2xl font-bold text-primary-600">
            {Math.round((completedCount / totalCount) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {completedCount} / {totalCount} 항목 완료
        </p>
      </div>

      {/* 카테고리별 체크리스트 */}
      <div className="grid lg:grid-cols-2 gap-8">
        {categories.map(category => {
          const categoryItems = checklist.filter(item => item.category === category);
          if (categoryItems.length === 0) return null;

          return (
            <div key={category} className="card">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                {category}
              </h3>
              <div className="space-y-3">
                {categoryItems.map(item => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleItem(item.id)}
                      className="mt-1 w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                    />
                    <div className="flex-1">
                      <div className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {item.title}
                      </div>
                      <div className={`text-sm ${item.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </div>
                      {item.dueDate && (
                        <div className="text-xs text-gray-500 mt-1">
                          마감일: {item.dueDate}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 새 항목 추가 */}
      <div className="text-center">
        <button
          onClick={addNewItem}
          className="btn-secondary"
        >
          + 새로운 체크리스트 항목 추가
        </button>
      </div>
    </section>
  );
};

export default HealthChecklist;
