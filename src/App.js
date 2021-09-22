import { useState, useEffect, useContext } from 'react';
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Clock } from './components/Clock';
import { Clock2 } from './components/Clock2';
import { Searchbar } from './components/Searchbar';
import { AddFavourites } from './components/AddFavourites';
import  {MovieProvider}  from './context/MovieState';
import { MovieContext } from './context/MovieState';
import {Searchbar2} from './components/Searchbar2';




let omdbApi = process.env.REACT_APP_OMDB_API;

function App() {
  const context = useContext(MovieContext);
  console.log(context.text);
  console.log(context.movies);

	// const [time, setTime] = useState('');
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

	// const tick = () => {
	// 	const time = new Date().toLocaleTimeString();
	// 	setTime(time);
	// };

  // setInterval(tick, 1000);

	useEffect(() => {
		getMoviesRequest(searchValue);
		
	}, [searchValue]);

	return (
		<MovieProvider>
			<h1>Movie Finder</h1>
      <Searchbar2 />
			<Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
			{/* <h2>{time}</h2>
			<Clock />
			<Clock2 time={time} /> */}
			<MovieList movies={movies} />
			<Subtitle subtitle='Favourites' />
      <AddFavourites />
		</MovieProvider>
	);
}

export default App;
