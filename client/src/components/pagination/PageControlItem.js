// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Component
////////////

const PageControlItem = ({icon}) => {

    // Generate the icon to use as control
    let controlIcon = '';

    if(icon === 'begin') {
        controlIcon = <i className="fas fa-fast-backward text-secondary"/>
    } else if(icon === 'previous') {
        controlIcon = <i className="fas fa-backward text-secondary"/>
    } else if(icon === 'next') {
        controlIcon = <i className="fas fa-forward text-secondary"/>
    } else {
        controlIcon = <i className="fas fa-fast-forward text-secondary"/>
    }

    return (
        <li className="page-item">
            <a className="page-link" href="#" aria-label={icon}>
                { controlIcon }
            </a>
        </li>

    )
};


PageControlItem.propTypes = {
    icon: PropTypes.string.isRequired,
};

// Export
/////////

export default PageControlItem;

