import React from 'react';
import type { Workout } from '../types';
import { WorkoutCard } from './WorkoutCard';
import { StatsSummary } from './StatsSummary';

interface WorkoutPlanProps {
  workouts: Workout[];
}

export const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ workouts }) => {
  const totalCalories = workouts.reduce((sum, w) => sum + w.caloriesBurned, 0);
  const totalSteps = workouts.reduce((sum, w) => sum + w.steps, 0);
  const totalDuration = workouts.reduce((sum, w) => sum + w.durationMinutes, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4 text-cyan-300">Your Personalized Workout Plan</h2>
        <p className="text-center text-slate-400">Here is your AI-generated plan to help you reach your goals.</p>
      </div>
      <StatsSummary totalCalories={totalCalories} totalSteps={totalSteps} totalDuration={totalDuration} />
      <div className="space-y-4">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} index={index} />
        ))}
      </div>
    </div>
  );
};
