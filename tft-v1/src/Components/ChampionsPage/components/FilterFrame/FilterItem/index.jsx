import React from 'react';
import { BsCircle } from 'react-icons/bs'

FilterItem.propTypes = {

};

// const styleTag=styled.i`
// float: right;
// font-size:small;
// `

const styleTag = {
    float: 'right',
    fontsize: 'small'
};

function FilterItem({ item, champion, filterchampion }) {
    return (
        <React.Fragment>
            {
                item.map((item, index) => (
                    <li class="filter-item" key={index}>
                        <img src={item.icon} alt={item.icon} class="filter-icon" />
                        {item.filterItem}
                        <BsCircle style={styleTag} onClick={() => filterchampion(item.id)} />
                    </li>
                ))
            }
        </React.Fragment>
    );
}

export default FilterItem;