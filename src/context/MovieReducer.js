import { ACTIONS } from '../types/types';

function MovieReducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_MOVIE:
			return  {
                ...state,
                movies: action.payload
            };
        case ACTIONS.SET_SEARCH:
            return {
                ...state,
                searchValue: action.payload
            }
			default:
				return state;
		
	}
}
export default MovieReducer;