import React from 'react';
import PropTypes from 'prop-types';
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
                        <a key={item.id} className="active" aria-current="page" href={item.link}>
                        <li className="sidenav-title">{item.title}</li>
                    </a> 
                ))}
            </ul>
        </div>
    );
}

export default SideBar;