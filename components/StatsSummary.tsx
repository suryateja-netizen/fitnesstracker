import React from 'react';
import { FlameIcon } from './icons/FlameIcon';
import { ShoeIcon } from './icons/ShoeIcon';

interface StatsSummaryProps {
  totalCalories: number;
  totalSteps: number;
  totalDuration: number;
}

export const StatsSummary: React.FC<StatsSummaryProps> = ({ totalCalories, totalSteps, totalDuration }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
            <FlameIcon className="w-6 h-6 text-orange-400" />
            <h3 className="text-lg font-semibold text-slate-300">Total Calories</h3>
        </div>
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">{totalCalories.toLocaleString()}</p>
        <p className="text-sm text-slate-400">kcal</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
            <ShoeIcon className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-slate-300">Total Steps</h3>
        </div>
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">{totalSteps.toLocaleString()}</p>
        <p className="text-sm text-slate-400">steps</p>
      </div>
       <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-slate-300">Total Duration</h3>
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{totalDuration}</p>
        <p className="text-sm text-slate-400">minutes</p>
      </div>
    </div>
  );
};
