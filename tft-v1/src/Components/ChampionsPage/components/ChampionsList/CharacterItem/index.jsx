import React from 'react';
import PropTypes from 'prop-types';
// import {CharacterItem} from './data'

CharacterItem.propTypes = {
    Item: PropTypes.object,
};

function CharacterItem({ Item }) {
    return (
        <div>
            <a href="#" className="characters-item">
                <div className="character-wrapper">
                    <img src={Item.img} alt="#" className="character-icon" />
                </div>
                <p className="character-name">{Item.name}</p>
            </a>
        </div>
    );
}

export default CharacterItem;