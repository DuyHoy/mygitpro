import React from 'react';
import CharacterItem from './CharacterItem'
import { Item } from './data'


function ChampionsList() {
    return (
        <div className="characters-list">

            {Item.map(item => (
                <CharacterItem key={item.id} Item={item} />
            ))}
        </div>
    );
}

export default ChampionsList;