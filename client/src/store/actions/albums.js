import axios from '../../axios-api';
import {FETCH_ALBUMS_SUCCESS} from "./actionTypes";



export const fetchAlbumsSuccess = albums => {
    return {type: FETCH_ALBUMS_SUCCESS, albums}
};

export const fetchGetThisArtistAlbums = (id) => {
    return dispatch => {
        return axios.get('/albums?artist=' + id).then(
            response => dispatch(fetchAlbumsSuccess(response.data))
        );
    }
};
