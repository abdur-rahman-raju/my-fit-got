"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import fitLogo from "@/assets/logo.png";
import { getPlan, getSaved } from "@/lib/storage";

const Navbar = () => {
  const pathname = usePathname();

  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      setPlanCount(getPlan().length);
      setSavedCount(getSaved().length);
    };

    updateCounts();

    window.addEventListener("storage", updateCounts);

    return () => {
      window.removeEventListener("storage", updateCounts);
    };
  }, [pathname]);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={fitLogo}
            alt="FITLOG"
            width={35}
            height={35}
          />

          <h4 className="text-[15px] font-bold">
            FITLOG
          </h4>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-5">

          {/* Workouts */}
          <li>
            <Link
              href="/#library"
              className={`rounded-full border border-transparent px-5 py-2 transition-all duration-300 ${
                isWorkoutActive
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "hover:bg-[#1A2312] hover:text-[#C2F800]"
              }`}
            >
              Workouts
            </Link>
          </li>

          {/* My Plan */}
          <li>
            <Link
              href="/my-plan"
              className={`rounded-full border border-transparent px-5 py-2 transition-all duration-300 ${
                isPlanActive
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "hover:bg-[#1A2312] hover:text-[#C2F800]"
              }`}
            >
              My Plan
            </Link>
          </li>

        </ul>

        {/* Counters */}
        <div className="flex items-center gap-3">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-bold text-[#1A2312]"
          >
            Plan {planCount}
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="rounded-full border border-white px-4 py-2 text-sm font-bold text-white"
          >
            Saved {savedCount}
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Navbar;