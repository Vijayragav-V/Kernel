import React, { useEffect, useState } from 'react';
import { ImCheckmark } from "react-icons/im";

const WatchedCheckButton = ({ title }) => {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    const storedWatched = JSON.parse(localStorage.getItem('watched')) || [];
    setIsWatched(storedWatched.includes(title));
  }, [title]);

  const handleWatchedToggle = () => {
    const storedWatched = JSON.parse(localStorage.getItem('watched')) || [];
    let updatedWatchedMovies;

    if (isWatched) {
      // Remove the bookmark
      updatedWatchedMovies = storedWatched.filter((item) => item !== title);
    } else {
      // Add the bookmark
      updatedWatchedMovies = [...storedWatched, title];
    }

    localStorage.setItem('watched', JSON.stringify(updatedWatchedMovies));
    setIsWatched(!isWatched);
  };

  return (
    <div className="flex justify-center items-center h-full scale-125">
      <button onClick={handleWatchedToggle} className={`watched-button ${isWatched ? 'watched' : ''}`}>
        <div className=" text-[#28cc31] rounded-full ease-in-out duration-300 p-0 hover:scale-125">
          {isWatched ? (
            <ImCheckmark color="#28cc31" style={{ fontSize: "24px" }} />
          ) : (
            <ImCheckmark color="#000000" style={{ fontSize: "24px" }} />
          )}
        </div> 
      </button>
    </div>
  );
};

export default WatchedCheckButton;