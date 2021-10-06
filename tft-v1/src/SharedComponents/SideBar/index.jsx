import React from 'react';
import PropTypes from 'prop-types';
import SideNav from '../SideNav';
SideBar.propTypes = {
     listItem: PropTypes.array, 
};

SideBar.defaultProps = {
    listItem: [],
}

function SideBar(props) {
    const {listItem}= props;
    return (
        <div className="col-12 col-lg-3 sidebar">
            <div className="filters-header">
                <h2>Database</h2>
            </div>
            <div className="divider"></div>
            <ul className="sidenav">
                {listItem.map(item=>(
                 <SideNav item={item} /> 
                ))}
            </ul>
        </div>
    );
}

export default SideBar;