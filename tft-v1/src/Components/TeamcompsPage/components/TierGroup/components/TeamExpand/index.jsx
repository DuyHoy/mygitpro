import React from 'react';
import CharactersItem from '../../../../../../SharedComponents/CharactersItem';
import TraitItem from '../../../../../../SharedComponents/TraitItem';
import CarouselItem from '../../../../../../SharedComponents/CarouselItem';

TeamExpand.propTypes = {

};

function TeamExpand({ divStyle2, characterExpandList, traitList, carouselList }) {
    return (
        <div className="team-expanded">
            <div className="team-expanded-group mid">
                <div className="team-expanded-list">
                    {characterExpandList.map(characterExpandItem => (
                        <CharactersItem characterItem={characterExpandItem} />
                    ))}

                </div>
                <div className="team-expanded-title">Early Comp</div>
            </div>
            <div className="team-expanded-group builder">
                <div className="builder-bonus">
                    <div className="builder-bonus-group">
                        <div className="builder-bonus-list team-expanded-list">

                            {traitList.map(traitItem => (
                                <TraitItem traitItem={traitItem} />
                            ))}

                        </div>
                    </div>
                </div>
                <div className="team-expanded-title">Traits</div>
            </div>
            <div className="team-expanded-group items">
                <div className="team-expanded-list">
                    <div class="carousel-items">
                        {carouselList.map(carouselItem => (
                            <React.Fragment>
                                <CarouselItem carouselItem={carouselItem} />
                                <i className="arrow down"></i>
                            </React.Fragment>
                        ))}
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