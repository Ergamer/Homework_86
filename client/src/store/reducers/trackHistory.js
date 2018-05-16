import {FETCH_TRACKS_HISTORY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    trackHistory: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRACKS_HISTORY_SUCCESS:
            return {...state, trackHistory: action.tracks};
        default:
            return state;
    }
};

export default reducer;