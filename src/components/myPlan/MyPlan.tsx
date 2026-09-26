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

  // Load localStorage data
  useEffect(() => {
    setPlan(getPlan());
    setSaved(getSaved());
  }, []);

  // Active tab অনুযায়ী data
  const currentWorkouts =
    activeTab === "plan"
      ? plan
      : saved;

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


        {/* Workout List */}
        <div className="mt-10">

          {currentWorkouts.length === 0 ? (

            /* Empty State */
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

            /* Workout Cards */
            <div className="space-y-4">

              {currentWorkouts.map((workout) => (
                <WorkoutPlanCard
                  key={workout.id}
                  workout={workout}
                />
              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  );
};

export default MyPlan;