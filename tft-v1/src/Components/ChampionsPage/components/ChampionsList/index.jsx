import React, { } from 'react';
import CharacterItem from './CharacterItem'


function ChampionsList({ champList }) {
    return (
        <div className="characters-list">
            <div className="divider"></div>
            <ul className="filter-list"></ul>
            {champList.map(champ => (
                <CharacterItem key={champ.id} champ={champ} />
            ))}
        </div>
    );
}

export default ChampionsList;