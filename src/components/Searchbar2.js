import React from 'react';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieState';

export const Searchbar2 = () => {
    const {searchValue, setSearchValue, movies, setMovies} = useContext(MovieContext);

    const getMoviesRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8c19eeed`;

		const response = await fetch(url);
		const responseJson = await response.json();

		console.log(responseJson);
		if (responseJson.Search) {
	
            setMovies(responseJson.Search)
		
			console.log(movies);
		} else {
			return;
		}
	};

    useEffect(() => {
		getMoviesRequest(searchValue);
	}, [searchValue]);


	return (
        <>
            <fieldset>
                <input
                    placeholder='Type to search...'
                    value={searchValue}
                    onChange={setSearchValue}
                ></input>
            </fieldset>
            
        </>
	);
};
