import axios from '../../axios-api';
import {FETCH_TRACKS_HISTORY_SUCCESS} from "./actionTypes";



export const fetchTracksHistorySuccess = (tracks) => {
    return {type: FETCH_TRACKS_HISTORY_SUCCESS, tracks}
};

export const fetchGetTrackHistory = (token) => {
    return dispatch => {
        return axios.get('/trackHistory', {headers: {"Token": token}}).then(
            response => dispatch(fetchTracksHistorySuccess(response.data))
        );
    }
};