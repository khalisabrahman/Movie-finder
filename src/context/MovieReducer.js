const MovieReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH' :
            return action.payload.text;
            case 'SET_MOVIES':
                return [...state, action.payload.movie]
            default: 
            return state;
    }
}

export default MovieReducer;