import React from 'react';


export const Movie = ({ movie, favouriteComponent, handleFavouriteBtn }) => {
	const FavouriteComponent = favouriteComponent;
	const handleFavourite = handleFavouriteBtn
	

	return (
		<div className='movie'>
			<img  src={movie.Poster} alt={movie.title} class='movie--image'></img>
			<div className='movie--favourite' onClick={() => handleFavourite(movie)}>
				<FavouriteComponent />
			</div>
			
		</div>
	);
};
