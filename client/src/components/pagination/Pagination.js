// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import PageItem from './PageItem';
import PageItemDots from './PageItemDots';
import PageControlItem from './PageControlItem';
import PageControlSearch from './PageControlSearch';


// Component
////////////
const Pagination = ({data, decrementPage, incrementPage, setPageEnd, setPageBegin}) => {

    console.log('Data object in Pagination component: ');
    console.log('************************************');
    console.log(data);

    let paginationContent = '';

    if(!data.data) {
        return(
            <div>{paginationContent}</div>
        )
    }

    paginationContent = (
        <div className="mb-2">
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination ml-auto">
                        <PageItem pageNumber={1} active={true}/>
                        <PageItemDots/>
                        <PageItem pageNumber={3} active={false}/>
                        <PageItem pageNumber={4} active={false}/>
                        <PageItem pageNumber={5} active={false}/>
                        <PageItem pageNumber={6} active={false}/>
                        <PageItem pageNumber={7} active={false}/>
                        <PageItem pageNumber={8} active={false}/>
                        <PageItem pageNumber={9} active={false}/>
                        <PageItem pageNumber={10} active={false}/>
                        <PageItem pageNumber={11} active={false}/>
                        <PageItemDots/>
                        <PageItem pageNumber={data.pages} active={false}/>
                    </ul>
                </nav>
            </div>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination pagination-sm">

                        <li className="page-item" onClick={setPageBegin}>
                            <div className="page-link" aria-label="begin">
                                <i className="fas fa-fast-backward text-secondary"/>
                            </div>
                        </li>
                        <li className="page-item" onClick={decrementPage}>
                            <div className="page-link" aria-label="previous">
                                <i className="fas fa-backward text-secondary"/>
                            </div>
                        </li>

                        <PageControlSearch/>

                        <li className="page-item" onClick={incrementPage}>
                            <div className="page-link" aria-label="next">
                                <i className="fas fa-forward text-secondary"/>
                            </div>
                        </li>
                        <li className="page-item" onClick={setPageEnd}>
                            <div className="page-link" aria-label="end">
                                <i className="fas fa-fast-forward text-secondary"/>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );


    return (
        <div>
            {paginationContent}
        </div>
    )
};


// Prop types for the component
Pagination.propTypes = {
    data: PropTypes.object.isRequired,
    setPageEnd: PropTypes.func.isRequired,
    setPageBegin: PropTypes.func.isRequired,
    incrementPage: PropTypes.func.isRequired,
    decrementPage: PropTypes.func.isRequired
};


// Export
/////////

export default Pagination;