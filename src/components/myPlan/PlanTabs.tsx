type PlanTabsProps = {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
};

const PlanTabs = ({
  activeTab,
  setActiveTab,
}: PlanTabsProps) => {
  return (
    <div className="mt-8 flex gap-3">

      <button
        onClick={() => setActiveTab("plan")}
        className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
          activeTab === "plan"
            ? "bg-[#C2F800] text-[#1A2312]"
            : "border border-gray-700 text-gray-400 hover:border-[#C2F800] hover:text-[#C2F800]"
        }`}
      >
        Today's Plan
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
          activeTab === "saved"
            ? "bg-[#C2F800] text-[#1A2312]"
            : "border border-gray-700 text-gray-400 hover:border-[#C2F800] hover:text-[#C2F800]"
        }`}
      >
        Saved
      </button>

    </div>
  );
};

export default PlanTabs;