import React from 'react';

export const Movie = ({ movie }) => {
	return (
		<div >
			<img src={movie.Poster} alt={movie.title}></img>
			
		</div>
	);
};
