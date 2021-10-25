import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem'
import styled from 'styled-components'


FilterTitle.propTypes = {
    filter: PropTypes.object,
};

const StyleTag = styled.i`
    font-size: 20px;
    color: white;
    float: right;
    `



function FilterTitle({ filter }) {
    return (
        <React.Fragment>

            <li className="filter-title" >{filter.filterTitle}<StyleTag className="fas fa-chevron-down" id="arrow-cost" /></li>
            <div className="sub-filter" id="sub-cost">
                <ul>
                    <FilterItem item={filter.subFilter} />
                </ul>
            </div>
        </React.Fragment>

    );
}

export default FilterTitle;