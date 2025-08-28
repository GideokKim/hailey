import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">H</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Hailey
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tracker" className="text-gray-600 hover:text-primary-600 transition-colors">
              임신 추적
            </a>
            <a href="#checklist" className="text-gray-600 hover:text-primary-600 transition-colors">
              건강 체크리스트
            </a>
            <a href="#tips" className="text-gray-600 hover:text-primary-600 transition-colors">
              임신 팁
            </a>
            <a href="#chat" className="text-gray-600 hover:text-primary-600 transition-colors">
              챗봇 상담
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
