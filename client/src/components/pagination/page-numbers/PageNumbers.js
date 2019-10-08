// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import PageNumberItem from './PageNumberItem';
import PageNumberDots from './PageNumberDots';


// Component
////////////

const PageNumbers = ({pages, currentPage}) => {

    console.log('total pages: ' + pages);
    console.log('current page: ' + currentPage);

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination ml-auto">
                    <PageNumberItem pageNumber={1} active={true}/>
                    <PageNumberDots/>
                    <PageNumberItem pageNumber={3} active={false}/>
                    <PageNumberItem pageNumber={4} active={false}/>
                    <PageNumberItem pageNumber={5} active={false}/>
                    <PageNumberItem pageNumber={6} active={false}/>
                    <PageNumberItem pageNumber={7} active={false}/>
                    <PageNumberItem pageNumber={8} active={false}/>
                    <PageNumberItem pageNumber={9} active={false}/>
                    <PageNumberItem pageNumber={10} active={false}/>
                    <PageNumberItem pageNumber={11} active={false}/>
                    <PageNumberDots/>
                    <PageNumberItem pageNumber={pages} active={false}/>
                </ul>
            </nav>
        </div>
    )
};


// Prop types for the component
PageNumbers.PropTypes = {
    pages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};


// Export
/////////

export default PageNumbers;