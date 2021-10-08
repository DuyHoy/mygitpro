import React from 'react';
import PropTypes from 'prop-types';
import TeamComp from './components/TeamComp';
import MetaReport from './components/MetaReport';
import Champions from './components/Champions';
import TierList from './components/TierList';
import ItemBuider from './components/ItemBuilder';
import TeamBuider from './components/TeamBuilder';
import Database from './components/Database';
import PatchNotes from './components/PatchNotes';

MenuBar.propTypes = {

};

function MenuBar(props) {
    return (
        <React.Fragment>
            <TeamComp />
            <MetaReport />
            <Champions />
            <TierList />
            <ItemBuider />
            <TeamBuider />
            <Database />
            <PatchNotes />
        </React.Fragment>
    );
}

export default MenuBar;