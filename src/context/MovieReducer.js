import { ACTIONS } from '../types/types';

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
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			}
		case ACTIONS.ADD_FAVORITEID:
			Object.defineProperty(state.favoritesId, action.payload, {
				value: true
			})
			return {
				...state,
			}
		default:
			return state;
	}
}
export default MovieReducer;
