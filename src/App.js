
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Searchbar } from './components/Searchbar';
import { Searchbar2 } from './components/Searchbar2';
import { AddFavourites } from './components/AddFavourites';
import { MovieProvider } from './context/MovieState';
import { ACTIONS } from './types/types';

// let omdbApi = process.env.REACT_APP_OMDB_API;


function App() {
	
	return (
		<MovieProvider>
			<h1>Movie Finder</h1>
			{/* <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} /> */}
			<Searchbar2 />
			<MovieList  /> {/*movies={movies} */}
			<Subtitle subtitle='Favourites' />
			<AddFavourites />
		</MovieProvider>
	);
}

export default App;
