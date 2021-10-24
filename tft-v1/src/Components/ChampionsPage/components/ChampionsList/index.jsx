import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem' 
import {Item} from './data'


function ChampionsList() {  
    return ( 
        <div  class="characters-list">
            
            {Item.map(item => (
                <CharacterItem Item={item}/>
            ))}
        </div> 
    );
}

export default ChampionsList;