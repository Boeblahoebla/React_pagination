// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import UserItem from './UserItem';


// Component
////////////

const UsersTable = ({data}) => {

    // Generate the user items
    const userItems = data.map(user => (
        <UserItem
            key={user._id} email={user.email} firstName={user.first_name}
            gender={user.gender} lastName={user.last_name}
        />
    ));

    return (
        <div className="row mb-4">
            <div className="col-md-12">
                <h1 className="display-3">Klantenbeheer</h1>
                <p className="lead text-muted mb-4">Welkom Patrick</p>

                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            {/* firstName, lastName, gender, email */}
                            <th>Voornaam</th>
                            <th>Familienaam</th>
                            <th>Gender</th>
                            <th>E-mail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userItems}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};


// Prop types for the component
UsersTable.propTypes = {
    data: PropTypes.array.isRequired
};


// Export
/////////

export default UsersTable;