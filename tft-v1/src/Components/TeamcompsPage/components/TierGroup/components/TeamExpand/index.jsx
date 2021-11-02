import React from 'react';
import CharactersItem from '../../../../../../SharedComponents/CharactersItem';
import TraitItem from '../../../../../../SharedComponents/TraitItem';
import CarouselItem from '../../../../../../SharedComponents/CarouselItem';
import TeamName from '../TeamName';
import TeamPosition from '../../../../../../SharedComponents/TeamPosition';

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
                            {/* <a className="characters-item c5" href="/champions/teemo"
                            ><div className="character-wrapper">
                                    <img
                                        className="character-icon"

                                    /></div
                                ></a> */}
                            <CharactersItem characterItem={{
                                img: "https://rerollcdn.com/characters/Skin/5.5/Teemo.png",
                                name: "Teemo",
                                childCharacterList: [],
                            }} />
                        </div>
                    </div>
                    <div className="team-option">
                        <div className="option-out">
                            <CharactersItem characterItem={{
                                img: "https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png",
                                name: "Heimerdinger",
                                childCharacterList: [],
                            }} />
                        </div>
                        <i className="arrow down"></i>
                        <div className="option-in">

                            <CharactersItem characterItem={{
                                img: "https://rerollcdn.com/characters/Skin/5.5/Zyra.png",
                                name: "Zyra",
                                childCharacterList: [],
                            }} />
                        </div>
                    </div>
                </div>
                <div className="team-expanded-title">Options</div>
            </div>
            <div className="team-expanded-group positioning">
                <TeamPosition />
            </div>
        </div>
    );
}

export default TeamExpand;