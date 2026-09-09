import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full" />
        <p className="mt-4 text-slate-400 font-medium tracking-widest text-sm uppercase">Loading</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
