import React from 'react';
import PropTypes from 'prop-types';
import ToolBar from './components/ToolBar';
import MenuBar from './components/MenuBar';

Header.propTypes = {

};

function Header(props) {
    return (
        <nav className="nav toolbar">
            <div className="nav-wrapper container">
                <ToolBar />
                <MenuBar />
            </div>

        </nav>


    );
}

export default Header;