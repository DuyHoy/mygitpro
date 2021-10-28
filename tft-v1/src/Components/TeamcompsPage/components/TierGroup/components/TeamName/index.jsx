import React from 'react';
import PropTypes from 'prop-types';

TeamName.propTypes = {

};

function TeamName(props) {
    return (
        <div className="team-name">
            <div className="team-rank tone">S</div>
            <div className="team-name-elipsis">
                Abomination Revenants
                <div className="team-playstyle">Standard</div>
            </div>
        </div>
    );
}

export default TeamName;