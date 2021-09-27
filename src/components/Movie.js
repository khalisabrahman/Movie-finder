import React from 'react';

export const Movie = ({ movie }) => {
	return (
		<div >
			<img src={movie.Poster} alt={movie.title}  style={{position: 'relative'}}></img>
			<h1>{movie.Title}</h1>
			<h2>{movie.Year}</h2>
			<div
				style={{
					position: 'absolute',
					bottom: 30,
					padding: '20px',
					background: 'rgba(0,0,0,0.8)',
					width: '100%',
                    color: 'white'
				}}
			>
				why is it not appearing?
			</div>
		</div>
	);
};
