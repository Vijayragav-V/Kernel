import React from "react";
import Phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
const Movies = () => {
  return (
    <div className="w-full py-16 px-4 text-center md:text-left">
      <div className=" mx-auto max-w-4xl grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 drop-shadow-2xl"
          src={Phone}
          alt="Phone"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#42c1ec] font-bold text-base lg:text-xl">
            Fulfill Your Cinema Needs
          </p>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold py-3">
            Find a movie for any occasion
          </h1>
          <p className="text-base font-semibold lg:text-xl py-1">
            Access a fun and diverse catalog of movies at your fingertips. Use this website to bookmark movies to watch later or even to look for a movie in a pinch...
          </p>
          <Link to="/resources">
            <button className="bg-gray-900 w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 text-[#c3d8ff] hover:text-white hover:scale-105 ease-in-out duration-300">
              View Resources
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;
