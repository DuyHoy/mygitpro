import React,{useState} from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../SharedComponents/SideBar'
import ChampionsList from './components/ChampionsList'
import FilterFrame from './components/FilterFrame'
import PageHeader from './components/ChampionsList/PageHeader'
import HeaderV2 from '../HeaderV2'
import {Filter,ChampList} from './data'
const allChampion = ['all',...new Set(Filter.map((item)=>item.champion))]

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

    const [champList,setChampList]=useState(ChampList);
    // const [champion,setChampion]=useState(allChampion);

//    const listSearch=(cost,cateChamp)=>{
//        let myArray=[];
//         myArray.push({item:cost,category:cateChamp});
//         console.log(myArray);
//    }
 
let myArray=[]; 
// let obj={'item':1,'category':'Aatrox'};

function containsObject(obj, myArray) {
    var i; 
    for (i = 0; i < myArray.length; i++) {  
        if (myArray[i].item == obj.item) { 
            return true;
        }
    }

    return false;
}
   const filterChampion=(cost,cateChamp)=>{
        const obj={'item':cost,'category':cateChamp}; 
         if(!containsObject(obj,myArray)){
            myArray.push(obj);
        }
       
        console.log(myArray)
          
        // if(cost==''){
        //     setChampList(Filter);
        //     return;
        // }

        // if(cateChamp=='Cost'){
        //     const filterCost=ChampList.filter((item)=>item.cost===cost);
        //     console.log(filterCost);
        //     setChampList(filterCost)
        // }
            
        // if(cateChamp=='Origin'){
        //     const filterOrigin=ChampList.filter((item)=>item.origin===cost);
        //     console.log(filterOrigin);
        //     setChampList(filterOrigin)
        // }
            
        // if(cateChamp=='Class'){
        //     const filterClass=ChampList.filter((item)=>item.class===cost);
        //     console.log(filterClass);
        //     setChampList(filterClass)
        // }

        console.log(myArray)
        if(!myArray.length==0){
            const myArrayFilter=champList.filter((el)=>{
                return myArray.some((f)=>{
                    return f.category=='Cost' && el.cost==f.item || f.category=='Origin' && el.origin==f.item || f.category=='Class' && el.class==f.item
                })
            })
            console.log(myArrayFilter);
             setChampList(myArrayFilter);
        }

        

    }

    


    return (
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
            </div>
        </section>
        </React.Fragment> 
    );
}

export default ChampionPage;