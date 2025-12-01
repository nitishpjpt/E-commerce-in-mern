import React, { useState } from "react";
import img1 from "../../assets/Banner ecommerce smartwatch electronics store product promotion dropshipping offer instagram stories.png";
import img2 from "../../assets/banner.png";
import img3 from "../../assets/Red and Black Neon Online Store Black Friday Smartphone Banner.png";
import img4 from "../../assets/Banner ecommerce smartwatch electronics store product promotion dropshipping offer instagram stories.png";
import img5 from "../../assets/banner.png";

const images = [img1, img2, img3, img4, img5];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* 
        ⭐ SMOOTH SLIDING ANIMATION
        We wrap all slides in a flex-row container, then move them using translateX.
        This creates a true sliding effect (not opacity fade).
      */}
      <div
        className="flex transition-transform duration-700 ease-in-out"  // ← smooth sliding animation applied here
        style={{ transform: `translateX(-${current * 100}%)` }} // ← slide movement logic
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-65 md:h-150">
            <img
              src={img}
              alt="carousel slide"
              className="w-full h-full object-fit rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-4 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 h-full px-4 flex items-center justify-center cursor-pointer"
      >
        <span className="w-10 h-10 flex items-center justify-center bg-white/40 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 h-full px-4 flex items-center justify-center cursor-pointer"
      >
        <span className="w-10 h-10 flex items-center justify-center bg-white/40 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
