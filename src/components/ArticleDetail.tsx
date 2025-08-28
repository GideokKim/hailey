import React from 'react';
import ReactMarkdown from 'react-markdown';

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

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 뒤로가기 버튼 */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          목록으로 돌아가기
        </button>
      </div>

      {/* 게시글 헤더 */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
              {article.category}
            </span>
            {article.isFeatured && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                ⭐ 추천
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">{article.publishDate}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-4">
            <span>✍️ {article.author}</span>
            <span>👁️ {article.readCount}</span>
          </div>
          <div className="flex gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 게시글 내용 */}
      <div className="card">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown 
            components={{
              h2: ({children, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2" {...props}>{children}</h2>,
              h3: ({children, ...props}) => <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3" {...props}>{children}</h3>,
              h4: ({children, ...props}) => <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2" {...props}>{children}</h4>,
              p: ({children, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed" {...props}>{children}</p>,
              ul: ({children, ...props}) => <ul className="list-disc list-inside mb-4 space-y-1" {...props}>{children}</ul>,
              ol: ({children, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props}>{children}</ol>,
              li: ({children, ...props}) => <li className="text-gray-700 mb-1" {...props}>{children}</li>,
              strong: ({children, ...props}) => <strong className="font-semibold text-gray-900" {...props}>{children}</strong>,
              em: ({children, ...props}) => <em className="italic text-gray-800" {...props}>{children}</em>,
              blockquote: ({children, ...props}) => (
                <blockquote className="border-l-4 border-primary-200 pl-4 py-2 bg-primary-50 italic text-gray-700 mb-4 rounded-r" {...props}>{children}</blockquote>
              ),
              code: ({children, className, ...props}) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm" {...props}>{children}</code>
                ) : (
                  <code className="block bg-gray-100 text-gray-800 p-3 rounded text-sm overflow-x-auto" {...props}>{children}</code>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* 관련 게시글 추천 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">📚 관련 정보 더 보기</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <h4 className="font-semibold text-gray-900 mb-2">임산부를 위한 안전한 운동 가이드</h4>
            <p className="text-sm text-gray-600 mb-2">임신 중 운동은 산모와 아기의 건강에 매우 유익합니다...</p>
            <span className="text-xs text-primary-600">운동 카테고리</span>
          </div>
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">산전 검진 일정과 준비사항</h4>
            <p className="text-sm text-gray-600 mb-2">정기적인 산전 검진은 건강한 임신과 출산의 기본입니다...</p>
            <span className="text-xs text-primary-600">의료정보 카테고리</span>
          </div>
        </div>
      </div>

      {/* 댓글 섹션 (향후 구현 예정) */}
      <div className="mt-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">💬 댓글</h3>
          <div className="text-center py-8 text-gray-500">
            <p>댓글 기능은 준비 중입니다.</p>
            <p className="text-sm mt-2">곧 다른 산모들과 소통할 수 있는 공간이 열립니다!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
