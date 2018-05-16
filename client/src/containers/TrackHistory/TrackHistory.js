import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import TrackHistoryList from "../../components/TrackHistoryList/TrackHistoryList";
import {connect} from "react-redux";
import {fetchGetTrackHistory} from "../../store/actions/trackHistory";


class TrackHistory extends Component {

    componentDidMount() {
        if(this.props.user) {
            this.props.fetchGetTrackHistory(this.props.user.token);
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    <p>
                        Track History
                    </p>
                </PageHeader>
                {this.props.trackHistory.map(track => (
                    <TrackHistoryList
                        key={track._id}
                        id={track.track._id}
                        title={track.track.title}
                        dateTime={track.datetime}
                        artist={track.track.album.singer.title}
                    />
                ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        trackHistory: state.trackHistory.trackHistory,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetTrackHistory : (token) => dispatch(fetchGetTrackHistory(token)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);