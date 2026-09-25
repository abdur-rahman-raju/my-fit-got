// import { TWorkout } from "@/lib/Api"
// import Image from "next/image"
// import WorkoutActions from "./WorkoutActions";

// export interface FitDitailsProps {
//     workout: TWorkout
// }

// export default function FitDitails({ workout }: FitDitailsProps) {
    
//     return (
//         <div>

//             <div>
//                 <Image
//   src={workout.image}
//   alt={workout.name}
//   width={700}
//   height={500}
//   className="h-[500px] w-full rounded-2xl object-cover"
// />

//                 <div>

//                       <div className="mb-4 flex flex-wrap gap-2">
//             {workout.muscleGroups.map((muscle, index) => (
//               <span
//                 key={index}
//                 className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-bold text-[#1A2312]"
//               >
//                 {muscle}
//               </span>
//             ))}
//           </div>



//                 </div>
//             </div>

//         </div>
//     )
// }