import React, { useState } from "react";
import Landing from "./components/Landing";
// import Quiz from "./components/Quiz"; // future

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        <div className="text-white">Quiz coming soon...</div> // replace with <Quiz />
      ) : (
        <Landing onStart={() => setStarted(true)} />
      )}
    </>
  );
};

export default App;

