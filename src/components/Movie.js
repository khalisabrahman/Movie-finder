import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieState';

export const Movie = ({ movie, favouriteComponent, handleFavouriteBtn }) => {
	const FavouriteComponent = favouriteComponent;
	const handleFavourite = handleFavouriteBtn;
	const { setModal } = useContext(MovieContext);

	return (
		<div >
			<div className='movie'  onClick={() => setModal()}>
				<img src={movie.Poster} alt={movie.title} class='movie--image'></img>
			</div>
			<div className='movie--favourite' onClick={() => handleFavourite(movie)}>
				<FavouriteComponent />
			</div>
		</div>
	);
};
