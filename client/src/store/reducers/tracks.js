import {FETCH_TRACKS_SUCCESS} from "../actions/actionTypes";


const initialState = {
    tracks: []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRACKS_SUCCESS:
            console.log(action.tracks)
            return {...state, tracks: action.tracks};
        default:
            return state;
    }
};

export default reducer;