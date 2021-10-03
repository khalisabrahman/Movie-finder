import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieState';
import { Movie } from './Movie';

export const FavoritesList = () => {
    const { favorites } = useContext(MovieContext)
    return (
        <div>
            {favorites.map((favorite) => {
                <Movie />
            })}
        </div>
    )
}
