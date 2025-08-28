import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PregnancyTracker from './components/PregnancyTracker';
import HealthChecklist from './components/HealthChecklist';
import InformationBoard from './components/InformationBoard';
import TipsSection from './components/TipsSection';
import Footer from './components/Footer';

function App() {
  const [currentWeek, setCurrentWeek] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <Header />
      <Hero currentWeek={currentWeek} />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <PregnancyTracker currentWeek={currentWeek} onWeekChange={setCurrentWeek} />
        <HealthChecklist />
        <InformationBoard />
        <TipsSection currentWeek={currentWeek} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
