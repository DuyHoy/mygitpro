import React, { useState } from 'react';
import ChampionsList from './components/ChampionsList'
import FilterFrame from './components/FilterFrame'
import HeaderV2 from '../HeaderV2'
import { Filter, ChampList } from './data'

ChampionPage.propTypes = {
};

function ChampionPage(props) {

    const [champList, setChampList] = useState(ChampList);


    const filterChampion = (cost) => {
        console.log(cost);
        if (cost == '') {
            setChampList(Filter);
            return;
        }
        const newFilter = ChampList.filter((item) => item.cost === cost);
        console.log(newFilter);
        setChampList(newFilter)
    }

    return (
        <React.Fragment>
            <HeaderV2 />
            <section className="container">
                <div className="row">
                    <FilterFrame filterdata={Filter} filterchampion={filterChampion} />
                    <div className="col-12 col-lg-9 main">
                        {/* <PageHeader /> */}
                        <div className="divider"></div>
                        <ul className="filter-list"></ul>
                        <ChampionsList champList={champList} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ChampionPage;