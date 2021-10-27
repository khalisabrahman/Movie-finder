import { useContext } from 'react';
import { Navbar } from './Navbar';
import { MovieList } from './MovieList';
import { Subtitle } from './Subtitle';
import { Searchbar } from './Searchbar';
import { FavoritesList } from './FavoritesList';
import { Modal } from './Modal';
import { MovieContext } from '../context/MovieState';


import '../styles/style.scss';

export const Home = () => {
	const { modal } = useContext(MovieContext);
	return (
		<>
			<Navbar />
			<Searchbar />
			<MovieList />
			{/* <button onClick={() => 
				setModal()
			} >Open</button> */}
			{ modal && <Modal/>}
			<Subtitle subtitle='Favourites' />
			<FavoritesList />
		</>
	);
}

