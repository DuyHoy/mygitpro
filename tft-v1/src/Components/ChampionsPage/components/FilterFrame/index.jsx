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
                <div class="filters-header"><h2>Filters</h2><div class="btn">Reset</div></div>
                <div class="divider"></div>
                {
                    Filter.map(filter => (
                        <FilterTitle filter={filter} />
                    ))
                }
            </div>

        </React.Fragment>
    );
}

export default FilterFrame;