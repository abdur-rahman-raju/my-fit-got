"use client";

import { TWorkout } from "@/lib/Api";
import { addToPlan, addToSaved } from "@/lib/storage";
import { toast } from "react-toastify";

type WorkoutActionsProps = {
  workout: TWorkout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (added) {
      toast.success("Added to today's plan");
    } else {
      toast.error("Already added or plan is full");
    }
  };

  const handleSaveForLater = () => {
    const saved = addToSaved(workout);

    if (saved) {
      toast.success("Saved for later");
    } else {
      toast.error("Already saved");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      <button
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-[#d5ff45]"
      >
        <span className="text-lg">＋</span>
        Add to today's plan
      </button>

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