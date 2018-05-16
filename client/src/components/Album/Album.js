import React from 'react';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import config from '../../config';
import notFound from '../../assests/images/not-found.png';

const Album = props => {
    let coverImage = notFound;

    if (props.image) {
        coverImage = config.apiUrl + '/uploads/' + props.coverImage;
    }

    return (
        <Panel>
            <Panel.Body>
                <Image
                    style={{width: '100px', marginRight: '10px'}}
                    src={coverImage}
                    thumbnail
                />
                <Link to={'/albums/' + props.id}>
                    {props.title}
                </Link>
                {props.year}
            </Panel.Body>
        </Panel>
    );
};

Album.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    coverImage: PropTypes.string,
    year: PropTypes.string
};

export default Album;