import React from 'react';
import PropTypes from 'prop-types';
import ToolBar from './components/ToolBar';
import MenuBar from './components/MenuBar';

Header.propTypes = {

};

function Header(props) {
    return (
        <div>
            <ToolBar />
            <MenuBar />
        </div>
    );
}

export default Header;