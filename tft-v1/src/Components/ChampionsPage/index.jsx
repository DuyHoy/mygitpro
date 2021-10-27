<<<<<<< HEAD
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../SharedComponents/SideBar'
import ChampionsList from './components/ChampionsList'
import FilterFrame from './components/FilterFrame'
import PageHeader from './components/ChampionsList/PageHeader'
import HeaderV2 from '../HeaderV2'
import {Filter,ChampList} from './data'
const allChampion = ['all',...new Set(Filter.map((item)=>item.champion))]
=======
import React from 'react';
import ChampionsList from './components/ChampionsList'
import FilterFrame from './components/FilterFrame'
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4

ChampionPage.propTypes = {
};

function ChampionPage(props) {
    const listItem = [
        {
            id: 0,
            title: 'Champions',
            link: "/champions"
        }, {
            id: 1,
            title: 'Champions Stats',
            link: "/champions-stats"
        }, {
            id: 2,
            title: 'Origin',
            link: "/origin"
        }, {
            id: 3,
            title: 'Classes',
            link: "/classes"
        }, {
            id: 4,
            title: 'Rolling',
<<<<<<< HEAD
            link:"/rolling"
        } 
    ];
=======
            link: "/rolling"
        }
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4

    const [champList,setChampList]=useState(ChampList);
    // const [champion,setChampion]=useState(allChampion);

   const filterChampion=(cost)=>{
       console.log(cost);
        if(cost==''){
            setChampList(Filter);
            return;
        }
        const newFilter=ChampList.filter((item)=>item.cost===cost);
        console.log(newFilter);
        setChampList(newFilter)
    }

    return (
<<<<<<< HEAD
        <React.Fragment>
        <HeaderV2/>
        <section className="container"> 
            <div className="row">    
            <FilterFrame filterdata={Filter}  filterchampion={filterChampion}/>
                  <div className="col-12 col-lg-9 main">
                      {/* <PageHeader /> */}
                      <div className="divider"></div>
                      <ul className="filter-list"></ul>
                      <ChampionsList champList={champList}/>
                  </div>
=======
        <section className="container">
            <div className="row">
                <FilterFrame />
                <div className="col-12 col-lg-9 main">
                    <ChampionsList />
                </div>
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4
            </div>
        </section>
        </React.Fragment> 
    );
}

export default ChampionPage;