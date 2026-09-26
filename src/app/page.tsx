import Benner from "@/components/homePage/Benner";
import FitHome from "@/components/homePage/FitHome";
import FitLoading from "@/components/homePage/FitLoading";
import { Suspense } from "react";


export default function Home() {
  return (
   <div>
    <Suspense fallback={<FitLoading />}>
    
    <Benner/>
    <FitHome/>
    </Suspense>
   </div>
  );
}
