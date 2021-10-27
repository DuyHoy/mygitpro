import React from 'react';
import PropTypes from 'prop-types';
// import {CharacterItem} from './data'

CharacterItem.propTypes = {
    champ: PropTypes.object,
};

function CharacterItem({ champ }) {
    return (
        <div>
            <a href="#" className="characters-item">
                <div className="character-wrapper">
                    <img src={champ.img} alt="#" className="character-icon" />
                </div>
                <p className="character-name">{champ.name}</p>
            </a>
        </div>
    );
}

export default CharacterItem;