import { TWorkout } from "@/lib/Api";
import Image from "next/image";
import Link from "next/link";

export interface FtiCardsProps {
  fits: TWorkout;
}

export default function FtiCards({ fits }: FtiCardsProps) {
  return (
    <Link href={`/workout/${fits.id}`}>
      <div className="overflow-hidden rounded-2xl bg-[#222630] text-white shadow-md">

        {/* Image */}
        <Image
          src={fits.image}
          alt={fits.name}
          width={500}
          height={300}
          className="h-60 w-full object-cover"
        />

        <div className="p-4">

          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {fits.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-bold text-[#1A2312]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold">
            {fits.name}
          </h1>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-500">
            {fits.equipment}
          </p>

          {/* Divider */}
          <hr className="my-5 border-gray-500" />

          {/* Workout Info */}
          <div className="flex w-[50%] items-center justify-between text-[13px]">
            <p className="font-bold text-gray-500">
              {fits.duration} Min
            </p>

            <p className="font-bold text-gray-500">
              {fits.caloriesBurned} Kcal
            </p>

            <p className="font-bold text-gray-500">
              {fits.rating}
            </p>
          </div>

        </div>
      </div>
    </Link>
  );
}