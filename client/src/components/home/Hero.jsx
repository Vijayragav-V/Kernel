import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled <= 0);
  };

  const scrollDown = () => {
    const viewportHeight = window.innerHeight;

    window.scrollTo({
      top: (92 * viewportHeight) / 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisible);
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  return (
    <div className="relative overflow-hidden text-white h-screen flex items-center justify-center bg-[#1f1f1f]">
      <div className="absolute inset-0 z-[1]">
        <div className="absolute left-[calc(50%-11rem)] top-[-40%] transform-gpu overflow-hidden blur-3xl sm:left-[calc(50%-30rem)] sm:-top-80">
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#85b0ff] to-[#1f1f1f] opacity-80 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="absolute left-[calc(50%+3rem)] top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:left-[calc(50%+36rem)] sm:top-[calc(100%-30rem)]">
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#85b0ff] to-[#1f1f1f] opacity-80 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="absolute left-[calc(50%+10rem)] top-[calc(50%-8rem)] transform-gpu overflow-hidden blur-3xl sm:left-[calc(50%+20rem)] sm:top-[calc(50%-20rem)]">
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#85b0ff] to-[#1f1f1f] opacity-80 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="absolute left-[calc(50%-8rem)] top-[calc(75%-6rem)] transform-gpu overflow-hidden blur-3xl sm:left-[calc(50%-15rem)] sm:top-[calc(75%-15rem)]">
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-tr from-[#85b0ff] to-[#1f1f1f] opacity-80 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="absolute left-2 top-[calc(75%-6rem)] transform-gpu overflow-hidden blur-3xl sm:left-1 sm:top-[calc(75%-15rem)]">
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-tr from-[#85b0ff] to-[#1f1f1f] opacity-80 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl -mt-[10vh] mx-auto text-center relative z-10">
        <p className="text-[#42c1ec] font-bold p-2">KERNEL</p>
        <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold mb-4">
          The kernel of film exploration
        </h1>
        <div className="flex justify-center items-center mb-6">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold py-4">
            {"'"}
            <TypeAnimation
              sequence={[
                "The Godfather",
                3000,
                "Batman",
                3000,
                "Shawshank Redemption",
                3000,
                "Schindler's List",
                3000,
                "Pulp Fiction",
                3000,
                "Fight Club",
                3000,
                "Split",
                3000,
                "Harry Potter and the Prisoner of Azkaban",
                3000,
                "Lord of the Rings",
                3000,
                "Matrix",
                3000,
                "Goodfellas",
                3000,
                "Puss and Boots",
                3000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />'
          </p>
        </div>
        <p className="md:text-xl text-sm font-bold text-gray-600 mb-8">
          Your go-to website for all things cinema
        </p>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
          <Link to="/about">
            <button className="bg-[#42c1ec] w-[200px] rounded-md font-semibold py-3 hover:scale-105 hover:text-white ease-in-out duration-300">
              About Us
            </button>
          </Link>
          <Link to="/extracurriculars">
            <button className="w-[250px] font-semibold py-3 hover:scale-105 ease-in-out duration-300">
              Explore Movies →
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`flex justify-center absolute bottom-40 lg:bottom-14 left-1/2 transform -translate-x-1/2 p-2 rounded-3xl bg-gray-900 hover:cursor-pointer ease-in-out duration-300 z-50 ${
          visible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={scrollDown}
      >
        <FaArrowDown color="white" />
      </div>
    </div>
  );
};

export default Hero;
