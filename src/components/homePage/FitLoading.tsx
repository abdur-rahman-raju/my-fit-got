const FitLoading = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">

        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#C2F800]" />

        <p className="text-sm font-bold tracking-widest text-gray-400">
          LOADING WORKOUTS...
        </p>

      </div>
    </div>
  );
};

export default FitLoading;