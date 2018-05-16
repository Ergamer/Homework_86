import axios from '../../axios-api';
import {FETCH_TRACKS_SUCCESS} from "./actionTypes";



export const fetchTracksSuccess = tracks => {
    return {type: FETCH_TRACKS_SUCCESS, tracks}
};

export const fetchGetThisAlbumTracks = (id) => {
    return dispatch => {
        return axios.get('/tracks?album=' + id).then(
            response => dispatch(fetchTracksSuccess(response.data))
        );
    }
};


export const fetchPostThisTrackInfo = (id, token) => {
    return dispatch => {
        return axios.post('/trackHistory', {track: id}, {headers: {'Token': token}}).then(res => console.log(res.data))
    }
};

