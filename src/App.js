
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Searchbar } from './components/Searchbar';
import { AddFavourites } from './components/AddFavourites';
import { MovieProvider } from './context/MovieState';
import { FavoritesList } from './components/FavoritesList';
import { useContext } from 'react';
import { MovieContext } from './context/MovieState';


function App() {
	const { favorites } = useContext(MovieContext);
	return (
		<MovieProvider>
			<h1>Movie Finder</h1>
			<Searchbar />
			<MovieList  /> 
			<Subtitle subtitle='Favourites' />
			
			<FavoritesList />
		</MovieProvider>
	);
}

export default App;
