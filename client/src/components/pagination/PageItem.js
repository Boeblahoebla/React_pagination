// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Component
////////////

const PageItem = ({pageNumber, active}) => {

    // Generate the listItem as active or not
    let listItem = '';

    if(active) {
        listItem = <li className="page-item"><a className="page-link bg-info text-white" href="#">{pageNumber}</a></li>
    } else {
        listItem = <li className="page-item"><a className="page-link text-secondary" href="#">{pageNumber}</a></li>
    }

    return (
        <div>
            {listItem}
        </div>

    )
};


PageItem.propTypes = {
    pageNumber: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

// Export
/////////

export default PageItem;

