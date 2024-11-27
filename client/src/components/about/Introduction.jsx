import React from "react";
import cinema from "../../assets/cinema.jpg";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24 bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        <div className="text-center md:text-left">
          <p className="text-[#42c1ec] font-bold text-lg lg:text-xl mb-2">
            ABOUT US
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Kernel - Movie Hub
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-300 mb-6">
            Welcome to Kernel, your one-stop destination for discovering new movies to watch, finding more information about your favorite movies, and saving them to watch later!
          </p>
        </div>
        <img
          className="w-full h-full mx-auto my-4 md:max-w-2xl lg:max-w-4xl rounded-lg shadow-lg md:order-1"
          src={cinema}
          alt="cinema"
        />
      </div>
    </div>
  );
};

export default Introduction;
