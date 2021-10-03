import React, { useReducer, createContext } from 'react';
import { ACTIONS } from '../types/types';
import MovieReducer from './MovieReducer';

// Create initial state
const initialState = {
	searchValue: '',
	movies: [],
	favorites: []
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

		console.log(state.searchValue);
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
			payload: movie
		})
	}

	return (
		<MovieContext.Provider
			value={{
				searchValue: state.searchValue,
				movies: state.movies,
				favorites: state.favorites,
				setSearchValue,
				setMovies,
				addFavoriteMovie
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};
