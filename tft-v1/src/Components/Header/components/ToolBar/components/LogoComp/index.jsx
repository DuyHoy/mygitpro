import React from 'react';
import PropTypes from 'prop-types';

LogoComp.propTypes = {

};

function LogoComp(props) {
    return (
        <a className="nav-brand active" aria-current="page" href="/"><img className="brand" src="https://rerollcdn.com/brand.svg" alt="TFTactics" /></a>
    );
}

export default LogoComp;