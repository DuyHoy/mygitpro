import React from 'react';
// import PropTypes from 'prop-types';

DropDownComp.propTypes = {

};

function DropDownComp(props) {
    return (
        <div className="set-btn dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-secondary">Set 5.5</button><div role="menu" aria-hidden="true" className="dropdown-menu"><button type="button" set="5.5" role="menuitem" className=" active dropdown-item">Set 5.5</button></div></div>
    );
}

export default DropDownComp;