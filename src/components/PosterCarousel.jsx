import React, { useState, useEffect } from "react";

const posters = [
  "/poster1.jpg",
  "/poster2.jpg",
  "/poster3.jpg",
  "/poster4.jpg",
  "/poster5.jpg",
  "/poster6.jpg",
  "/poster7.jpg",
  "/poster8.jpg",
  "/poster9.jpg",
  "/poster10.jpg",
  "/poster11.jpg",
  "/poster12.jpg",
];

const PosterCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = posters.length;

  // Auto-rotate carousel every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      <div className="relative flex items-center justify-center w-[100%] max-w-5xl h-80">
        {posters.map((poster, i) => {
          const position = i - current;
          const isCenter = position === 0;

          // Wrap around effect
          const wrappedPosition = ((i - current + length) % length + length) % length;
          const offset = wrappedPosition > length / 2 ? wrappedPosition - length : wrappedPosition;

          return (
            <img
              key={i}
              src={poster}
              alt={`poster-${i}`}
              className={`absolute transition-all duration-700 ease-in-out object-cover rounded-lg shadow-lg ${
                isCenter
                  ? "w-48 h-72 z-20 scale-110"
                  : "w-32 h-48 z-10 opacity-50 blur-sm"
              }`}
              style={{
                transform: `translateX(${offset * 120}px) scale(${isCenter ? 1.1 : 0.9})`,
                zIndex: isCenter ? 20 : 10 - Math.abs(offset),
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PosterCarousel;
