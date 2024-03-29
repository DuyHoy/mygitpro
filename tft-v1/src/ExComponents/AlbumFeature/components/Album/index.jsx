import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className="album">
            <div className="album-img">
                <img src={album.imgUrl} alt={album.name} />
            </div>
            <p className="album-title">{album.name}</p>
        </div>
    );
}

export default Album;