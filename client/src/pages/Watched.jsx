import React, { useEffect, useState } from "react";
import {fetchMovieById } from "../utils/fetchMovieData";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BookmarkButton from '../components/movies/BookmarkButton';
import WatchedCheckButton from "../components/movies/WatchedCheckButton";
import { FaHome } from "react-icons/fa";


const Watched = () => {
  const [watchedMovies, setWatchedMovies] = useState(null);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem('watched')) || [];

    const fetchWatchedMovies = async () => {
      const movieDataPromises = watched.map(async (watch) => {
        const movieData = await fetchMovieById(watch);
        return movieData;
      });

      const movies = await Promise.all(movieDataPromises);
      setWatchedMovies(movies);
    };

    fetchWatchedMovies();
  }, []);


  const formatReleaseDate = (releaseDate) => {
    if (releaseDate && releaseDate.month && releaseDate.day && releaseDate.year) {
      return `${releaseDate.month}/${releaseDate.day}/${releaseDate.year}`;
    }
    return 'Unknown';
  };

  return (
    <div className="grid grid-cols-1 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto font-serif">
      <div className="col-span-3 py-6 lg:py-0">
      <div className="flex justify-between">
          <h1 className=" text-7xl font-extrabold">Watched Movies</h1>
          <div className="flex gap-4 mb-4">
            <Link to="/movies" className="flex w-[20%] md:w-[10%] bg-gray-900 text-[#ffffff] items-center justify-center h-20 rounded-xl border-4 p-10 border-gray-900 hover:border-[#ffffff] ease-in-out duration-300">
                <div>
                  <FaHome style={{ fontSize: '24px' }} />
                </div>
            </Link>
          </div>
        </div>  
        <div className="flex flex-col">
          {watchedMovies ? (
            watchedMovies.map((movie) => (
              <div
                key={movie.id}
                className="grid grid-cols-[0.5fr,2fr,1fr] shadow-[0_0_20px_-7px] shadow-black text-gray-900 justify-between rounded-lg my-3 relative overflow-hidden w-full"
              >
                <div className="p-4 items-center">
                  <img
                    src={movie.primaryImage?.url}
                    alt="Movie Poster"
                    className="w-full h-auto border-4 border-[#6e90cf]"
                  />
                </div>
                <div className="p-4 items-start">
                  <h1 className="text-3xl md:text-5xl w-[100%] my-3 mb-4">
                    {movie.titleText.text}
                  </h1>
                  <p className="italic text-md">
                    {movie.primaryImage?.caption?.plainText}
                  </p>
                  <p className="text-2xl md:text-xl font-thin my-2">
                    Release Date: {formatReleaseDate(movie.releaseDate)}
                  </p>
                  <a
                    href={`https://www.imdb.com/title/${movie.id}/`}
                    className="text-blue-500 hover:text-blue-700 underline text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit "{movie.titleText.text}" on IMDb
                  </a>
                </div>
                <div className="flex justify-evenly">
                 
                    <WatchedCheckButton title={movie.id} />
               
                  
                    <BookmarkButton title={movie.id} />
     

                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watched;
