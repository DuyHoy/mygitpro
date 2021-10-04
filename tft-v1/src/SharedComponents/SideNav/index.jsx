import React from 'react';
import PropTypes from 'prop-types';

SideNav.propTypes = {
   
};


SideNav.defaultProps = {
}

function SideNav(props) {
    const {listItem}= props;
    return (
        <React.Fragment>
            {listItem.map(item=>(
                    <a key={item.id} className="active" aria-current="page" href="/db/champions">
                       <li className="sidenav-title">{item.name}</li>
                   </a> 
            ))}
       
        </React.Fragment>

    );
}

export default SideNav;