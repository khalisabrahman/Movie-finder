import React, { useContext } from 'react';
import { AddFavourites } from './AddFavourites';
import { MovieContext } from '../context/MovieState';

export const Movie = ({ movie, favouriteComponent, handleFavouriteBtn }) => {
	const FavouriteComponent = favouriteComponent;
	const handleFavourite = handleFavouriteBtn
	// const { addFavoriteMovie , removeFavoriteMovie} = useContext(MovieContext)

	return (
		<div >
			<img src={movie.Poster} alt={movie.title}></img>
			<div onClick={() => handleFavourite(movie)}>
				<FavouriteComponent />
			</div>
			{/* <div onClick={() => removeFavoriteMovie(movie)}>
				Remove favorite
			</div> */}
		</div>
	);
};
