import React, { useReducer, createContext } from 'react';
import MovieReducer from './MovieReducer';

// Create initial state
const initialState = {
    text: '',
    movies: []
};
// Create context
export const MovieContext = createContext(initialState);

// Provider component
export const MovieProvider = (props) => {

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    const setSearchText = (text) => {
        dispatch({
            type: "SET_SEARCH",
            payload: text
        })
    }

    const setMovies = (movie) => {
        dispatch({
            type: "SET_MOVIES",
            payload: movie
        })
    }
    return (
        <MovieContext.Provider
        value={{
            movies: state.movies,
            text: state.text,
            setSearchText,
            setMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}


