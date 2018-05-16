import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import {fetchGetAllArtists} from "../../store/actions/artists";
import Artist from "../../components/Artist/Artist";

class Artists extends Component {
    componentDidMount() {
        this.props.fetchGetAllArtists();
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    Artists
                </PageHeader>
                {this.props.artists.map(artist => (
                    <Artist
                        key={artist._id}
                        id={artist._id}
                        title={artist.title}
                        image={artist.image}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artists.artists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetAllArtists: () => dispatch(fetchGetAllArtists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);