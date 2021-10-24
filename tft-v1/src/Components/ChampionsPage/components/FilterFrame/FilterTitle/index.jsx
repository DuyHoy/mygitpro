import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem'
import styled from 'styled-components'


 FilterTitle.propTypes = {
    filter:PropTypes.object,
};

const styleTag=styled.i`
    font-size: 20px;
    color: white;
    float: right;
    `
 
    

function FilterTitle({filter}) { 
    return (
        <React.Fragment> 
 
        <li class="filter-title" >{filter.filterTitle}<styleTag class="fas fa-chevron-down" id="arrow-cost"/></li>
                <div class="sub-filter" id="sub-cost">
                    <ul>
                    <FilterItem item={filter.subFilter}/>
                    </ul>
                </div>
        </React.Fragment>
        
    );
}

export default FilterTitle;