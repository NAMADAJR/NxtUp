import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";


const App = () => (
  <Router>
    <div className="relative min-h-screen bg-primaryBg text-textMain overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
