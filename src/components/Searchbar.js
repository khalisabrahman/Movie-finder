import React from 'react';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieState';

let omdbApi = process.env.REACT_APP_OMDB_API;

export const Searchbar = () => {
	const { searchValue, setSearchValue, movies, setMovies, addFavoriteMovie } =
		useContext(MovieContext);

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

	useEffect(() => {
		getMoviesRequest(searchValue);
	}, [searchValue]);

	// IN WORK LOCAL STORAGE
	// useEffect(() => {
	// 	const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
	// 	addFavoriteMovie(movieFavourites);
	// },[])

	return (
		<>
			<div className='searchbar'>
				<h3 className='searchbar--title'>Search for any movie</h3>
				<fieldset className='searchbar--border'>
					<input
						placeholder='Type to search...'
						value={searchValue}
						onChange={setSearchValue}
						className='searchbar--inputField'
					></input>
				</fieldset>
			</div>
		</>
	);
};
