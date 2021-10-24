import React from 'react';
import PropTypes from 'prop-types';
// import {CharacterItem} from './data'

CharacterItem.propTypes = {
    Item:PropTypes.object,
};

function CharacterItem({Item}) { 
    return ( 
        <div>
            <a href="#" class="characters-item">
                        <div class="character-wrapper">
                            <img src={Item.img} alt="#" class="character-icon"/>
                        </div>
                        <p class="character-name">{Item.name}</p>
                    </a>
        </div>
    );
}

export default CharacterItem;