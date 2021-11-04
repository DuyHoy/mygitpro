import React from 'react';
import PropTypes from 'prop-types';
import CharactersItem from '../../../CharactersItem';

PositionItem.propTypes = {

};

function PositionItem({ PositionItem }) {
    return (
        <React.Fragment>
            <li className="hex">
                <div className="hexIn">
                    <div className="hexLink">
                        {PositionItem.position > 0 &&
                            <CharactersItem characterItem={PositionItem} />

                        }
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default PositionItem;