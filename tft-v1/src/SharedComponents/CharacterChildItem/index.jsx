import React from 'react';
import PropTypes from 'prop-types';

CharacterChildItem.propTypes = {

};

function CharacterChildItem({ childCharacterItem }) {
    return (
        < a className="characters-item" href="/item-builder" >
            <div className="character-wrapper">
                <img
                    className="character-icon"
                    src={childCharacterItem.img}
                    alt={childCharacterItem.name}
                />
            </div>
        </a >
    );
}

export default CharacterChildItem;