import React from 'react';
import PropTypes from 'prop-types';
import FilterTitle from './FilterTitle'
import { Filter } from './data'

FilterFrame.propTypes = {

};

function FilterFrame(props) {

    return (
        <React.Fragment>
            <div className="d-none d-lg-block col-3 sidebar">
                <div className="filters-header"><h2>Filters</h2><div className="btn">Reset</div></div>
                <div className="divider"></div>
                {
                    Filter.map(filter => (
                        <FilterTitle key={filter.id} filter={filter} />
                    ))
                }
            </div>

        </React.Fragment>
    );
}

export default FilterFrame;