import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieState';

export const Searchbar2 = () => {
    const {searchValue, setSearchValue} = useContext(MovieContext);

    
    console.log(searchValue);

	return (
		<fieldset>
			<input
				placeholder='Type to search...'
				value={searchValue}
				onChange={setSearchValue}
			></input>
		</fieldset>
	);
};
