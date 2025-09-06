import React from 'react';
import type { Workout } from '../types';
import { FlameIcon } from './icons/FlameIcon';
import { ShoeIcon } from './icons/ShoeIcon';

interface WorkoutCardProps {
  workout: Workout;
  index: number;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, index }) => {
  const animationDelay = { animationDelay: `${index * 100}ms` };

  return (
    <div 
      className="bg-slate-800 p-5 rounded-lg border border-slate-700 transform transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/10 hover:-translate-y-1 animate-fade-in-up"
      style={animationDelay}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0 flex items-center justify-center bg-slate-700 h-12 w-12 rounded-full text-cyan-400 font-bold text-xl">
          {index + 1}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-cyan-300">{workout.name}</h3>
          <p className="text-slate-400 mt-1">{workout.description}</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0 md:ml-4">
            <div className="flex md:flex-col justify-around md:justify-start md:items-end gap-2 md:gap-2">
                <div className="text-center md:text-right">
                    <p className="text-lg font-bold text-white">{workout.durationMinutes} <span className="text-sm font-normal text-slate-400">min</span></p>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                    <p className="font-bold text-lg">{workout.caloriesBurned}</p>
                    <FlameIcon className="w-5 h-5"/>
                </div>
                 <div className="flex items-center gap-2 text-green-400">
                    <p className="font-bold text-lg">{workout.steps}</p>
                    <ShoeIcon className="w-5 h-5"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
