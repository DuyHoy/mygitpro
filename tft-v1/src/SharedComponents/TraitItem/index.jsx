import React from 'react';
import PropTypes from 'prop-types';

TraitItem.propTypes = {

};

function TraitItem({ divStyle2, traitItem }) {
    return (
        <div className={`builder-bonus-item active ` + (traitItem.rank ? traitItem.rank : "")}>
            <div
                className="builder-bonus-icon"
                search={traitItem.name}
                style={divStyle2}
            >
                <img
                    className="type-icon"
                    src={traitItem.img}
                    alt={traitItem.name}
                />
                <div className="builder-bonus-counter"><span>{traitItem.champQty}</span></div>
            </div>
            <div className="builder-bonus-count">
                <div className="builder-bonus-count-bar active"></div>
            </div>
        </div>
    );
}

export default TraitItem;