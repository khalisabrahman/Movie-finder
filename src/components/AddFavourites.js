import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const AddFavourites = () => {
    return (
        <div>
            <span style={{marginRight: '4px', cursor: 'pointer'}}>Add to Favourites</span>
            <FontAwesomeIcon icon={faHeart} style={{cursor:'pointer'}}  />
        </div>
    )
}
