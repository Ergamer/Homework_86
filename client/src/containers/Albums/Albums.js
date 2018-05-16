import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import Album from "../../components/Album/Album";
import {fetchGetThisArtistAlbums} from "../../store/actions/albums";

class Albums extends Component {
    componentDidMount() {
        this.props.fetchGetThisArtistAlbum(this.props.match.params.id);
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    Albums
                </PageHeader>
                {this.props.albums.map(album => (
                    <Album
                        key={album._id}
                        id={album._id}
                        singer={album.singer.title}
                        year={album.year}
                        title={album.title}
                        coverImage={album.coverImage}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetThisArtistAlbum: (id) => dispatch(fetchGetThisArtistAlbums(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);