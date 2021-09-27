import { useState, useEffect, useContext, useReducer } from 'react';
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Searchbar } from './components/Searchbar';
import { AddFavourites } from './components/AddFavourites';
import { MovieProvider } from './context/MovieState';

let omdbApi = process.env.REACT_APP_OMDB_API;

const ACTIONS = {
	ADD_MOVIE: 'add-movie'
}

function movieReducer(state, action) {
	switch (action.type) {
		// case ACTIONS.ADD_MOVIE_TEXT: 
		// 	return action.payload;
		case ACTIONS.ADD_MOVIE:
			return  action.payload;
			default:
				return state;
		
	}
}


function App() {
	const [movies, dispatch] = useReducer(movieReducer, [])
	const [searchValue, setSearchValue] = useState('');


	const getMoviesRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${omdbApi}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		console.log(responseJson);
		if (responseJson.Search) {
	
			dispatch({
				type: ACTIONS.ADD_MOVIE,
				payload: responseJson.Search
			})

			console.log(movies);
		} else {
			return;
		}
	};


	useEffect(() => {
		getMoviesRequest(searchValue);
	}, [searchValue]);

	
	return (
		<MovieProvider>
			<h1>Movie Finder</h1>
			<Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
			<MovieList movies={movies} />
			<Subtitle subtitle='Favourites' />
			<AddFavourites />
		</MovieProvider>
	);
}

export default App;
