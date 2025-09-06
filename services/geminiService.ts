import { GoogleGenAI, Type } from "@google/genai";
import type { UserInput, WorkoutPlanResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const workoutSchema = {
  type: Type.OBJECT,
  properties: {
    workouts: {
      type: Type.ARRAY,
      description: "A list of workout activities that form a coherent plan.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: "Clear and specific name of the workout (e.g., 'High-Knee Sprints', 'Push-ups')."
          },
          description: {
            type: Type.STRING,
            description: "A brief, motivating description of the workout and its benefits."
          },
          durationMinutes: {
            type: Type.INTEGER,
            description: "Duration of this specific workout activity in minutes."
          },
          caloriesBurned: {
            type: Type.INTEGER,
            description: "Estimated number of calories burned during this activity."
          },
          steps: {
            type: Type.INTEGER,
            description: "Estimated number of steps for this activity. Should be 0 for stationary exercises like push-ups or yoga."
          }
        },
        required: ["name", "description", "durationMinutes", "caloriesBurned", "steps"]
      }
    }
  },
  required: ["workouts"]
};


const goalMap = {
  weight_loss: "Weight Loss",
  muscle_gain: "Muscle Gain",
  cardio_fitness: "Cardiovascular Fitness Improvement",
  general_health: "General Health and Wellness"
};

const levelMap = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};


export const generateWorkoutPlan = async (userInput: UserInput): Promise<WorkoutPlanResponse> => {
  const prompt = `
    Create a personalized workout plan based on the following user profile. The total plan duration should be approximately ${userInput.duration} minutes.

    - Fitness Goal: ${goalMap[userInput.goal]}
    - Fitness Level: ${levelMap[userInput.level]}

    Instructions:
    1. Generate a sequence of exercises that logically fit together (e.g., warm-up, main workout, cool-down).
    2. The sum of 'durationMinutes' for all activities should be close to the user's requested total duration of ${userInput.duration} minutes.
    3. Provide realistic estimates for calories burned and step count for each exercise, tailored to the user's fitness level.
    4. For stationary exercises (e.g., push-ups, planks, yoga, weightlifting), the step count must be 0.
    5. Ensure the workout descriptions are encouraging and clear.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: workoutSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText) as WorkoutPlanResponse;

    if (!parsedResponse.workouts || !Array.isArray(parsedResponse.workouts)) {
      throw new Error("Invalid response format from API: 'workouts' array not found.");
    }

    return parsedResponse;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Could not generate workout plan from the AI model.");
  }
};
