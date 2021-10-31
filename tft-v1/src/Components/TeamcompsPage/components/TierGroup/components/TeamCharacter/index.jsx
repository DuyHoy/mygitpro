import React from 'react';
import PropTypes from 'prop-types';
import CharactersItem from '../../../../../../SharedComponents/CharactersItem';

TeamCharacter.propTypes = {

};

function TeamCharacter({ characterList }) {
    return (
        <div className="team-characters">
            {characterList.map(characterItem => (
                <CharactersItem characterItem={characterItem} />
            ))
            }
        </div>

    );
}

export default TeamCharacter;