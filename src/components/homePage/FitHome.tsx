import { TWorkout } from "@/lib/Api";
import FtiCards from "./FtiCards";

const fitApi = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();
  return data;
};

const FitHome = async () => {
  const apiData = await fitApi();

  return (
    <section
      id="library"
      className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      <div>
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          THE LIBRARY
        </h1>

        <p className="mb-6 text-[12px] text-gray-400 sm:text-[13px]">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apiData.map((fits: TWorkout) => {
            return (
              <FtiCards
                key={fits.id}
                fits={fits}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FitHome;