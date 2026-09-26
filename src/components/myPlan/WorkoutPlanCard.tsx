import Image from "next/image";
import Link from "next/link";

import { TWorkout } from "@/lib/Api";

import {
  markAsDone,
  removeFromPlan,
  removeFromSaved,
} from "@/lib/storage";

type WorkoutPlanCardProps = {
  workout: TWorkout;
  isPlan: boolean;
  onUpdate: () => void;
  onToast: (message: string) => void;
};

const WorkoutPlanCard = ({
  workout,
  isPlan,
  onUpdate,
  onToast,
}: WorkoutPlanCardProps) => {

  // ====================
  // REMOVE
  // ====================

  const handleRemove = () => {

    if (isPlan) {

      removeFromPlan(workout.id);

      onToast("Workout removed from today's plan");

    } else {

      removeFromSaved(workout.id);

      onToast("Workout removed from saved");

    }

    onUpdate();
  };


  // ====================
  // MARK AS DONE
  // ====================

  const handleDone = () => {

    markAsDone(workout.id);

    onUpdate();

    onToast("Workout marked as done");
  };


  return (
    <div
      className={`flex flex-col gap-5 rounded-2xl bg-[#222630] p-5 text-white md:flex-row md:items-center ${
        workout.completed ? "opacity-60" : ""
      }`}
    >

      {/* ====================
          IMAGE
      ==================== */}

      <Image
        src={workout.image}
        alt={workout.name}
        width={160}
        height={120}
        className="h-40 w-full rounded-xl object-cover md:h-28 md:w-40"
      />


      {/* ====================
          INFORMATION
      ==================== */}

      <div className="flex-1">

        <div className="flex items-center gap-3">

          <h2 className="text-xl font-bold">
            {workout.name}
          </h2>

          {workout.completed && (
            <span className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-[#1A2312]">
              DONE
            </span>
          )}

        </div>


        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>


        {/* ====================
            STATS
        ==================== */}

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-400">

          <span>
            {workout.duration} Min
          </span>

          <span>
            {workout.caloriesBurned} Kcal
          </span>

          <span>
            ⭐ {workout.rating}
          </span>

        </div>

      </div>


      {/* ====================
          ACTION BUTTONS
      ==================== */}

      <div className="flex flex-wrap gap-2">

        {/* View Details */}

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-center text-sm font-bold transition-all duration-300 hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>


        {/* Mark as Done */}

        {isPlan && !workout.completed && (
          <button
            onClick={handleDone}
            className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-bold text-[#1A2312] transition-all duration-300 hover:bg-[#d5ff45]"
          >
            ✓ Mark as Done
          </button>
        )}


        {/* Remove */}

        <button
          onClick={handleRemove}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-red-500 hover:text-red-500"
          title="Remove"
        >
          ✕
        </button>

      </div>

    </div>
  );
};

export default WorkoutPlanCard;