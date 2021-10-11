import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieState';
import { Movie } from './Movie';
import { RemoveFavourites } from './RemoveFavourites';

export const FavoritesList = () => {
    const {favorites, removeFavoriteMovie} = useContext(MovieContext)
   

    return (
        <div className='container--pall movielist'>
            {favorites.map((favorite) => {
                return <Movie movie={favorite} favouriteComponent={RemoveFavourites} handleFavouriteBtn={removeFavoriteMovie}/>
            })}
        </div>
    )
}
