import React from 'react';
import PropTypes from 'prop-types';
import ToolBar from './components/ToolBar';
import MenuBar from './components/MenuBar';

Header.propTypes = {

};

function Header(props) {
    return (
        <>
            <nav className="nav toolbar">
                <div className="nav-wrapper container">
                    <ToolBar />
                    {/* <MenuBar /> */}
                </div>
            </nav>

            <nav className="nav d-none d-xl-flex">
                <div className="nav-wrapper container">
                    <ul className="nav-links" style={{ "width": "100%" }}>
                        <MenuBar />
                    </ul>
                </div>
                {/* </div> */}
            </nav>
        </>





    );

    // return (
    //     <nav className="nav d-none d-xl-flex">
    //         <div className="nav-wrapper container">
    //             <ul className="nav-links" style="width: 100%;">
    //                 <MenuBar />
    //             </ul>
    //         </div>
    //     </nav>

    // );
}

export default Header;