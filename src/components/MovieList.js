import React from 'react'

export const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map((movie, index) => {
                return (
                    <img src={movie.Poster} alt={movie.title}></img>
                )
            })}
        </div>
    )
}
