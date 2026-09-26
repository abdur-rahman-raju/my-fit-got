import { TWorkout } from "@/lib/Api";

type PlanMetricsProps = {
  workouts: TWorkout[];
};

const PlanMetrics = ({ workouts }: PlanMetricsProps) => {

  const totalExercises = workouts.length;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

      <div className="rounded-2xl bg-[#222630] p-5">
        <p className="text-xs font-bold tracking-widest text-gray-500">
          EXERCISES
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {totalExercises}
        </h2>
      </div>

      <div className="rounded-2xl bg-[#222630] p-5">
        <p className="text-xs font-bold tracking-widest text-gray-500">
          MINUTES
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {totalMinutes}
        </h2>
      </div>

      <div className="rounded-2xl bg-[#222630] p-5">
        <p className="text-xs font-bold tracking-widest text-gray-500">
          CALORIES
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {totalCalories}
        </h2>
      </div>

    </div>
  );
};

export default PlanMetrics;