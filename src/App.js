
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Searchbar } from './components/Searchbar';
import { AddFavourites } from './components/AddFavourites';
import { MovieProvider } from './context/MovieState';



function App() {
	return (
		<MovieProvider>
			<h1>Movie Finder</h1>
			<Searchbar />
			<MovieList  /> 
			<Subtitle subtitle='Favourites' />
			<AddFavourites />
		</MovieProvider>
	);
}

export default App;
