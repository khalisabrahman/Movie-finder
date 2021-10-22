import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='flex flex-jc-sb'>
			<h1 className='container--pall logo'>Movie Finder</h1>

			<nav className='container--pall nav'>
				<Link className='nav' to='/about'>About</Link>
				<Link to='/'>Home</Link>
			</nav>
		</div>
	);
};
