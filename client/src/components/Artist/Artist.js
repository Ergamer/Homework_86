import React from 'react';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import notFound from '../../assests/images/not-found.png';

import config from '../../config';

const Artist = props => {
    let image = notFound;

    if (props.image) {
        image = config.apiUrl + '/uploads/' + props.image;
    }

    return (
        <Panel>
            <Panel.Body>
                <Image
                    style={{width: '100px', marginRight: '10px'}}
                    src={image}
                    thumbnail
                />
                <Link to={'/artists/' + props.id}>
                    {props.title}
                </Link>
            </Panel.Body>
        </Panel>
    );
};

Artist.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default Artist;