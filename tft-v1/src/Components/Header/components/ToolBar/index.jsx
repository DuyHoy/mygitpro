import React from 'react';
import LogoComp from './components/LogoComp';
import DropDownComp from './components/DropDownComp';
import SearchComp from './components/SearchComp';
import DownloadComp from './components/DownloadComp';

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