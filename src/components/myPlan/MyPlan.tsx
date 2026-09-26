
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { TWorkout } from "@/lib/Api";
import { getPlan, getSaved } from "@/lib/storage";

import PlanTabs from "./PlanTabs";
import PlanMetrics from "./PlanMetrics";
import WorkoutPlanCard from "./WorkoutPlanCard";

const MyPlan = () => {
  const [activeTab, setActiveTab] =
    useState<"plan" | "saved">("plan");

  const [plan, setPlan] = useState<TWorkout[]>([]);
  const [saved, setSaved] = useState<TWorkout[]>([]);

  const [toast, setToast] = useState("");

  // Sort
  const [sortBy, setSortBy] =
    useState<"time" | "calories" | "rating">("time");

  // Load data
  useEffect(() => {
    setPlan(getPlan());
    setSaved(getSaved());
  }, []);

  // Reload current localStorage data
  const refreshData = () => {
    setPlan(getPlan());
    setSaved(getSaved());
  };

  // Toast
  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  // Active tab data
  const currentWorkouts =
    activeTab === "plan"
      ? plan
      : saved;

  // Sorted workouts
  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "time") {
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
    <main className="min-h-screen bg-[#101215] px-4 py-10 text-white">

      <div className="container mx-auto">

        {/* Header */}
        <div>
          <p className="text-sm font-bold tracking-widest text-[#C2F800]">
            FITLOG
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            MY PLAN
          </h1>

          <p className="mt-2 text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Tabs */}
        <PlanTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Metrics */}
        <PlanMetrics
          workouts={currentWorkouts}
        />

        {/* Sort */}
        <div className="mt-8 flex items-center justify-end gap-3">

          <label
            htmlFor="sort"
            className="text-sm font-bold text-gray-500"
          >
            Sort By
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "time"
                  | "calories"
                  | "rating"
              )
            }
            className="rounded-full border border-gray-700 bg-[#1A1D21] px-4 py-2 text-sm font-bold text-white outline-none focus:border-[#C2F800]"
          >
            <option value="time">
              Time
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

        </div>

        {/* Workout List */}
        <div className="mt-10">

          {currentWorkouts.length === 0 ? (

            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

              <h2 className="text-2xl font-bold">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 max-w-md text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-[#1A2312] transition-all duration-300 hover:bg-[#d5ff45]"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            <div className="space-y-4">

              {sortedWorkouts.map((workout) => (
                <WorkoutPlanCard
                  key={workout.id}
                  workout={workout}
                  isPlan={activeTab === "plan"}
                  onUpdate={refreshData}
                  onToast={showToast}
                />
              ))}

            </div>

          )}

        </div>

      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-[#1A2312] shadow-lg">
          {toast}
        </div>
      )}

    </main>
  );
};

export default MyPlan;