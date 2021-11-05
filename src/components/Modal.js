import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieState';

export const Modal = () => {
    const { setModal } = useContext(MovieContext);
    return (
        <div className='modal--background'>
            <h1>Modal</h1>
            <button onClick={() => setModal()}>X</button>
        </div>
    )
}
