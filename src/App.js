import { useState, useEffect } from 'react';
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Clock } from './components/Clock';
import { Clock2 } from './components/Clock2';
import { Searchbar } from './components/Searchbar';
import { AddFavourites } from './components/AddFavourites';




let omdbApi = process.env.REACT_APP_OMDB_API;

function App() {
	const [time, setTime] = useState('');
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMoviesRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${omdbApi}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		} else {
			return;
		}
	};

	const tick = () => {
		const time = new Date().toLocaleTimeString();
		setTime(time);
	};

  setInterval(tick, 1000);
  
	useEffect(() => {
		getMoviesRequest(searchValue);
		
	}, [searchValue]);

	return (
		<div>
			<h1>Movie Finder</h1>
			<Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
			<h2>{time}</h2>
			<Clock />
			<Clock2 time={time} />
			<MovieList movies={movies} />
			<Subtitle subtitle='Favourites' />
      <AddFavourites />
		</div>
	);
}

export default App;
