import React from 'react';
import PropTypes from 'prop-types';

TeamCharacter.propTypes = {

};

function TeamCharacter(props) {
    return (
        <div className="team-characters">
            <a className="characters-item c1" href="/champions/kalista">
                <div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Kalista.png"
                        alt="Kalista"
                    />
                </div>
                <div className="character-items">
                    <a className="characters-item" href="/item-builder">
                        <div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/items/BansheesClaw.png"
                                alt="Banshee's Claw"
                            />
                        </div>
                    </a>
                </div>
            </a>
            <a className="characters-item c2" href="/champions/brand">
                <div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Brand.png"
                        alt="Brand"
                    />
                </div>
                <div className="character-items">
                    <a className="characters-item" href="/item-builder">
                        <div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/items/BansheesClaw.png"
                                alt="Banshee's Claw"
                            /></div
                        ></a></div></a
            ><a className="characters-item c3" href="/champions/nunu"
            ><div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Nunu.png"
                        alt="Nunu"
                    />
                </div>
                <div className="character-items">
                    <a className="characters-item" href="/item-builder"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/items/SunfireCape.png"
                                alt="Sunfire Cape"
                            /></div
                        ></a></div></a
            ><a className="characters-item c4" href="/champions/ivern"
            ><div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Ivern.png"
                        alt="Ivern"
                    /></div></a
            ><a className="characters-item c4" href="/champions/fiddlesticks"
            ><div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png"
                        alt="Fiddlesticks"
                    /></div></a
            ><a className="characters-item c5" href="/champions/gwen"
            ><div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Gwen.png"
                        alt="Gwen"
                    /></div></a
            ><a className="characters-item c5" href="/champions/heimerdinger"
            ><div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png"
                        alt="Heimerdinger"
                    />
                </div>
                <div className="character-items">
                    <a className="characters-item" href="/item-builder"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/items/ArchangelsStaff.png"
                                alt="Archangel's Staff"
                            /></div></a
                    ><a className="characters-item" href="/item-builder"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/items/GuinsoosRageblade.png"
                                alt="Guinsoo's Rageblade"
                            /></div></a
                    ><a className="characters-item" href="/item-builder"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/items/SpearofShojin.png"
                                alt="Spear of Shojin"
                            /></div
                        ></a></div></a
            ><a className="characters-item c5" href="/champions/volibear"
            ><div className="character-wrapper">
                    <img
                        className="character-icon"
                        src="https://rerollcdn.com/characters/Skin/5.5/Volibear.png"
                        alt="Volibear"
                    /></div
                ></a>
        </div>

    );
}

export default TeamCharacter;