import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

PageHeader.propTypes = {

};
const StyleTag = styled.i`
margin-left: 20px,
    `


<<<<<<< HEAD
function PageHeader({filter,handleFilterChanges}) {

    function handleFilterChange(event){
        handleFilterChanges(event.target.value);
    }

=======
function PageHeader({ filter, handleFilterChanges }) {
    function handleFilterChange(event) {
        // var filterName = this.dropdown.value;
        // this.props.onSelectLanguage(lang);
        handleFilterChanges(event.target.value);
    }
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4
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
<<<<<<< HEAD
                <input className="searchbar-input" type="text" placeholder="Search by name, origin, or className..."
                    value={filter} onChange={handleFilterChange}
                defaultValue="" />
=======
                <input className="searchbar-input" type="text" placeholder="Search by name, origin, or className..." value={filter} onChange={handleFilterChange} />
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4
                <img className="searchbar-close" src="https://rerollcdn.com/close-icon.svg" alt="close icon" />
            </div>

        </div >
    );
}

export default PageHeader;