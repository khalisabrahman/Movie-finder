import { ACTIONS } from '../types/types';

// const saveToLocalStorage = (items) => {
// 	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
// }

function MovieReducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_MOVIE:
			return {
				...state,
				movies: action.payload,
			};
		case ACTIONS.SET_SEARCH:
			return {
				...state,
				searchValue: action.payload,
			};
		case ACTIONS.ADD_FAVORITE:
			if (state.favoritesId.length > 0 && state.favoritesId.includes(action.payload.imdbID) === true) {
				console.log('Movie is already inside favourite list');
				
				return {
					...state
				}
			}

			// saveToLocalStorage([...state.favorites, action.payload]);
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
			
		case ACTIONS.ADD_FAVORITEID:
			if (state.favoritesId.includes(action.payload) === true) {
				console.log('MovieID is already inside favouriteID list');
				return {
					...state
				}
			}
			return {
				...state,
				favoritesId: [...state.favoritesId, action.payload]
			};
		case ACTIONS.DELETE_FAVORITE:
			let newFavoriteList = state.favorites.filter(
				(favorite) => favorite.imdbID !== action.payload
			);
			return {
				...state,
				favorites: newFavoriteList,
			};
		case ACTIONS.DELETE_FAVORITEID:
			let newFavoriteListId = state.favoritesId.filter(
				(favoriteId) => favoriteId !== action.payload
			);
			return {
				...state,
				favoritesId: newFavoriteListId
			};
		case ACTIONS.SET_MODAL:
			return {
				...state,
				modal: !state.modal
			}
		default:
			return state;
	}
}
export default MovieReducer;
