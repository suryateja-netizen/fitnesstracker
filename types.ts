export interface UserInput {
  goal: 'weight_loss' | 'muscle_gain' | 'cardio_fitness' | 'general_health';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
}

export interface Workout {
  name: string;
  description: string;
  durationMinutes: number;
  caloriesBurned: number;
  steps: number;
}

export interface WorkoutPlanResponse {
  workouts: Workout[];
}
