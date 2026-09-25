"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getPlan, getSaved } from "@/lib/storage";
import { TWorkout } from "@/lib/Api";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [plan, setPlan] = useState<TWorkout[]>([]);
  const [saved, setSaved] = useState<TWorkout[]>([]);

  useEffect(() => {
    setPlan(getPlan());
    setSaved(getSaved());
  }, []);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentList =
    activeTab === "plan" ? plan : saved;

  return (
    <main className="container mx-auto px-4 py-10">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl bg-[#222630] p-5">
          <p className="text-sm text-gray-500">
            EXERCISES
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {plan.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#222630] p-5">
          <p className="text-sm text-gray-500">
            MINUTES
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {totalMinutes}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#222630] p-5">
          <p className="text-sm text-gray-500">
            CALORIES
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {totalCalories}
          </h2>
        </div>

      </div>

      {/* Tabs */}
      <div className="mt-10 flex gap-3">

        <button
          onClick={() => setActiveTab("plan")}
          className={`rounded-full px-5 py-2 font-bold ${
            activeTab === "plan"
              ? "bg-[#C2F800] text-[#1A2312]"
              : "border border-gray-600 text-white"
          }`}
        >
          Today's Plan ({plan.length})
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-full px-5 py-2 font-bold ${
            activeTab === "saved"
              ? "bg-[#C2F800] text-[#1A2312]"
              : "border border-gray-600 text-white"
          }`}
        >
          Saved ({saved.length})
        </button>

      </div>

      {/* Workout List */}
      <div className="mt-8 space-y-4">

        {currentList.length === 0 ? (
          <div className="py-16 text-center">

            <h2 className="text-2xl font-bold text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-6 inline-block rounded-full bg-[#C2F800] px-6 py-3 font-bold text-[#1A2312]"
            >
              Go to workouts
            </Link>

          </div>
        ) : (
          currentList.map((workout) => (
            <div
              key={workout.id}
              className="rounded-2xl bg-[#222630] p-5 text-white"
            >
              <h2 className="text-xl font-bold">
                {workout.name}
              </h2>

              <p className="mt-1 text-gray-500">
                {workout.equipment}
              </p>

              <div className="mt-4 flex gap-5 text-sm text-gray-500">
                <span>{workout.duration} Min</span>
                <span>{workout.caloriesBurned} Kcal</span>
                <span>⭐ {workout.rating}</span>
              </div>
            </div>
          ))
        )}

      </div>

    </main>
  );
};

export default MyPlan;