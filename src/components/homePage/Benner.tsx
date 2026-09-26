
import Image from "next/image";
import benner from "@/assets/banner.png";

const Benner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-8 bg-[#222630] p-6 sm:p-8 lg:flex-row lg:p-10">

        <div className="w-full lg:w-1/2">
          <h4 className="my-3 text-[12px] text-[#C2F800] sm:my-4">
            WORKOUT LIBRARY
          </h4>

          <h1 className="my-3 text-3xl font-bold leading-tight sm:my-4 sm:text-4xl lg:text-4xl">
            TRAIN WITH INTENT. LOG{" "}
            <br className="hidden sm:block" />
            EVERY SET.
          </h1>

          <p className="my-3 max-w-xl text-[12px] leading-5 text-[#9CA3AF] sm:my-4">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="my-3 rounded bg-[#C2F800] px-3 py-2 text-[12px] font-bold text-black transition-all duration-300 hover:bg-[#aee000] sm:my-4">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <Image
            src={benner}
            alt="FitLog workout banner"
            className="h-auto w-full max-w-[420px] object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Benner;