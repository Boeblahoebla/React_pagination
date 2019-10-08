// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';

// Data fetching
import axios from 'axios/index';

// Components
import Pagination from '../pagination/Pagination';


// Component
////////////

const Users = () => {

    // Component state
    const [ data, setData ] = useState([]);

    // When the component 'mounts' load the data
    useEffect(() => {
        axios.get('/api/users/all')
            .then(res => {
                // Save the data in the state
                setData(res.data.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    console.log(data);

    // JSX markup
    return (
        <div>
            <h1>User list</h1>
            <Pagination/>
        </div>
    )
};


// Export
/////////

export default Users;











