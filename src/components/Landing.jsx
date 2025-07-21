import React from "react";
import PosterCarousel from "./PosterCarousel";
import { Link } from "react-router-dom";

const Landing = () => (
  <>
  <section className="flex flex-col items-center justify-center text-center bg-primaryBg py-24 px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-accentPrimary mb-4">
      Discover Your Next Favorite Movie
    </h1>
    <p className="text-textMain mb-6 max-w-xl">
      Answer a few questions and let our AI recommend the perfect movie based on your mood and taste.
    </p>
    <Link
      to="/quiz"
      className="bg-accentPrimary hover:bg-accentSecondary text-white px-6 py-3 rounded-lg font-semibold transition"
    >
      Get started
    </Link>
  </section>
  <div className="w-full bg-primaryBg py-1 px-3">
    <h2 className="text-2xl font-bold text-center text-accentPrimary mb-6"></h2>
    <PosterCarousel />
  </div>
  </>

);

export default Landing;
