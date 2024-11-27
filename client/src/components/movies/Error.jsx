import React from "react";
import { ImSad } from "react-icons/im";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  return (
    <div className="flex h-screen items-center justify-center text-center flex-col">
      <ImSad className="text-9xl" />
      <p className="text-[#4CAF50] text-3xl md:text-6xl font-bold py-6">
        {error}
      </p>
      <p className="max-w-xl text-xl md:text-3xl text-gray-900 py-3 font-semibold">
        Try to refresh this page or feel free to contact us if the problem
        persists.
      </p>
      <Link to="/">
        <button className="bg-gray-900 w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 text-[#4CAF50] hover:text-white hover:scale-105 ease-in-out duration-300">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
