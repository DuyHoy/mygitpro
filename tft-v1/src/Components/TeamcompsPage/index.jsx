import React from 'react';
import HeaderV2 from '../HeaderV2'
import FilterFrame from '../ChampionsPage/components/FilterFrame'


TeamCompPage.propTypes = {

};

function TeamCompPage(props) {
    const Filter = [
        {
            id: 1,
            filterTitle: 'Set 5.5',
            subFilter: [

            ]
        },
        {
            id: 2,
            filterTitle: 'Set 6',
            subFilter: [

            ]
        }
    ]
    return (
        <React.Fragment>
            <HeaderV2 />
            <section className="container">
                <div className="row">
                    {/* <FilterFrame filterdata={Filter} /> */}
                    {/* Layout lg-3 */}
                    <div class="col-12 col-lg-3 sidebar">
                        <div class="filters-header">
                            <h2>Filters</h2>
                        </div>
                        <div class="divider"></div>
                        <ul class="sidenav">
                            <div class="sidenav-link active">
                                <li set="5.5" class="sidenav-title">Set 5.5</li>
                            </div>
                            <div class="sidenav-link">
                                <li set="6" class="sidenav-title">Set 6</li>
                            </div>
                        </ul>
                        <div class="divider d-none d-lg-block"></div>
                        <div class="disclaimer d-none d-lg-block">
                            <p>The order inside each tier does not matter.</p>
                        </div>
                        <div class="divider d-lg-none"></div>
                    </div>
                    {/* Layout lg-3 */}

                    {/* Layout lg-9 */}
                    <div className="col-12 col-lg-9 main">
                        {/* <PageHeader /> */}
                        <div className="divider"></div>
                        <ul className="filter-list"></ul>
                        {/* <ChampionsList/> */}
                    </div>
                    {/* Layout lg-9 */}

                </div>
            </section>
        </React.Fragment>

    );
}

export default TeamCompPage;