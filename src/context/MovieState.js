import React, { useReducer, createContext, useState } from 'react';
import { ACTIONS } from '../types/types'
import MovieReducer from './MovieReducer';

// Create initial state
const initialState = {
    searchValue: 'whyyyy',
    movies: []
};
// Create context
export const MovieContext = createContext(initialState);

// Provider component
export const MovieProvider = (props) => {
    const [state, dispatch] = useReducer(MovieReducer, initialState)
	// const [searchValue, setSearchValue] = useState('');

    const setSearchValue = (event) => {
        const { value } = event.target;
        dispatch({
            type: ACTIONS.SET_SEARCH,
            payload: value
        })

        console.log(state.searchValue);
    }

    const setMovies = (movies) => {
        dispatch({
            type: ACTIONS.ADD_MOVIE,
            payload: movies
        })
    }

    return (
        <MovieContext.Provider
        value={{
            searchValue: state.searchValue,
            movies: state.movies,
            setSearchValue,
            setMovies

            
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}


