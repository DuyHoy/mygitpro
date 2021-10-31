import React from 'react';

Database.propTypes = {

};

function Database(props) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/db" aria-current="page">Database</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="nav-link active" href="/db/champions" aria-current="page">Champions</a>
                <a className="nav-link" href="/db/champion-stats">Champion Stats</a>
                <a className="nav-link" href="/db/origins">Origins</a><a className="nav-link" href="/db/classes">Classes</a>
                <a className="nav-link" href="/db/rolling">Rolling</a>
            </div>
        </li>
    );
}

export default Database;