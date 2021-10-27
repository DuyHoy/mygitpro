import React from 'react';
import PropTypes from 'prop-types';
import HeaderV2 from '../HeaderV2'
import FilterFrame from '../ChampionsPage/components/FilterFrame'
import {Filter} from './data'

TeamCompPage.propTypes = {
    
};

function TeamCompPage(props) {
    return (
        <div>
        <React.Fragment>
        <HeaderV2/>
        <section className="container"> 
            <div className="row">    
            <FilterFrame filterdata={Filter}/>
                  <div className="col-12 col-lg-9 main">
                      {/* <PageHeader /> */}
                      <div className="divider"></div>
                      <ul className="filter-list"></ul>
                      {/* <ChampionsList/> */}
                  </div>
            </div>
        </section>
        </React.Fragment> 
        </div>
    );
}

export default TeamCompPage;