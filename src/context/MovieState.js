import React, { useReducer, createContext } from 'react';
import { ACTIONS } from '../types/types';
import MovieReducer from './MovieReducer';

// Create initial state
const initialState = {
	searchValue: '',
	movies: [],
	favorites: [],
	favoritesId: [],
};
// Create context
export const MovieContext = createContext(initialState);

// Provider component
export const MovieProvider = (props) => {
	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const setSearchValue = (event) => {
		const { value } = event.target;
		dispatch({
			type: ACTIONS.SET_SEARCH,
			payload: value,
		});
	};

	const setMovies = (movies) => {
		dispatch({
			type: ACTIONS.ADD_MOVIE,
			payload: movies,
		});
	};

	const addFavoriteMovie = (movie) => {
		dispatch({
			type: ACTIONS.ADD_FAVORITE,
			payload: movie,
		});

		dispatch({
			type: ACTIONS.ADD_FAVORITEID,
			payload: movie.imdbID,
		});
	};

	const removeFavoriteMovie = (movie) => {
		dispatch({
			type: ACTIONS.DELETE_FAVORITEID,
			payload: movie.imdbID,
		});

		dispatch({
			type: ACTIONS.DELETE_FAVORITE,
			payload: movie.imdbID,
		});
	};

	return (
		<MovieContext.Provider
			value={{
				searchValue: state.searchValue,
				movies: state.movies,
				favorites: state.favorites,
				favoritesId: state.favoritesId,
				setSearchValue,
				setMovies,
				addFavoriteMovie,
				removeFavoriteMovie,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};
