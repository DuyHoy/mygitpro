import React from 'react';
import PropTypes from 'prop-types';

TierList.propTypes = {

};

function TierList(props) {
    return (
        // <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/tierlist">Tier Lists</a>
        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/tierlist">Tier Lists</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="nav-link" href="/tierlist/champions">Champions</a><a className="nav-link" href="/tierlist/origins">Origins</a>
                <a className="nav-link" href="/tierlist/classes">Classes</a>
                <a className="nav-link" href="/tierlist/items">Items</a>
            </div>
        </li>
    );
}

export default TierList;