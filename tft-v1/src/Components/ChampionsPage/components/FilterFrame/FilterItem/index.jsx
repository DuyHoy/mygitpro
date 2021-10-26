import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {BsCircle} from 'react-icons/bs'

FilterItem.propTypes = {
    
};

// const styleTag=styled.i`
// float: right;
// font-size:small;
// `

const styleTag = {
    float: 'right',
    fontsize:'small'
  };

function FilterItem({item}) { 
    return (
        <React.Fragment>
            {
                item.map(item=>(
                    <li class="filter-item">
                        <img src={item.icon} alt={item.icon} class="filter-icon"/>
                        {item.filterItem} 
                        <BsCircle style={styleTag}/>
                    </li>
                ))
            }
       </React.Fragment>
    );
}

export default FilterItem;