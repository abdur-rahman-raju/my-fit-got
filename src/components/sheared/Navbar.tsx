"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import fitLogo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={fitLogo}
            alt="FITLOG"
            width={35}
            height={35}
          />

          <h4 className="text-[15px] font-bold">
            FITLOG
          </h4>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-5">

          {/* Workouts */}
          <li>
            <Link
              href="/#library"
              className={`
                rounded-full border border-transparent px-5 py-2
                transition-all duration-300
                ${
                  isWorkoutActive
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-white hover:bg-[#1A2312] hover:text-[#C2F800]"
                }
              `}
            >
              Workouts
            </Link>
          </li>

          {/* My Plan */}
          <li>
            <Link
              href="/my-plan"
              className={`
                rounded-full border border-transparent px-5 py-2
                transition-all duration-300
                ${
                  isPlanActive
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-white hover:bg-[#1A2312] hover:text-[#C2F800]"
                }
              `}
            >
              My Plan
            </Link>
          </li>

        </ul>

        {/* Status */}
        <ul className="flex items-center gap-4">
          <li>Plan</li>
          <li>Saved</li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;