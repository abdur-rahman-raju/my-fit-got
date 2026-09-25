"use client";

import { TWorkout } from "@/lib/Api";
import { addToPlan, addToSaved } from "@/lib/storage";

type WorkoutActionsProps = {
  workout: TWorkout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {

  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (added) {
      alert("Added to today's plan");
    } else {
      alert("Workout is already in today's plan or plan is full.");
    }
  };

  const handleSaveForLater = () => {
    const saved = addToSaved(workout);

    if (saved) {
      alert("Saved for later");
    } else {
      alert("Workout is already saved.");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      {/* Add to Today's Plan */}
      <button
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-[#d5ff45]"
      >
        <span className="text-lg">＋</span>
        Add to today's plan
      </button>

      {/* Save for Later */}
      <button
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#101215]"
      >
        <span className="text-lg">♡</span>
        Save for later
      </button>

    </div>
  );
};

export default WorkoutActions;