import Benner from "@/components/homePage/Benner";
import FitHome from "@/components/homePage/FitHome";
import FitLoading from "@/components/homePage/FitLoading";
import { Suspense } from "react";


export default function Home() {
  return (
   <div>
    <Suspense fallback={<FitLoading />}>
    <h1>Hello Abdur Rahman Raju</h1>
    <Benner/>
    <FitHome/>
    </Suspense>
   </div>
  );
}
