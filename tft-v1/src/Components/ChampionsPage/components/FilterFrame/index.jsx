import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import FilterTitle from './FilterTitle' 

=======
import FilterTitle from './FilterTitle'
import { Filter } from './data'
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4

FilterFrame.propTypes = {

};

<<<<<<< HEAD
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
=======
function FilterFrame(props) {

    return (
        <React.Fragment>
            <div className="d-none d-lg-block col-3 sidebar">
                <div class="filters-header"><h2>Filters</h2><div class="btn">Reset</div></div>
                <div class="divider"></div>
                {
                    Filter.map(filter => (
                        <FilterTitle filter={filter} />
                    ))
                }
            </div>

        </React.Fragment>
>>>>>>> 01de525fd7d27ac9c1b76750563a6c738f6bedd4
    );
}

export default FilterFrame;