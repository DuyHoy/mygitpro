import React,{ useState }  from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem'
import styled from 'styled-components'
import {IoIosArrowDown} from 'react-icons/io' 


 FilterTitle.propTypes = {
    filter:PropTypes.object,
};

// const styleTag=styled.i`
//     font-size: 20px;
//     color: white;
//     float: right;
//     `
    const styleTag = {
        float: 'right',
        fontsize:'small'
      };
     
     
function FilterTitle({filter,champion,filterchampion}) { 
    const [classActive, SetState] = useState(false);
    return (
        <React.Fragment> 
 
        <li class="filter-title" onClick={() => SetState(!classActive)}>{filter.filterTitle}<IoIosArrowDown class={classActive?`arrow-up`:""} style={styleTag}/></li>
            <div class={`sub-filter${classActive?"open":""}`} id="sub-cost">
                <ul>
                <FilterItem item={filter.subFilter} champion={champion} filterchampion={filterchampion} categoryFilter={filter.filterTitle}/> 
                </ul>
            </div>
        </React.Fragment> 
    );
}

export default FilterTitle;