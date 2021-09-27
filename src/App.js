import { useState, useEffect, useContext, useReducer } from 'react';
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Clock } from './components/Clock';
import { Clock2 } from './components/Clock2';
import { Searchbar } from './components/Searchbar';
import { AddFavourites } from './components/AddFavourites';
import { MovieProvider } from './context/MovieState';
import { MovieContext } from './context/MovieState';
import { Searchbar2 } from './components/Searchbar2';

let omdbApi = process.env.REACT_APP_OMDB_API;

function reducer(todos, action) {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)]
			default:
				return todos;
	}
	
}

function movieReducer(state, action) {
	switch (action.type) {
		// case ACTIONS.ADD_MOVIE_TEXT: 
		// 	return action.payload;
		case ACTIONS.ADD_MOVIE:
			return  action.payload;
			default:
				return state;
		
	}
}
const ACTIONS = {
	ADD_TODO: 'add-todo',
	ADD_MOVIE: 'add-movie'
}



function newTodo(name) {
	return { id: Date.now(), name: name, complete: false}
}

function App() {
	// const [todos, dispatch] = useReducer(reducer, []);
	const [movies, dispatch] = useReducer(movieReducer, [])
	const [name, setName] = useState('');
	

	// const context = useContext(MovieContext);
	// console.log(context.text);
	// console.log(context.movies);

	// const [time, setTime] = useState('');
	// const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');


	const getMoviesRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${omdbApi}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		console.log(responseJson);
		if (responseJson.Search) {
			// setMovies(responseJson.Search);
			dispatch({
				type: ACTIONS.ADD_MOVIE,
				payload: responseJson.Search
			})

			console.log(movies);
		} else {
			return;
		}
	};

	// const tick = () => {
	// 	const time = new Date().toLocaleTimeString();
	// 	setTime(time);
	// };

	// setInterval(tick, 1000);

	useEffect(() => {
		getMoviesRequest(searchValue);
	}, [searchValue]);

	

	
	

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	dispatch({
	// 		type: ACTIONS.ADD_TODO,
	// 		payload: { name: name }
	// 	});
	// 	setName('');
	// 	// console.log(todos);
	// }

	return (
		<MovieProvider>
			<h1>Movie Finder</h1>
			{/* <form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={e => setName(e.target.value)}/>
			</form> */}
			{/* <Searchbar2 /> */}
			<Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
			{/* <h2>{time}</h2>
			<Clock />
			<Clock2 time={time} /> */}
			<MovieList movies={movies} />
			<Subtitle subtitle='Favourites' />
			<AddFavourites />
		</MovieProvider>
	);
}

export default App;
