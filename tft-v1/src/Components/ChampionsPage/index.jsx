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
            link:"/champions"
    },{
            id :1,
            title: 'Champions Stats',
            link:"/champions-stats"
        },{
            id :2,
            title: 'Origin',
            link:"/origin"
        },{
            id :3,
            title: 'Classes',
            link:"/classes"
        },{
            id :4,
            title: 'Rolling',
            link:"/rolling"
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