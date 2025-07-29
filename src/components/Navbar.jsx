import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed w-full bg-black text-white px-6 py-1 flex items-center justify-between shadow border-b border-gray-800 rounded-b-lg z-index">
    {/* Left: Logo */}
    <div className="flex items-center space-x-6">
      <Link to="/">
        <img src="/logo.png" alt="NxtUp Logo" className="h-[70px] w-[120px] rounded-full shadow-lg"/>
      </Link>
    </div>

    {/* Right: Ask NxtUp button */}
    <Link
      to="/quiz"
      className="bg-accentPrimary text-black px-6 py-2 rounded-full shadow-md font-semibold hover:bg-accentSecondary hover:text-black transition-all duration-300 animate-pulse hover:animate-none"
    >
      Find Your Movie
    </Link>
  </nav>
);

export default Navbar;
