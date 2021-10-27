import React, { useContext } from 'react';
import { AddFavourites } from './AddFavourites';
import { Movie } from './Movie';
import { MovieContext } from '../context/MovieState';


export const MovieList = () => {
	const { movies, addFavoriteMovie } = useContext(MovieContext);
	
	
	
	return (
		<>
			<div className='container--pall movielist'>
				{movies.map((movie) => {
					return (
						<Movie
							movie={movie}
							favouriteComponent={AddFavourites}
							handleFavouriteBtn={addFavoriteMovie}
						></Movie>
					);
				})}
			</div>
		</>
	);
};
