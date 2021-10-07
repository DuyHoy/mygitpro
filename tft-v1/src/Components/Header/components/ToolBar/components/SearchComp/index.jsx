import React from 'react';
import PropTypes from 'prop-types';

SearchComp.propTypes = {

};

function SearchComp(props) {
    return (
        <div className="searchbar player-search">
            <div className="dropdown">
                <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-secondary">NA</button>
                <div role="menu" aria-hidden="true" className="dropdown-menu">
                    <button type="button" role="menuitem" className="dropdown-item">BR</button>
                    <button type="button" role="menuitem" className="dropdown-item">EUNE</button>
                    <button type="button" role="menuitem" className="dropdown-item">EUW</button>
                    <button type="button" role="menuitem" className="dropdown-item">JP</button>
                    <button type="button" role="menuitem" className="dropdown-item">KR</button>
                    <button type="button" role="menuitem" className="dropdown-item">LAN</button>
                    <button type="button" role="menuitem" className="dropdown-item">LAS</button>
                    <button type="button" role="menuitem" className=" active dropdown-item">NA</button>
                    <button type="button" role="menuitem" className="dropdown-item">OCE</button>
                    <button type="button" role="menuitem" className="dropdown-item">TR</button>
                    <button type="button" role="menuitem" className="dropdown-item">RU</button></div>
            </div>
            <input className="searchbar-input" type="text" placeholder="Search Summoner Name..." />
            <img className="searchbar-icon" src="https://rerollcdn.com/search-icon.svg" alt="search icon" />
        </div>
    );
}

export default SearchComp;