import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Bot, Zap, Shield, Wallet, Menu } from 'lucide-react';
import type { View } from '../App';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onToggleAI: () => void;
}

export function Header({ currentView, onNavigate, onToggleAI }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            EasyBuild
          </span>
          <Badge variant="secondary" className="text-xs">
            Beta
          </Badge>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant={currentView === 'dashboard' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('dashboard')}
            className="gap-2"
          >
            <Menu className="w-4 h-4" />
            Dashboard
          </Button>
          <Button
            variant={currentView === 'builder' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('builder')}
            className="gap-2"
          >
            <Zap className="w-4 h-4" />
            Builder
          </Button>
          <Button
            variant={currentView === 'marketplace' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('marketplace')}
            className="gap-2"
          >
            <Shield className="w-4 h-4" />
            Templates
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleAI}
            className="gap-2 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200 hover:from-blue-100 hover:to-emerald-100"
          >
            <Bot className="w-4 h-4" />
            AI Co-Pilot
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}