// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import PageControlItem from './PageControlItem';
import PageControlSearch from './PageControlSearch';


// Component
////////////

const PageControls = ({decrementPage, incrementPage, setPageEnd, setPageBegin}) => {
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm">

                    <PageControlItem icon="begin" action={setPageBegin}/>
                    <PageControlItem icon="previous" action={decrementPage}/>

                    <PageControlSearch/>

                    <PageControlItem icon="next" action={incrementPage}/>
                    <PageControlItem icon="end" action={setPageEnd}/>
                </ul>
            </nav>
        </div>
    )
};


// Prop types for the component
PageControls.PropTypes = {
    decrementPage: PropTypes.func.isRequired,
    incrementPage: PropTypes.func.isRequired,
    sePageEnd: PropTypes.func.isRequired,
    setPageBegin: PropTypes.func.isRequired
};


// Export
/////////

export default PageControls;