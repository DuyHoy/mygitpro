import React from 'react';
import styled from 'styled-components'

FilterItem.propTypes = {

};

const StyleTag = styled.i`
float: right;
font-size:small;
`


function FilterItem({ item }) {
    console.log(item)
    return (
        <React.Fragment>
            {
                item.map(item => (
                    <li key={item.id} className="filter-item">
                        <img src={item.icon} alt={item.icon} className="filter-icon" />
                        {item.filterItem}<StyleTag className="far fa-circle" /></li>
                ))
            }
        </React.Fragment>
    );
}

export default FilterItem;