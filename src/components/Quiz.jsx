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

  const handleChange = (e) => {
    const updated = [...answers];
    updated[step] = e.target.value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      setRecommendation(data.result);
    } catch (err) {
      console.error("Error fetching recommendation:", err);
      setRecommendation("Something went wrong.");
    }
  };

  if (recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primaryBg text-textMain p-4">
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
    <div className="min-h-screen flex items-center justify-center bg-primaryBg p-4">
      <div className="bg-surface text-textMain p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-2 text-accentPrimary">
          Question {step + 1} of 5
        </h2>
        <p className="text-textMain mb-6">{questions[step]}</p>
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentPrimary mb-6"
          value={answers[step]}
          onChange={handleChange}
          placeholder="Type your answer here..."
        />
        <button
          className="w-full bg-accentPrimary hover:bg-accentSecondary text-surface font-semibold py-2 px-4 rounded-lg transition duration-200"
          onClick={handleNext}
        >
          {step === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
