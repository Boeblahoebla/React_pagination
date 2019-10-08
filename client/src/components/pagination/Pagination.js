// Imports
//////////

// Base dependencies
import React from 'react';

// Components
import PageItem from './PageItem';
import PageItemDots from './PageItemDots';
import PageControlItem from './PageControlItem';
import PageControlSearch from './PageControlSearch';

// Component
////////////
const Pagination = () => {
    return (
        <div className="mb-2">
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination ml-auto">
                        <PageItem pageNumber="01" active={false}/>
                        <PageItemDots/>
                        <PageItem pageNumber="11" active={false}/>
                        <PageItem pageNumber="12" active={false}/>
                        <PageItem pageNumber="13" active={false}/>
                        <PageItem pageNumber="14" active={false}/>
                        <PageItem pageNumber="15" active={true}/>
                        <PageItem pageNumber="16" active={false}/>
                        <PageItem pageNumber="17" active={false}/>
                        <PageItem pageNumber="18" active={false}/>
                        <PageItem pageNumber="19" active={false}/>
                        <PageItemDots/>
                        <PageItem pageNumber="30" active={false}/>
                    </ul>
                </nav>
            </div>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">

                        <PageControlItem icon="begin"/>
                        <PageControlItem icon="previous"/>

                        <PageControlSearch/>

                        <PageControlItem icon="next"/>
                        <PageControlItem icon="end"/>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Pagination;