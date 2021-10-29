import React from 'react';
import HeaderV2 from '../HeaderV2'
import FilterFrame from '../ChampionsPage/components/FilterFrame'


TeamCompsPage.propTypes = {

};

function TeamCompsPage(props) {
    const divStyle = {
        'margin-left': '20px'
    }
    const divStyle2 = {
        'cursor': 'pointer'
    }
    const Filter = [
        {
            id: 1,
            filterTitle: 'Set 5.5',
            subFilter: [

            ]
        },
        {
            id: 2,
            filterTitle: 'Set 6',
            subFilter: [

            ]
        }
    ]
    return (
        <React.Fragment>
            <HeaderV2 />
            <section className="tierlist teams characters-tier container">
                <div className="row">
                    {/* <FilterFrame filterdata={Filter} /> */}
                    {/* Layout lg-3 */}
                    <div className="col-12 col-lg-3 sidebar">
                        <div className="filters-header">
                            <h2>Filters</h2>
                        </div>
                        <div className="divider"></div>
                        <ul className="sidenav">
                            <div className="sidenav-link active">
                                <li set="5.5" className="sidenav-title">Set 5.5</li>
                            </div>
                            <div className="sidenav-link">
                                <li set="6" className="sidenav-title">Set 6</li>
                            </div>
                        </ul>
                        <div className="divider d-none d-lg-block"></div>
                        <div className="disclaimer d-none d-lg-block">
                            <p>The order inside each tier does not matter.</p>
                        </div>
                        <div className="divider d-lg-none"></div>
                    </div>
                    {/* Layout lg-3 */}

                    {/* Layout lg-9 */}
                    <div className="col-12 col-lg-9 main">

                        {/* <PageHeader /> */}
                        <div className="page-header">
                            <h1>TFT Meta Team Comps Tier List
                                <div style={divStyle} className="set-btn dropdown">
                                    <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-secondary">Set 5.5</button>
                                    <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu">
                                        <button type="button" set="5.5" tabindex="0" role="menuitem" className=" active dropdown-item">Set 5.5</button><button type="button" set="6" tabindex="0" role="menuitem" className="dropdown-item">Set 6</button>
                                    </div>
                                </div>
                            </h1>
                            <div className="searchbar">
                                <img className="searchbar-icon" src="https://rerollcdn.com/search-icon.svg" alt="search icon" />
                                <input className="searchbar-input" type="text" placeholder="Search by team name..." value="" />
                                <img className="searchbar-close" src="https://rerollcdn.com/close-icon.svg" alt="close icon" />
                            </div>
                        </div>
                        {/* <PageHeader /> */}

                        <div className="divider mb-20"></div>

                        {/* Update */}
                        <div className="update">
                            <div className="update-patch">Patch 11.21</div>
                            <div className="legend">
                                <div className="legend-item">
                                    <div className="legend-up">▴</div>Tier Up
                                </div>
                                <div className="legend-item">
                                    <div className="legend-down">▾</div>Tier Down
                                </div>
                                <div className="legend-item">
                                    <div className="legend-new">N</div>New
                                </div>
                            </div>
                        </div>
                        {/* Update */}

                        {/* Tier Group */}
                        <div className="tier-group">
                            <div className="characters-list">
                                <div className="team-portrait up">
                                    <div className="team-name">
                                        <div className="team-rank tone">S</div>
                                        <div className="team-name-elipsis">
                                            Abomination Revenants
                                            <div className="team-playstyle">Standard</div>
                                        </div>
                                    </div>
                                    <div className="team-characters">
                                        <a className="characters-item c1" href="/champions/kalista">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Kalista.png"
                                                    alt="Kalista"
                                                />
                                            </div>
                                        </a>
                                        <div className="character-items">
                                            <a className="characters-item c1" href="/champions/kalista"> </a
                                            ><a className="characters-item" href="/item-builder">
                                                <div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/BansheesClaw.png"
                                                        alt="Banshee's Claw"
                                                    />
                                                </div>
                                            </a>
                                        </div>

                                        <a className="characters-item c2" href="/champions/brand">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Brand.png"
                                                    alt="Brand"
                                                />
                                            </div>
                                        </a>
                                        <div className="character-items">
                                            <a className="characters-item c2" href="/champions/brand"> </a
                                            ><a className="characters-item" href="/item-builder">
                                                <div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/BansheesClaw.png"
                                                        alt="Banshee's Claw"
                                                    />
                                                </div>
                                            </a>
                                        </div>

                                        <a className="characters-item c3" href="/champions/nunu">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Nunu.png"
                                                    alt="Nunu"
                                                />
                                            </div>
                                        </a>
                                        <div className="character-items">
                                            <a className="characters-item c3" href="/champions/nunu"> </a
                                            ><a className="characters-item" href="/item-builder">
                                                <div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/SunfireCape.png"
                                                        alt="Sunfire Cape"
                                                    />
                                                </div>
                                            </a>
                                        </div>

                                        <a className="characters-item c4" href="/champions/ivern">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Ivern.png"
                                                    alt="Ivern"
                                                />
                                            </div>
                                        </a>
                                        <a className="characters-item c4" href="/champions/fiddlesticks">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png"
                                                    alt="Fiddlesticks"
                                                />
                                            </div>
                                        </a>
                                        <a className="characters-item c5" href="/champions/gwen">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Gwen.png"
                                                    alt="Gwen"
                                                />
                                            </div>
                                        </a>
                                        <a className="characters-item c5" href="/champions/heimerdinger">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png"
                                                    alt="Heimerdinger"
                                                />
                                            </div>
                                        </a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/heimerdinger"> </a
                                            ><a className="characters-item" href="/item-builder">
                                                <div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/ArchangelsStaff.png"
                                                        alt="Archangel's Staff"
                                                    />
                                                </div>
                                            </a>
                                            <a className="characters-item" href="/item-builder">
                                                <div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/GuinsoosRageblade.png"
                                                        alt="Guinsoo's Rageblade"
                                                    />
                                                </div>
                                            </a>
                                            <a className="characters-item" href="/item-builder">
                                                <div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/SpearofShojin.png"
                                                        alt="Spear of Shojin"
                                                    />
                                                </div>
                                            </a>
                                        </div>

                                        <a className="characters-item c5" href="/champions/volibear">
                                            <div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Volibear.png"
                                                    alt="Volibear"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="team-more">
                                        <i className="arrow down"> </i>
                                    </div>
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

                                </div>
                                <div className="team-portrait up">
                                    <div className="team-name">
                                        <div className="team-rank tone">S</div>
                                        <div className="team-name-elipsis">
                                            Redeemed Knights
                                            <div className="team-playstyle">Fast 8</div>
                                        </div>
                                    </div>
                                    <div className="team-characters">
                                        <a className="characters-item c1" href="/champions/leona"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Leona.png"
                                                    alt="Leona"
                                                /></div></a
                                        ><a className="characters-item c1" href="/champions/poppy"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Poppy.png"
                                                    alt="Poppy"
                                                /></div></a
                                        ><a className="characters-item c2" href="/champions/nautilus"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Nautilus.png"
                                                    alt="Nautilus"
                                                /></div></a
                                        ><a className="characters-item c2" href="/champions/thresh"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Thresh.png"
                                                    alt="Thresh"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/galio"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Galio.png"
                                                    alt="Galio"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c4" href="/champions/galio"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/GargoyleStoneplate.png"
                                                        alt="Gargoyle Stoneplate"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/SunfireCape.png"
                                                        alt="Sunfire Cape"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/WarmogsArmor.png"
                                                        alt="Warmog's Armor"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c4" href="/champions/rell"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Rell.png"
                                                    alt="Rell"
                                                /></div></a
                                        ><a className="characters-item c5" href="/champions/garen"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Garen.png"
                                                    alt="Garen"
                                                /></div></a
                                        ><a className="characters-item c5" href="/champions/kayle"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Kayle.png"
                                                    alt="Kayle"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/kayle"></a
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
                                                        src="https://rerollcdn.com/items/GuardianAngel.png"
                                                        alt="Guardian Angel"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/HandofJustice.png"
                                                        alt="Hand of Justice"
                                                    /></div
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="team-more"><i className="arrow down"></i></div>
                                </div>
                                <div className="team-portrait">
                                    <div className="team-name">
                                        <div className="team-rank tone">S</div>
                                        <div className="team-name-elipsis">
                                            Forgotten Cavaliers
                                            <div className="team-playstyle">Slow Roll</div>
                                        </div>
                                    </div>
                                    <div className="team-characters">
                                        <a className="characters-item c2 l3" href="/champions/hecarim"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Hecarim.png"
                                                    alt="Hecarim"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c2 l3" href="/champions/hecarim"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/BrambleVest.png"
                                                        alt="Bramble Vest"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/SunfireCape.png"
                                                        alt="Sunfire Cape"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/WarmogsArmor.png"
                                                        alt="Warmog's Armor"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c2" href="/champions/nautilus"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Nautilus.png"
                                                    alt="Nautilus"
                                                /></div></a
                                        ><a className="characters-item c2" href="/champions/sejuani"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Sejuani.png"
                                                    alt="Sejuani"
                                                /></div></a
                                        ><a className="characters-item c2" href="/champions/thresh"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Thresh.png"
                                                    alt="Thresh"
                                                /></div></a
                                        ><a className="characters-item c3 l3" href="/champions/miss_fortune"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/MissFortune.png"
                                                    alt="Miss Fortune"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c3 l3" href="/champions/miss_fortune"></a
                                            ><a className="characters-item" href="/item-builder"
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
                                                        src="https://rerollcdn.com/items/JeweledGauntlet.png"
                                                        alt="Jeweled Gauntlet"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/SpearofShojin.png"
                                                        alt="Spear of Shojin"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c4" href="/champions/draven"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Draven.png"
                                                    alt="Draven"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/rell"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Rell.png"
                                                    alt="Rell"
                                                /></div
                                            ></a>
                                    </div>
                                    <div className="team-more"><i className="arrow down"></i></div>
                                </div>
                                <div className="team-portrait">
                                    <div className="team-name">
                                        <div className="team-rank tone">S</div>
                                        <div className="team-name-elipsis">
                                            Hellion Cannoneers
                                            <div className="team-playstyle">Slow Roll</div>
                                        </div>
                                    </div>
                                    <div className="team-characters">
                                        <a className="characters-item c1" href="/champions/poppy"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Poppy.png"
                                                    alt="Poppy"
                                                /></div></a
                                        ><a className="characters-item c1" href="/champions/senna"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Senna.png"
                                                    alt="Senna"
                                                /></div></a
                                        ><a className="characters-item c2 l3" href="/champions/kennen"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Kennen.png"
                                                    alt="Kennen"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c2 l3" href="/champions/kennen"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/FrozenHeart.png"
                                                        alt="Frozen Heart"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/GuardianAngel.png"
                                                        alt="Guardian Angel"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/Morellonomicon.png"
                                                        alt="Morellonomicon"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c2 l3" href="/champions/tristana"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Tristana.png"
                                                    alt="Tristana"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c2 l3" href="/champions/tristana"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/Bloodthirster.png"
                                                        alt="Bloodthirster"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/LastWhisper.png"
                                                        alt="Last Whisper"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/RunaansHurricane.png"
                                                        alt="Runaan's Hurricane"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c3" href="/champions/lulu"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Lulu.png"
                                                    alt="Lulu"
                                                /></div></a
                                        ><a className="characters-item c3" href="/champions/miss_fortune"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/MissFortune.png"
                                                    alt="Miss Fortune"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/galio"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Galio.png"
                                                    alt="Galio"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/lucian"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Lucian.png"
                                                    alt="Lucian"
                                                /></div
                                            ></a>
                                    </div>
                                    <div className="team-more"><i className="arrow down"></i></div>
                                </div>
                                <div className="team-portrait">
                                    <div className="team-name">
                                        <div className="team-rank tone">S</div>
                                        <div className="team-name-elipsis">
                                            Revenant Invokers
                                            <div className="team-playstyle">Fast 8</div>
                                        </div>
                                    </div>
                                    <div className="team-characters">
                                        <a className="characters-item c2" href="/champions/syndra"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Syndra.png"
                                                    alt="Syndra"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/ivern"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Ivern.png"
                                                    alt="Ivern"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/karma"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Karma.png"
                                                    alt="Karma"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/rell"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Rell.png"
                                                    alt="Rell"
                                                /></div></a
                                        ><a className="characters-item c5" href="/champions/garen"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Garen.png"
                                                    alt="Garen"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/garen"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/IonicSpark.png"
                                                        alt="Ionic Spark"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/WarmogsArmor.png"
                                                        alt="Warmog's Armor"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c5" href="/champions/heimerdinger"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png"
                                                    alt="Heimerdinger"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/heimerdinger"></a
                                            ><a className="characters-item" href="/item-builder"
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
                                                ></a>
                                        </div>
                                        <a className="characters-item c5" href="/champions/teemo"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Teemo.png"
                                                    alt="Teemo"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/teemo"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/ThiefsGloves.png"
                                                        alt="Thief's Gloves"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c5" href="/champions/volibear"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Volibear.png"
                                                    alt="Volibear"
                                                /></div
                                            ></a>
                                    </div>
                                    <div className="team-more"><i className="arrow down"></i></div>
                                </div>
                                <div className="team-portrait">
                                    <div className="team-name">
                                        <div className="team-rank tone">S</div>
                                        <div className="team-name-elipsis">
                                            Revenant Mystics
                                            <div className="team-playstyle">Fast 8</div>
                                        </div>
                                    </div>
                                    <div className="team-characters">
                                        <a className="characters-item c3" href="/champions/lulu"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Lulu.png"
                                                    alt="Lulu"
                                                /></div></a
                                        ><a className="characters-item c4" href="/champions/fiddlesticks"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png"
                                                    alt="Fiddlesticks"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c4" href="/champions/fiddlesticks"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/Morellonomicon.png"
                                                        alt="Morellonomicon"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c4" href="/champions/ivern"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Ivern.png"
                                                    alt="Ivern"
                                                /></div></a
                                        ><a className="characters-item c5" href="/champions/garen"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Garen.png"
                                                    alt="Garen"
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/garen"></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/IonicSpark.png"
                                                        alt="Ionic Spark"
                                                    /></div></a
                                            ><a className="characters-item" href="/item-builder"
                                            ><div className="character-wrapper">
                                                    <img
                                                        className="character-icon"
                                                        src="https://rerollcdn.com/items/WarmogsArmor.png"
                                                        alt="Warmog's Armor"
                                                    /></div
                                                ></a>
                                        </div>
                                        <a className="characters-item c5" href="/champions/gwen"
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
                                                /></div
                                            ></a>
                                        <div className="character-items">
                                            <a className="characters-item c5" href="/champions/heimerdinger"></a
                                            ><a className="characters-item" href="/item-builder"
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
                                                ></a>
                                        </div>
                                        <a className="characters-item c5" href="/champions/teemo"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Teemo.png"
                                                    alt="Teemo"
                                                /></div></a
                                        ><a className="characters-item c5" href="/champions/volibear"
                                        ><div className="character-wrapper">
                                                <img
                                                    className="character-icon"
                                                    src="https://rerollcdn.com/characters/Skin/5.5/Volibear.png"
                                                    alt="Volibear"
                                                /></div
                                            ></a>
                                    </div>
                                    <div className="team-more"><i className="arrow down"></i></div>
                                </div>
                            </div>
                        </div>

                        {/* Tier Group */}

                    </div >
                    {/* Layout lg-9 */}

                </div >
            </section >
        </React.Fragment >

    );
}

export default TeamCompsPage;