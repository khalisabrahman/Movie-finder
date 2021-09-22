import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MovieState';

let omdbApi = process.env.REACT_APP_OMDB_API;

export const Searchbar2 = ({ searchValue, setSearchValue }) => {
	const context = useContext(MovieContext);
	console.log(context);
	const [movies, setMovies] = useState([]);

	const getMoviesRequest = async (text) => {
		const url = `http://www.omdbapi.com/?s=${context.text}&apikey=${omdbApi}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		} else {
			return;
		}
	};

	useEffect(() => {
		getMoviesRequest(context.text);
		
	}, [context.text]);


	return (
		<fieldset>
			<input
				placeholder='Type to search...'
				value={context.text}
				onChange={(event) => context.setSearchText(event.target.value)}
			></input>
		</fieldset>
	);
};
