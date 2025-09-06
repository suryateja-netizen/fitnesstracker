import React, { useState } from 'react';
import { Header } from './components/Header';
import { WorkoutForm } from './components/WorkoutForm';
import { WorkoutPlan } from './components/WorkoutPlan';
import { Loader } from './components/Loader';
import type { UserInput, Workout } from './types';
import { generateWorkoutPlan } from './services/geminiService';

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInput | null>(null);
  const [workoutPlan, setWorkoutPlan] = useState<Workout[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: UserInput) => {
    setIsLoading(true);
    setError(null);
    setWorkoutPlan(null);
    setUserInput(data);
    try {
      const plan = await generateWorkoutPlan(data);
      setWorkoutPlan(plan.workouts);
    } catch (err) {
      console.error(err);
      setError('Failed to generate workout plan. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <WorkoutForm onSubmit={handleFormSubmit} isLoading={isLoading} />

          {isLoading && <Loader />}

          {error && (
            <div className="mt-8 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
              <p className="font-bold">An Error Occurred</p>
              <p>{error}</p>
            </div>
          )}

          {workoutPlan && !isLoading && (
            <div className="mt-8">
              <WorkoutPlan workouts={workoutPlan} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
