import WorkoutActions from "@/components/cardSection/WorkoutActions";
import { TWorkout } from "@/lib/Api";
import Image from "next/image";
// import WorkoutActions from "./WorkoutActions";

type DetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetails = async ({ params }: DetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout: TWorkout  = await response.json();

  return (
    <div className="container mx-auto p-10">
      
      <div className="flex gap-10">

        <Image
         src={workout.image}
  alt={workout.name}
  width={600}
  height={900}
  className=" rounded-2xl object-cover"
        />

        <div>
            <h1 className="text-4xl font-bold mb-4">{workout.name}</h1>
            <p className="text-[15px] text-gray-500 mb-4">{workout.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-bold text-[#1A2312]"
              >
                {muscle}
              </span>
            ))}
            </div>


<div className="rounded-2xl bg-[#101215] p-5">

  <p className="mb-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>EQUIPMENT</span>
    <span className="text-white">{workout.equipment}</span>
  </p>

  <hr className="border-gray-700" />

  <p className="my-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>DIFFICULTY</span>
    <span className="text-white">{workout.difficulty}</span>
  </p>

  <hr className="border-gray-700" />

  <p className="my-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>SETS</span>
    <span className="text-white">{workout.sets}</span>
  </p>

  <hr className="border-gray-700" />

  <p className="my-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>REPS</span>
    <span className="text-white">{workout.reps}</span>
  </p>

  <hr className="border-gray-700" />

  <p className="my-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>DURATION</span>
    <span className="text-white">{workout.duration} Min</span>
  </p>

  <hr className="border-gray-700" />

  <p className="my-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>CALORIES</span>
    <span className="text-white">{workout.caloriesBurned} Kcal</span>
  </p>

  <hr className="border-gray-700" />

  <p className="mt-4 flex items-center justify-between text-[12px] text-gray-500">
    <span>RATING</span>
    <span className="text-white">⭐ {workout.rating}</span>
  </p>

</div>


            <div className="mt-8">
  <h2 className="mb-3 text-2xl font-bold text-white">
    How to Perform
  </h2>

  <div className="space-y-1">
    {workout.instructions.map((instruction, index) => (
      <div
        key={index}
        className="flex items-start gap-4  "
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center font-bold text-gray-400">
          {index + 1}
        </div>

        <p className="pt-1 leading-6 text-gray-400">
          {instruction}
        </p>
      </div>
    ))}
  </div>
</div>

  
      {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">

  
  <button
    className="flex items-center justify-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-[#d5ff45]"
  >
    <span className="text-lg">＋</span>
    Add to today's plan
  </button>

  {/* Save for Later */}
  {/* <button
    className="flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#101215]"
  >
    <span className="text-lg">♡</span>
    Save for later
  </button>

      </div> */} 

      <WorkoutActions workout={workout} />


        </div>

      </div>

    </div>
  );
};

export default WorkoutDetails;