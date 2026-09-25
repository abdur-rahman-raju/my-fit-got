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
    <section id="library" className="container mx-auto">
      <div>
        <h1>THE LIBRARY</h1>

        <p>Twelve lifts covering every major muscle group.</p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apiData.map((fits: TWorkout) => {
            return <FtiCards key={fits.id} fits={fits} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FitHome;