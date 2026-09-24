import Image from "next/image";
import fitLogo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-between items-center ">
        <div className="flex items-center justify-between gap-2">
          <Image src={fitLogo} alt="FITLOG" />
          <h4 className="text-[15px] font-bold">FITLOG</h4>
        </div>

        <ul className="flex items-center justify-between gap-5">
  <li className="cursor-pointer rounded-full border border-transparent px-5 py-2 transition-all duration-300 hover:bg-[#1A2312] hover:text-[#C2F800]">
    Workouts
  </li>

  <li className="cursor-pointer rounded-full border border-transparent px-5 py-2 transition-all duration-300 hover:bg-[#1A2312] hover:text-[#C2F800]">
    My Plan
  </li>
</ul>

        <ul className="flex items-center justify-between gap-4">
          <li>Plan</li>
          <li>Saved</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;