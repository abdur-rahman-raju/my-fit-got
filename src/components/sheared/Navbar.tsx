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
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">

       
        <Link href="/" className="flex shrink-0 items-center gap-2">
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

        
        <ul className="hidden items-center gap-2 sm:flex sm:gap-5">
          <li>
            <Link
              href="/#library"
              className={`rounded-full border border-transparent px-4 py-2 text-sm transition-all duration-300 sm:px-5 ${
                isWorkoutActive
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "hover:bg-[#1A2312] hover:text-[#C2F800]"
              }`}
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className={`rounded-full border border-transparent px-4 py-2 text-sm transition-all duration-300 sm:px-5 ${
                isPlanActive
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "hover:bg-[#1A2312] hover:text-[#C2F800]"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>

        
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#C2F800] px-3 py-2 text-xs font-bold text-[#1A2312] sm:px-4 sm:text-sm"
          >
            Plan {planCount}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white px-3 py-2 text-xs font-bold text-white sm:px-4 sm:text-sm"
          >
            Saved {savedCount}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul className="mt-5 flex items-center justify-center gap-3 sm:hidden">
        <li>
          <Link
            href="/#library"
            className={`rounded-full border border-transparent px-5 py-2 text-sm transition-all duration-300 ${
              isWorkoutActive
                ? "bg-[#1A2312] text-[#C2F800]"
                : "hover:bg-[#1A2312] hover:text-[#C2F800]"
            }`}
          >
            Workouts
          </Link>
        </li>

        <li>
          <Link
            href="/my-plan"
            className={`rounded-full border border-transparent px-5 py-2 text-sm transition-all duration-300 ${
              isPlanActive
                ? "bg-[#1A2312] text-[#C2F800]"
                : "hover:bg-[#1A2312] hover:text-[#C2F800]"
            }`}
          >
            My Plan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
