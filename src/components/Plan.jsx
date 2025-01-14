function Plan() {
  return (
    <div className="flex items-center flex-1 gap-1">
      <div className="flex flex-col">
        <span className="font-bold">Enterprise</span>
        <span className="text-stone-500">Pay as you go</span>
      </div>
      <div className="flex items-center justify-center flex-1">
        <button className="flex justify-center px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded ml-auto">
          Support
        </button>
      </div>
    </div>
  );
}

export default Plan;
