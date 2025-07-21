import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    "What genre do you usually enjoy?",
    "Do you prefer recent movies or classics?",
    "Which mood are you in right now?",
    "Would you like something more action-packed or story-driven?",
    "What kind of ending do you prefer?",
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [recommendation, setRecommendation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const updated = [...answers];
    updated[step] = e.target.value;
    setAnswers(updated);
  };

  const handleNext = async (e) => {
    e.preventDefault();

    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://nxtup.onrender.com/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      setRecommendation(data.result);
    } catch (err) {
      console.error("Error fetching recommendation:", err);
      setRecommendation("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

if (isLoading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-black to-[#1E1E1E] p-4">
      <div className="text-accentPrimary flex flex-col items-center space-y-6">
        {/* Cinematic Title Style */}
        <p className="text-3xl md:text-5xl font-bold tracking-wide text-center animate-fadeInSlow">
          Finding Your Perfect Movie...
        </p>

        {/* Animated Loader */}
        <div className="w-14 h-14 border-4 border-accentPrimary border-t-transparent rounded-full animate-spin shadow-lg" />
      </div>
    </div>
  );
}

  if (recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-black to-[#1E1E1E] p-4">
        <div className="bg-surface text-textMain p-8 rounded-2xl shadow-2xl max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-4 text-accentPrimary">🎉 Your Movie Recommendation</h2>
          <p className="text-gray-400 whitespace-pre-wrap text-sm leading-relaxed">
            {recommendation}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-black to-[#1E1E1E] p-4">
      <div className="bg-surface text-textMain p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-2 text-accentPrimary">
          Question {step + 1} of 5
        </h2>
        <p className="text-textMain mb-6">{questions[step]}</p>

        <form onSubmit={handleNext}>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentPrimary mb-6"
            value={answers[step]}
            onChange={handleChange}
            placeholder="Type your answer here..."
          />
          <button
            type="submit"
            className="w-full bg-accentPrimary hover:bg-accentSecondary text-surface font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {step === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quiz;
