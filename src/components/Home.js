import { Navbar } from './Navbar';
import { MovieList } from './MovieList';
import { Subtitle } from './Subtitle';
import { Searchbar } from './Searchbar';
import { MovieProvider } from '../context/MovieState';
import { FavoritesList } from './FavoritesList';


import '../styles/style.scss';

export const Home = () => {
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

