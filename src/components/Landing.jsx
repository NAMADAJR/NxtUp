import React from "react";

const Landing = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-accentPrimary mb-6">
          🎬 Welcome to NxtUp
        </h1>
        <p className="text-lg md:text-xl text-textMuted mb-8">
          5 Questions. 1 Perfect Movie. Let’s find your next favorite film.
        </p>
        <button
          onClick={onStart}
          className="bg-accentPrimary hover:bg-accentSecondary text-surface font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
