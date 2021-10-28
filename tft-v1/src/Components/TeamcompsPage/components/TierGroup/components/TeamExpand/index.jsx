import React from 'react';
import PropTypes from 'prop-types';

TeamExpand.propTypes = {

};

function TeamExpand({ divStyle2 }) {
    return (
        <div className="team-expanded">
            <div className="team-expanded-group mid">
                <div className="team-expanded-list">
                    <a className="characters-item c1" href="/champions/kalista"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/characters/Skin/5.5/Kalista.png"
                                alt="Kalista"
                            /></div></a
                    ><a className="characters-item c2" href="/champions/brand"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/characters/Skin/5.5/Brand.png"
                                alt="Brand"
                            /></div></a
                    ><a className="characters-item c2" href="/champions/sett"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/characters/Skin/5.5/Sett.png"
                                alt="Sett"
                            /></div></a
                    ><a className="characters-item c3" href="/champions/nunu"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/characters/Skin/5.5/Nunu.png"
                                alt="Nunu"
                            /></div></a
                    ><a className="characters-item c3" href="/champions/zyra"
                    ><div className="character-wrapper">
                            <img
                                className="character-icon"
                                src="https://rerollcdn.com/characters/Skin/5.5/Zyra.png"
                                alt="Zyra"
                            /></div
                        ></a>
                </div>
                <div className="team-expanded-title">Early Comp</div>
            </div>
            <div className="team-expanded-group builder">
                <div className="builder-bonus">
                    <div className="builder-bonus-group">
                        <div className="builder-bonus-list team-expanded-list">
                            <div className="builder-bonus-item active gold">
                                <div
                                    className="builder-bonus-icon"
                                    search="Caretaker"
                                    style={divStyle2}
                                >
                                    <img
                                        className="type-icon"
                                        src="https://rerollcdn.com/icons/caretaker.png"
                                        alt="Caretaker"
                                    />
                                    <div className="builder-bonus-counter"><span>1</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                </div>
                            </div>
                            <div className="builder-bonus-item active gold">
                                <div
                                    className="builder-bonus-icon"
                                    search="Inanimate"
                                    style={divStyle2}
                                >
                                    <img
                                        className="origin-icon"
                                        src="https://rerollcdn.com/icons/inanimate.png"
                                        alt="Inanimate"
                                    />
                                    <div className="builder-bonus-counter"><span>1</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                </div>
                            </div>
                            <div className="builder-bonus-item active silver">
                                <div
                                    className="builder-bonus-icon"
                                    search="Abomination"
                                    style={divStyle2}
                                >
                                    <img
                                        className="origin-icon"
                                        src="https://rerollcdn.com/icons/abomination.png"
                                        alt="Abomination"
                                    />
                                    <div className="builder-bonus-counter"><span>4</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                </div>
                            </div>
                            <div className="builder-bonus-item active silver">
                                <div
                                    className="builder-bonus-icon"
                                    search="Revenant"
                                    style={divStyle2}
                                >
                                    <img
                                        className="origin-icon"
                                        src="https://rerollcdn.com/icons/revenant.png"
                                        alt="Revenant"
                                    />
                                    <div className="builder-bonus-counter"><span>3</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                </div>
                            </div>
                            <div className="builder-bonus-item active bronze">
                                <div
                                    className="builder-bonus-icon"
                                    search="Mystic"
                                    style={divStyle2}
                                >
                                    <img
                                        className="type-icon"
                                        src="https://rerollcdn.com/icons/mystic.png"
                                        alt="Mystic"
                                    />
                                    <div className="builder-bonus-counter"><span>2</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                </div>
                            </div>
                            <div className="builder-bonus-item active bronze">
                                <div
                                    className="builder-bonus-icon"
                                    search="Brawler"
                                    style={divStyle2}
                                >
                                    <img
                                        className="type-icon"
                                        src="https://rerollcdn.com/icons/brawler.png"
                                        alt="Brawler"
                                    />
                                    <div className="builder-bonus-counter"><span>2</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                </div>
                            </div>
                            <div className="builder-bonus-item active bronze">
                                <div
                                    className="builder-bonus-icon"
                                    search="Renewer"
                                    style={divStyle2}
                                >
                                    <img
                                        className="type-icon"
                                        src="https://rerollcdn.com/icons/renewer.png"
                                        alt="Renewer"
                                    />
                                    <div className="builder-bonus-counter"><span>2</span></div>
                                </div>
                                <div className="builder-bonus-count">
                                    <div className="builder-bonus-count-bar active"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                    <div className="builder-bonus-count-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-expanded-title">Traits</div>
            </div>
            <div className="team-expanded-group items">
                <div className="team-expanded-list">
                    <div className="carousel-items">
                        <div className="carousel-component">
                            <a className="characters-item" href="/item-builder"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"
                                        src="https://rerollcdn.com/items/TearoftheGoddess.png"
                                        alt="Tear of the Goddess"
                                    /></div
                                ></a>
                            <div className="carousel-full">
                                <a className="characters-item" href="/item-builder"
                                ><div className="character-wrapper">
                                        <img
                                            className="character-icon"
                                            src="https://rerollcdn.com/items/ArchangelsStaff.png"
                                            alt="Archangel's Staff"
                                        /></div
                                    ></a>
                            </div>
                        </div>
                        <i className="arrow down"></i>
                        <div className="carousel-component">
                            <a className="characters-item" href="/item-builder"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"
                                        src="https://rerollcdn.com/items/NeedlesslyLargeRod.png"
                                        alt="Needlessly Large Rod"
                                    /></div
                                ></a>
                            <div className="carousel-full">
                                <a className="characters-item" href="/item-builder"
                                ><div className="character-wrapper">
                                        <img
                                            className="character-icon"
                                            src="https://rerollcdn.com/items/ArchangelsStaff.png"
                                            alt="Archangel's Staff"
                                        /></div
                                    ></a>
                            </div>
                        </div>
                        <i className="arrow down"></i>
                        <div className="carousel-component">
                            <a className="characters-item" href="/item-builder"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"
                                        src="https://rerollcdn.com/items/GiantsBelt.png"
                                        alt="Giant's Belt"
                                    /></div
                                ></a>
                            <div className="carousel-full">
                                <a className="characters-item" href="/item-builder"
                                ><div className="character-wrapper">
                                        <img
                                            className="character-icon"
                                            src="https://rerollcdn.com/items/SunfireCape.png"
                                            alt="Sunfire Cape"
                                        /></div
                                    ></a>
                            </div>
                        </div>
                        <i className="arrow down"></i>
                    </div>
                </div>
                <div className="team-expanded-title">Carousel</div>
            </div>
            <div className="team-expanded-group options">
                <div className="team-expanded-list">
                    <div className="team-option">
                        <div className="option-out"><div className="lv9">lvl 9</div></div>
                        <i className="arrow down"></i>
                        <div className="option-in">
                            <a className="characters-item c5" href="/champions/teemo"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"
                                        src="https://rerollcdn.com/characters/Skin/5.5/Teemo.png"
                                        alt="Teemo"
                                    /></div
                                ></a>
                        </div>
                    </div>
                    <div className="team-option">
                        <div className="option-out">
                            <a className="characters-item c5" href="/champions/heimerdinger"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"
                                        src="https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png"
                                        alt="Heimerdinger"
                                    /></div
                                ></a>
                        </div>
                        <i className="arrow down"></i>
                        <div className="option-in">
                            <a className="characters-item c3" href="/champions/zyra"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"
                                        src="https://rerollcdn.com/characters/Skin/5.5/Zyra.png"
                                        alt="Zyra"
                                    /></div
                                ></a>
                        </div>
                    </div>
                </div>
                <div className="team-expanded-title">Options</div>
            </div>
            <div className="team-expanded-group positioning">
                <div className="team-positioning">
                    <ul id="hexGrid" className="four-row">
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c5" href="/champions/volibear"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Volibear.png"
                                                alt="Volibear"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c3" href="/champions/nunu"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Nunu.png"
                                                alt="Nunu"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c4" href="/champions/fiddlesticks"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png"
                                                alt="Fiddlesticks"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c4" href="/champions/ivern"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Ivern.png"
                                                alt="Ivern"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c2" href="/champions/brand"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Brand.png"
                                                alt="Brand"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c5" href="/champions/gwen"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Gwen.png"
                                                alt="Gwen"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn"><div className="hexLink"></div></div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c1" href="/champions/kalista"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Kalista.png"
                                                alt="Kalista"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                        <li className="hex">
                            <div className="hexIn">
                                <div className="hexLink">
                                    <a className="characters-item c5" href="/champions/heimerdinger"
                                    ><div className="character-wrapper">
                                            <img
                                                className="character-icon"
                                                src="https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png"
                                                alt="Heimerdinger"
                                            /></div
                                        ></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="team-expanded-title">Positioning</div>
            </div>
        </div>
    );
}

export default TeamExpand;