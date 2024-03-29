import React from 'react';
import PropTypes from 'prop-types';
import LogoComp from './components/LogoComp';
import DropDownComp from './components/DropDownComp';
import SearchComp from './components/SearchComp';
import DownloadComp from './components/DownloadComp';
import MenuBar from '../MenuBar';

ToolBar.propTypes = {

};

function ToolBar(props) {
    return (
        <React.Fragment>
            <LogoComp />
            <DropDownComp />
            <SearchComp />
            <DownloadComp />
        </React.Fragment>

    );
}

export default ToolBar;