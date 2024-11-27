// Import the axios library for making HTTP requests.
import axios from 'axios';


const fetchMovieByTitle = async (title, page = 1, exactTitleSearch = false) => {
  // Define the options object to adjust the HTTP request.
  const options = {
    method: 'GET',
    headers: {
      // API key for authentication and host with the RapidAPI service.
      'X-RapidAPI-Key': 'e69dff0f48msh64e2fe9daaae680p118537jsn1db170a008a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  // Check if the search should be for the exact title.
  if (exactTitleSearch) {
    options.url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${encodeURIComponent(title)}`;
    // Set the query parameters for the exact title search.
    options.params = {
      exact: 'true', 
      titleType: 'movie',
      page: page
    };
  } else {
    options.url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${encodeURIComponent(title)}`;
    // Set the query parameters for the keyword search.
    options.params = {
      titleType: 'movie', 
      page: page
    };
  }

  // Attempt to send the HTTP request and handle the response.
  try {
    // Make the HTTP request using the configured options.
    const response = await axios.request(options);
    // Return the data from the response.
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request.
    console.error(error);
  }
};


const fetchMovieById = async (imdbId) => {
  const stuff = {
    method: 'GET',
    url: `https://moviesdatabase.p.rapidapi.com/titles/${imdbId}`,
    headers: {
      'X-RapidAPI-Key': 'e69dff0f48msh64e2fe9daaae680p118537jsn1db170a008a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
    const returns = await axios.request(stuff);
    return returns.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchMovieByTitle, fetchMovieById };