import React from 'react';
import PropTypes from 'prop-types';
import LinkComp from '../LinkComp';

SideNav.propTypes = {
    item: PropTypes.object,
};


SideNav.defaultProps = {
}

function SideNav(props) {
    const { item } = props;
    return (
        <React.Fragment>
            {
                <LinkComp item={item} />
            }

        </React.Fragment>

    );
}

export default SideNav;