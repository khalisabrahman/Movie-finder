import React, { useContext } from 'react';
import { Movie } from './Movie';
import {MovieContext} from '../context/MovieState';

export const MovieList = () => {
	const { movies } = useContext(MovieContext);
	return (
		<>
			{movies.map((movie) => {
				return <Movie movie={movie} ></Movie>;
			})}
		</>
	);
};
