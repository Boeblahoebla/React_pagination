// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Component
////////////

const UserItem = ({firstName, lastName, gender, email}) => {
    return (
        <tr>
            <td className="align-middle">{firstName}</td>
            <td className="align-middle">{lastName}</td>
            <td className="align-middle">{gender}</td>
            <td className="align-middle">{email}</td>
        </tr>
    )
};


// Prop types for the component
UserItem.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};


// Export
/////////

export default UserItem;