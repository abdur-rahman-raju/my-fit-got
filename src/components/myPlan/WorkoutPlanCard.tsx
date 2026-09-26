import Image from "next/image";
import Link from "next/link";

import { TWorkout } from "@/lib/Api";

type WorkoutPlanCardProps = {
  workout: TWorkout;
};

const WorkoutPlanCard = ({
  workout,
}: WorkoutPlanCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-[#222630] p-5 text-white md:flex-row md:items-center">

      {/* Image */}
      <Image
        src={workout.image}
        alt={workout.name}
        width={160}
        height={120}
        className="h-40 w-full rounded-xl object-cover md:h-28 md:w-40"
      />

      {/* Information */}
      <div className="flex-1">

        <h2 className="text-xl font-bold">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

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

      {/* View Details */}
      <Link
        href={`/workout/${workout.id}`}
        className="rounded-full border border-gray-600 px-5 py-2 text-center text-sm font-bold transition-all duration-300 hover:border-[#C2F800] hover:text-[#C2F800]"
      >
        View Details
      </Link>

    </div>
  );
};

export default WorkoutPlanCard;