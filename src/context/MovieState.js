import React, { useReducer } from 'react';
import MovieContext from './MovieContext';
import MovieReducer from './MovieReducer';

const MovieState = (props) => {
    const initialState = '';

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    const setSearchText = (text) => {
        dispatch({
            type: "SET_SEARCH",
            payload: text
        })
    }
    return (
        <MovieContext.Provider
        value={{
            movie: state,
            setSearchText
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;
