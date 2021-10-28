import React from 'react';
import PropTypes from 'prop-types';
import TeamName from './components/TeamName';
import TeamCharacter from './components/TeamCharacter';
import TeamMore from './components/TeamMore';
import TeamExpand from './components/TeamExpand';
TierGroup.propTypes = {

};

function TierGroup({ divStyle2 }) {
    return (
        <div className="tier-group">
            <div className="characters-list">
                <div className="team-portrait up">
                    <TeamName />
                    <TeamCharacter />
                    <TeamMore />
                    <TeamExpand divStyle2={divStyle2} />
                </div>

            </div>
        </div>

    );
}

export default TierGroup;