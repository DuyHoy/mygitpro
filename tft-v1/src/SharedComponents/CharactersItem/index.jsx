import React from 'react';
import CharacterChildItem from '../CharacterChildItem';

CharactersItem.propTypes = {

};



function CharactersItem({ characterItem }) {

    return (
        <a className={`characters-item ` + (characterItem.cost ? 'c' + characterItem.cost : "")} href={'/champions/' + characterItem.name.toLowerCase()} >
            <div className="character-wrapper">
                <img
                    className="character-icon"
                    src={characterItem.img}
                    alt={characterItem.name}
                />
            </div>
            {
                characterItem.childCharacterList.length > 0 &&
                <div className="character-items">
                    {characterItem.childCharacterList.map(childCharacterItem => (

                        <CharacterChildItem childCharacterItem={childCharacterItem} />

                    ))}
                </div>

            }

        </a >
    );

}

export default CharactersItem;