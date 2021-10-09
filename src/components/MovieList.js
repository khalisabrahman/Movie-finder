import React, { useContext } from 'react';
import { Movie } from './Movie';
import {MovieContext} from '../context/MovieState';



export const MovieList = () => {
	const { movies } = useContext(MovieContext);
	return (
		<>
			<div style={{display: 'flex', flexDirection: 'row'}}>
			{movies.map((movie) => {
				return <Movie style={{border: '2px solid red'}} movie={movie} ></Movie>;
			})}
			</div>
		</>
	);
};
