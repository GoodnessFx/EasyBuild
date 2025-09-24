import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { ContractBuilder } from './components/ContractBuilder';
import { TemplateMarketplace } from './components/TemplateMarketplace';
import { DeploymentInterface } from './components/DeploymentInterface';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export type View = 'home' | 'dashboard' | 'builder' | 'marketplace' | 'deploy';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isAIOpen, setIsAIOpen] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Hero onGetStarted={() => setCurrentView('dashboard')} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />;
      case 'builder':
        return <ContractBuilder onNavigate={setCurrentView} />;
      case 'marketplace':
        return <TemplateMarketplace onNavigate={setCurrentView} />;
      case 'deploy':
        return <DeploymentInterface onNavigate={setCurrentView} />;
      default:
        return <Hero onGetStarted={() => setCurrentView('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header 
        currentView={currentView} 
        onNavigate={setCurrentView}
        onToggleAI={() => setIsAIOpen(!isAIOpen)}
      />
      
      <main className="relative">
        {renderCurrentView()}
      </main>

      <Footer />

      <AIAssistant 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)} 
      />
      
      <Toaster />
    </div>
  );
}