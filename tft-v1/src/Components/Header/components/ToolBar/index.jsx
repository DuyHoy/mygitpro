import React from 'react';
import PropTypes from 'prop-types';
import LogoComp from './components/LogoComp';
import DropDownComp from './components/DropDownComp';
import SearchComp from './components/SearchComp';

ToolBar.propTypes = {

};

function ToolBar(props) {
    return (
        <React.Fragment>
            <LogoComp />
            <DropDownComp />
            <SearchComp />
        </React.Fragment>

    );
}

export default ToolBar;