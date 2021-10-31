import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

LinkComp.propTypes = {

};

function LinkComp(props) {
    const parent = useRouteMatch();
    console.log(parent.path);
    const { item } = props;
    return (
        <React.Fragment>
            <NavLink activeClassName="active" aria-current="page" to={parent.path + item.link}>
                <li className="sidenav-title">{item.title}</li>
            </NavLink>
        </React.Fragment>
    );
}

export default LinkComp;