export type TWorkout = {
  id: number;
  name: string;
  image: string;
  description: string;
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  muscleGroups: string[];
  instructions: string[];

  completed?: boolean;
};