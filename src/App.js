import { Navbar } from './components/Navbar';
import { MovieList } from './components/MovieList';
import { Subtitle } from './components/Subtitle';
import { Searchbar } from './components/Searchbar';
import { MovieProvider } from './context/MovieState';
import { FavoritesList } from './components/FavoritesList';

import './styles/style.scss';

function App() {
	return (
		<MovieProvider>
			<Navbar />
			<Searchbar />
			<MovieList />
			<Subtitle subtitle='Favourites' />
			<FavoritesList />
		</MovieProvider>
	);
}

export default App;
