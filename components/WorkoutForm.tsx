import React, { useState } from 'react';
import type { UserInput } from '../types';

interface WorkoutFormProps {
  onSubmit: (data: UserInput) => void;
  isLoading: boolean;
}

export const WorkoutForm: React.FC<WorkoutFormProps> = ({ onSubmit, isLoading }) => {
  const [goal, setGoal] = useState<UserInput['goal']>('weight_loss');
  const [level, setLevel] = useState<UserInput['level']>('beginner');
  const [duration, setDuration] = useState<number>(30);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ goal, level, duration });
  };

  return (
    <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg border border-slate-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">Create Your Workout Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-slate-300 mb-2">
            What is your primary goal?
          </label>
          <select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value as UserInput['goal'])}
            className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          >
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="cardio_fitness">Cardio Fitness</option>
            <option value="general_health">General Health</option>
          </select>
        </div>

        <div>
          <label htmlFor="level" className="block text-sm font-medium text-slate-300 mb-2">
            What is your fitness level?
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value as UserInput['level'])}
            className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-slate-300 mb-2">
            Workout Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(Math.max(10, parseInt(e.target.value, 10)))}
            min="10"
            max="180"
            step="5"
            className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out
                     bg-gradient-to-r from-cyan-500 to-blue-500
                     hover:from-cyan-600 hover:to-blue-600
                     focus:outline-none focus:ring-4 focus:ring-cyan-500/50
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:saturate-50"
        >
          {isLoading ? 'Generating...' : 'Generate Plan'}
        </button>
      </form>
    </div>
  );
};
