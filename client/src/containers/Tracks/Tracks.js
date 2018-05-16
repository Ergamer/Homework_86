import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from "react-bootstrap";
import {fetchGetThisAlbumTracks, fetchPostThisTrackInfo} from "../../store/actions/tracks";

class Tracks extends Component{
    componentDidMount () {
    this.props.fetchGetThisAlbumTracks(this.props.match.params.id);
}
    render () {
        return (
            <Panel>
                <Panel.Body>
                    <h1>Tracks</h1>
                    {this.props.tracks.map(track => {
                        return <p onClick={this.props.users ? () => this.props.fetchPostThisTrackInfo(track._id, this.props.users.token) : null}
                                  key={track._id}>{track.number + '. ' + track.title + ' - ' + track.duration}</p>
                    })}
                </Panel.Body>
            </Panel>
        );
    }

}

const mapStateToProps = state => {
    return {
        tracks: state.tracks.tracks,
        users: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetThisAlbumTracks: (id) => dispatch(fetchGetThisAlbumTracks(id)),
        fetchPostThisTrackInfo : (id, token) => dispatch(fetchPostThisTrackInfo(id, token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);