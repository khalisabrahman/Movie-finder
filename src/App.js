import { useState, useEffect } from 'react';
import { MovieList } from './components/MovieList';
require('dotenv').config();

let omdbId= process.env.REACT_APP_OMDB_ID;
let omdbApi = process.env.REACT_APP_OMDB_API;


function App() {

	const [movies, setMovies] = useState([]);

	const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=${omdbApi}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search)
   
  };

  useEffect(() => {
    getMoviesRequest();
  },[])

	return (
		<div>
			<h1>Movie Finder</h1>
			<MovieList movies={movies} />
		</div>
	);
}

export default App;
