import { useContext } from 'react';
import { Navbar } from './Navbar';
import { MovieList } from './MovieList';
import { Subtitle } from './Subtitle';
import { Searchbar } from './Searchbar';
import { MovieProvider } from '../context/MovieState';
import { FavoritesList } from './FavoritesList';
import { Modal } from './Modal';
import { MovieContext } from '../context/MovieState';


import '../styles/style.scss';

export const Home = () => {
	const { modal, setModal } = useContext(MovieContext);
	console.log(typeof setModal)
	
	return (
		<MovieProvider>
			<Navbar />
			<Searchbar />
			<MovieList />
			<button onClick={() => 
				setModal()
			} >Open</button>
			{ modal && <Modal/>}
			<Subtitle subtitle='Favourites' />
			<FavoritesList />
		</MovieProvider>
	);
}

