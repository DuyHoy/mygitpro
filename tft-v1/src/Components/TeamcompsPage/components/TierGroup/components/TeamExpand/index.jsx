import React from 'react';
import CharactersItem from '../../../../../../SharedComponents/CharactersItem';
import TraitItem from '../../../../../../SharedComponents/TraitItem';
import CarouselItem from '../../../../../../SharedComponents/CarouselItem';
import TeamName from '../TeamName';
import TeamPosition from '../../../../../../SharedComponents/TeamPosition';

TeamExpand.propTypes = {

};

function TeamExpand({ divStyle2, characterExpandList, traitList, carouselList }) {
    var N = 10;
    const BlankItem = {
        position: -1,
        cost: 0,
        img: "",
        name: "",
        childCharacterList: [],
    }
    const PositionList = [
        {
            position: 4,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Volibear.png",
            name: "Volibear",
            childCharacterList: [],
        },
        {
            position: 5,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Nunu.png",
            name: "Nunu",
            childCharacterList: [],
        },
        {
            position: 11,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png",
            name: "Fiddlesticks",
            childCharacterList: [],
        },
        {
            position: 12,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Ivern.png",
            name: "Ivern",
            childCharacterList: [],
        },
        {
            position: 19,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Brand.png",
            name: "Brand",
            childCharacterList: [],
        },
        {
            position: 20,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Gwen.png",
            name: "Gwen",
            childCharacterList: [],
        },
        {
            position: 26,
            cost: 1,
            img: "https://rerollcdn.com/characters/Skin/5.5/Kalista.png",
            name: "Kalista",
            childCharacterList: [],
        },
        {
            position: 27,
            cost: 2,
            img: "https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png",
            name: "Heimerdinger",
            childCharacterList: [],
        }

    ]
    // var arr = Array.apply(null, { length: 28 }).map((i, index) => (PositionList[index] != undefined) ? PositionList[index] : [])
    var arr = Array.apply(null, { length: 28 }).map((i, index) => { return BlankItem })
    PositionList.forEach(positionItem => {
        arr[positionItem.position] = positionItem
    });
    console.log(arr);
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
                <TeamPosition PositionList={arr} />
            </div>
        </div>
    );
}

export default TeamExpand;