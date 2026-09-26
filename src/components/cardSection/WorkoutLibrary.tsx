"use client";

import { useState } from "react";
import { TWorkout } from "@/lib/Api";
import FtiCards from "../homePage/FtiCards";


type WorkoutLibraryProps = {
  workouts: TWorkout[];
};

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div>

      {/* Sort */}
      <div className="mb-6 flex items-center justify-end gap-3">
        <label
          htmlFor="sort"
          className="text-sm font-bold text-gray-400"
        >
          Sort By
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-full border border-gray-600 bg-[#222630] px-4 py-2 text-sm font-bold text-white outline-none focus:border-[#C2F800]"
        >
          <option value="duration">
            Duration
          </option>

          <option value="calories">
            Calories
          </option>

          <option value="rating">
            Rating
          </option>
        </select>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <FtiCards
            key={workout.id}
            fits={workout}
          />
        ))}
      </div>

    </div>
  );
};

export default WorkoutLibrary;