import React, { useReducer, createContext , useState} from 'react';
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
    const [test, setTest] = useState(false);

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    const setSearchText = (text) => {
        dispatch({
            type: "SET_SEARCH",
            payload: { text: state.text}
        })
    }

    const setMovies = (movie) => {
        dispatch({
            type: "SET_MOVIES",
            payload: { movie: state.movies }
        })
    }
    return (
        <MovieContext.Provider
        value={{
            movies: state.movies,
            text: state.text,
            test: test,
            setSearchText,
            setMovies,
            setTest
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}


