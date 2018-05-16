import React from 'react';
import {Panel} from "react-bootstrap";
import PropTypes from 'prop-types';

const TrackHistoryList = props => {


    return (
        <Panel>
            <Panel.Body id={props.id}>
                <h1>{props.title}</h1>
                <p>{props.artist}</p>
                <p>{props.dateTime}</p>
            </Panel.Body>
        </Panel>
    );
};

TrackHistoryList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired
};

export default TrackHistoryList;