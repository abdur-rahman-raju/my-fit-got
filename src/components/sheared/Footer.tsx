// Image from "next/image";
import footer from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 flex flex-col items-center justify-between gap-4 sm:flex-row">

        <Image
          src={footer}
          alt="FitLog"
          width={35}
          height={35}
        />

        <p className="text-center text-[11px] text-gray-600 sm:text-right">
          © 2026 FitLog — Workout Library. Trainrd, log honest.
        </p>

      </div>
    </div>
  );
};

export default Footer; 