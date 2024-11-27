import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8 bg-gray-900 text-white scrollTarget">
      <h1 className="text-center text-[#42c1ec] p-4 mb-6 md:mb-10 text-4xl font-bold underline underline-offset-[14px]">
        Features
      </h1>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 p-4">
        <div className="w-full h-auto md:w-[calc(50% - 3rem)] border-2 border-[#F5F5F5] rounded-lg hover:scale-105 ease-in-out duration-300">
          <div className="bg-[#88c9df] text-white p-4">
            <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              Diverse Selection
            </h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
              Explore a diverse array of films, from beloved classics to undiscovered indie treasures. Our collection spans genres and eras, offering something for every cinematic taste. Find the perfect movie for any occasion and immerse yourself in the world of storytelling.
            </p>
            <Link to="/extracurriculars">
              <button className="bg-[#88c9df] w-full lg:w-[200px] rounded-md font-semibold mt-4 md:mt-6 mx-auto py-2 md:py-3 text-gray-900 hover:text-white ease-in-out duration-300">
                Explore Collection
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto md:w-[calc(50% - 3rem)] border-2 border-[#F5F5F5] rounded-lg hover:scale-105 ease-in-out duration-300">
          <div className="bg-[#88c9df] text-white p-4">
            <h2 className="text-center text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
              Search, Filter, See Recommended, and Save
            </h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
              Easily find the best movies tailored to your search. Search for movies by title or filter to find the best movies for your taste and situation. See recommended movies based on previous watches and ratings and even save movies you want to watch for later!
            </p>
            <Link to="/extracurriculars">
              <button className="bg-[#88c9df] w-full lg:w-[200px] rounded-md font-semibold mt-4 md:mt-6 mx-auto py-2 md:py-3 text-gray-900 hover:text-white ease-in-out duration-300">
                Try It Now
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
