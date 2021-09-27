import React from 'react';
import { Movie } from './Movie';

export const MovieList = ({ movies }) => {
	return (
		<>
			{movies.map((movie) => {
				return <Movie movie={movie} ></Movie>;
			})}
		</>
	);
};
