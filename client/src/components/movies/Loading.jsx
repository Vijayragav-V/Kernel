import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Loading = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto">
    <div className="flex col-span-1 items-center justify-center rounded-lg shadow-[0_0_15px_-7px] shadow-black">
      <ImSpinner3 size={30} className="animate-spin" />
    </div>
    <div className="col-span-3 py-6 lg:py-0">
      <div className="flex gap-4">
        <input
          type="search"
          className="w-[80%] md:w-[90%] p-4 text-base text-gray-900 focus:ring-[3px] outline-none focus:ring-gray-900 shadow-xl rounded-lg ease-in-out duration-300"
          placeholder=""
        />
        <div className="flex w-[20%] md:w-[10%] bg-gray-900 text-white items-center justify-center h-20 rounded-xl border-4 border-gray-900 hover:border-[#4CAF50] ease-in-out duration-300">
          <ImSpinner3 size={30} className="animate-spin" />
        </div>
      </div>
      <div className="ml-2 text-lg lg:text-xl font-semibold my-4">
        Booting up the database...
      </div>
      <div className="flex flex-col">
        {[...Array(3)].map((_) => (
          <div className="flex items-center justify-center h-[30vh] w-full mt-6 rounded-lg shadow-[0_0_20px_-7px] shadow-black text-gray-900">
            <ImSpinner3 className="animate-spin" size={30} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Loading;
