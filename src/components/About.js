import React from 'react';
import { Navbar } from './Navbar';

export const About = () => {
	return (
		<>
			<Navbar />
			<div className='container--pall about'>
				<h2 className='title'>About</h2>
				<p>
					A web app that uses React and the OMdb api to obtain movie information and images.
				</p>
                <p>Version 1.0.0</p>
			</div>
		</>
	);
};
