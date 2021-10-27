<<<<<<< HEAD
import React,{Fragment,useState} from 'react';
import CharacterItem from './CharacterItem'
// import { Item } from './data'
import PageHeader from './PageHeader';


function ChampionsList({champList}) { 
    return (
        <div className="characters-list"> 
            <div className="divider"></div>
            <ul className="filter-list"></ul>
            {champList.map(champ => (
                <CharacterItem key={champ.id} champ={champ} />
            ))}
        </div>
=======
import React, { Fragment, useState } from 'react';
import CharacterItem from './CharacterItem'
import { Item } from './data'
import PageHeader from './PageHeader'

ChampionsList.propTypes = {

};


function ChampionsList() {
    const [filter, setFilter] = useState("aaaa");
    const [data, setData] = useState(Item);

    function handleFilterChanges(newVal) {
        console.log(newVal);
        console.log(data);
        setFilter(newVal);
        // const newData = { ...data };
        // const newData = Object.assign({}, data);

        const result = Item.filter(item => item.name == newVal);
        // console.log(result.length == 0 ? Item : result )
        setData(result.length == 0 ? Item : result);
    }
    return (
        <React.Fragment>
            <PageHeader filter={filter} handleFilterChanges={handleFilterChanges} />
            <div className="divider"></div>
            <ul className="filter-list"></ul>

            <div className="characters-list">
                {data.map(item => (
                    <CharacterItem key={item.id} Item={item} />
                ))}
            </div>
        </React.Fragment>
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4
    );
}

export default ChampionsList;