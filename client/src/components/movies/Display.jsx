import React, { useState, useEffect } from 'react';
import { TbSettingsStar } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa6';
import { fetchMovieByTitle } from '../../utils/fetchMovieData';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookmarkButton from './BookmarkButton';
import SearchBar from './SearchBar'; // Assuming this path is correct
import SearchTypeToggle from './SearchTypeToggle';
import WatchedCheckButton from './WatchedCheckButton';
import { ImCheckmark } from "react-icons/im";


const Display = () => {
  const [searchQuery, setSearchQuery] = useState('batman');
  const [movieData, setMovieData] = useState(null);
  const [exactTitleSearch, setExactTitleSearch] = useState(false); // State to track search type

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByTitle(searchQuery, 1, exactTitleSearch); // Pass exactTitleSearch
      if (data) {
        setMovieData(data);
      }
    };

    getData();
  }, [searchQuery, exactTitleSearch]); // Include exactTitleSearch in dependency array

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearchToggle = () => {
    setExactTitleSearch(prevState => !prevState); // Toggle exactTitleSearch state
  };

  const formatReleaseDate = (releaseDate) => {
    if (releaseDate && releaseDate.month && releaseDate.day && releaseDate.year) {
      return `${releaseDate.month}/${releaseDate.day}/${releaseDate.year}`;
    }
    return 'Unknown';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto font-serif">
      <div className="rounded-lg shadow-[0_0_15px_-7px] shadow-black grid-rows-1">
        <div className="text-gray-900 text-xl md:text-2xl font-bold flex flex-row justify-between items-baseline p-4 w-full">
          <p>Settings</p>
          <TbSettingsStar className='mt-3' size="30px" />
        </div>
        <div className="flex p-4">
          <p className="text-gray-900 text-md md:text-lg font-thin mr-3">Exact Title Search:</p>
          <div className="mt-1">
            <SearchTypeToggle onClick={handleSearchToggle}/>
          </div>
        </div>
      </div>
      <div className="col-span-3 py -6 lg:py-0">
        <div className="flex gap-4 mb-4">
          <SearchBar onSearch={handleSearch} />
          <Link to="/movies/watched" className="flex w-[20%] md:w-[10%] bg-gray-900 text-[#28cc31] items-center justify-center h-20 rounded-xl border-4 border-gray-900 hover:border-[#28cc31] ease-in-out duration-300">
              <div>
                <ImCheckmark style={{ fontSize: '24px' }} />
              </div>
          </Link>
          <Link to="/movies/bookmarks" className="flex w-[20%] md:w-[10%] bg-gray-900 text-[#6e90cf] items-center justify-center h-20 rounded-xl border-4 border-gray-900 hover:border-[#6e90cf] ease-in-out duration-300">
              <div>
                <FaBookmark style={{ fontSize: '24px' }} />
              </div>
          </Link>
        </div>
        <div className="flex flex-col">
          {movieData && movieData.results ? (
            movieData.results.map((movie) => (
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

export default Display;
