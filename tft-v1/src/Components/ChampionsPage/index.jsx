import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../SharedComponents/SideBar'
import ChampionsList from './components/ChampionsList'
ChampionPage.propTypes = {
};

function ChampionPage(props) {
    const listItem = [
        {
            id :0,
            title: 'Champions',
            link:"db/champions"
    },{
            id :1,
            title: 'Champions Stats',
            link:"db/champions-stats"
        },{
            id :2,
            title: 'Origin',
            link:"db/origin"
        },{
            id :2,
            title: 'Classes',
            link:"db/classes"
        },{
            id :2,
            title: 'Rolling',
            link:"db/rolling"
        }


    ];
    return (
        <section className="container">
            <div className="row">
                    <SideBar listItem={listItem}/>
                    <ChampionsList/>            
            </div>
        </section>
    );
}

export default ChampionPage;