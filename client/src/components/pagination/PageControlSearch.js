// Imports
//////////

// Base dependencies
import React from 'react';


// Component
////////////

const PageControlSearch = () => {

    return (
        <li className="page-item d-flex ml-2 mr-2">
            <input className="form-control form-control-sm" type="text" placeholder="Of ga naar pagina..."/>
            <button className="btn btn-sm btn-secondary"><i className="fas fa-search"/></button>
        </li>
    )
};


// Export
/////////

export default PageControlSearch;

