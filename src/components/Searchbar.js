import React from 'react';

export const Searchbar = ({ searchValue, setSearchValue }) => {

	return (
		<fieldset>
			<input
				placeholder='Type to search...'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			></input>
		</fieldset>
	);
};
