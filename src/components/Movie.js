import React, { useContext } from 'react';
import { AddFavourites } from './AddFavourites';
import { MovieContext } from '../context/MovieState';

export const Movie = ({ movie }) => {
	const { addFavoriteMovie } = useContext(MovieContext)

	return (
		<div>
			<img src={movie.Poster} alt={movie.title}></img>
			<div onClick={() => addFavoriteMovie(movie)}>
				<AddFavourites />
			</div>
		</div>
	);
};
