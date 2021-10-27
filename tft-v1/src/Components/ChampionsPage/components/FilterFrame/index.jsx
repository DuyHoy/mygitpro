import React from 'react';
import PropTypes from 'prop-types';
import FilterTitle from './FilterTitle' 


FilterFrame.propTypes = {
    
};

function FilterFrame({filterdata,champion,filterchampion}) {
     
    return (
        <React.Fragment>
               <div className="d-none d-lg-block col-3 sidebar">
               <div class="filters-header"><h2>Filters</h2><div class="btn">Reset</div></div>
               <div class="divider"></div>
               {
                   filterdata.map(filter=>(
                    <FilterTitle filter={filter} champion={champion} filterchampion={filterchampion}/>
                   ))
               } 
               </div>
        
       </React.Fragment>
    );
}

export default FilterFrame;