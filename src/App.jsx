import React, { useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

const App = () => {
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState(null);

  const handleComplete = async (answers) => {
    console.log("Answers:", answers);
    // TODO: send answers to AI and setResult()
  };

  if (result) {
    return <div className="text-white">Recommended movie: {result}</div>; // Placeholder
  }

  return (
    <>
      {started ? (
        <Quiz onComplete={handleComplete} />
      ) : (
        <Landing onStart={() => setStarted(true)} />
      )}
    </>
  );
};

export default App;
