import React from 'react';
import HeaderV2 from '../HeaderV2'
import TierGroup from './components/TierGroup';


TeamCompsPage.propTypes = {

};

function TeamCompsPage(props) {
    const divStyle = {
        'marginLeft': '20px'
    }
    const divStyle2 = {
        'cursor': 'pointer'
    }
    return (
        <React.Fragment>
            <HeaderV2 />
            <section className="tierlist teams characters-tier container">
                <div className="row">

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
                                    <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu">
                                        <button type="button" set="5.5" tabIndex="0" role="menuitem" className=" active dropdown-item">Set 5.5</button><button type="button" set="6" tabIndex="0" role="menuitem" className="dropdown-item">Set 6</button>
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
                        <TierGroup divStyle2={divStyle2} />
                        {/* Tier Group */}

                    </div >
                    {/* Layout lg-9 */}

                </div >
            </section >
        </React.Fragment >

    );
}

export default TeamCompsPage;