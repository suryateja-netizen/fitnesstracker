import React from 'react';
import { DumbbellIcon } from './icons/DumbbellIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <DumbbellIcon className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Gemini Fitness Tracker
          </h1>
        </div>
      </div>
    </header>
  );
};
