import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

PageHeader.propTypes = {

};
const StyleTag = styled.i`
margin-left: 20px,
    `


function PageHeader(props) {
    return (
        <div className="page-header">
            <h1>TFT Champions List
                <StyleTag className="set-btn dropdown">
                    <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-secondary">Set 5.5</button>
                    <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu">
                        <button type="button" set="5.5" tabIndex="0" role="menuitem" className=" active dropdown-item">
                            Set 5.5
                        </button>
                        <button type="button" set="6" tabIndex="0" role="menuitem" className="dropdown-item">Set 6
                        </button>
                    </div>
                </StyleTag>
            </h1 >
            <div className="searchbar">
                <img className="searchbar-icon" src="https://rerollcdn.com/search-icon.svg" alt="search icon" />
                <input className="searchbar-input" type="text" placeholder="Search by name, origin, or className..." defaultValue="" />
                <img className="searchbar-close" src="https://rerollcdn.com/close-icon.svg" alt="close icon" />
            </div>

        </div >
    );
}

export default PageHeader;