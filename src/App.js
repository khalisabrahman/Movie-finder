import { useState, useEffect } from 'react';
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
require('dotenv').config();

let omdbId= process.env.REACT_APP_OMDB_ID;
let omdbApi = process.env.REACT_APP_OMDB_API;


function App() {
  const [time, setTime] = useState('');
	const [movies, setMovies] = useState([]);

	const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=${omdbApi}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search)
   
  };

  const tick = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }

  useEffect(() => {
    getMoviesRequest();
    setInterval(tick, 1000);
  },[])

	return (
		<div>
			<h1>Movie Finder</h1>
      <h2>{time}</h2>
			<MovieList movies={movies} />
      <Subtitle subtitle='Favourites'/>
      <Subtitle subtitle='Drama'/>
      <Subtitle subtitle='Action'/>
      <Subtitle subtitle='Comedy'/>
		</div>
	);
}

export default App;
