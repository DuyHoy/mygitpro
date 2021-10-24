import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

FilterItem.propTypes = {
    
};

const styleTag=styled.i`
float: right;
font-size:small;
`


function FilterItem({item}) {
    console.log(item)
    return (
        <React.Fragment>
            {
                item.map(item=>(
                    <li class="filter-item">
                        <img src={item.icon} alt={item.icon} class="filter-icon"/>
                        {item.filterItem}<styleTag class="far fa-circle"/></li>
                ))
            }
       </React.Fragment>
    );
}

export default FilterItem;