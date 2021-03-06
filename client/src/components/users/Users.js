// Imports
//////////

// Base dependencies
import React, {useState, useEffect} from 'react';

// Data fetching
import axios from 'axios/index';

// Components
import Pagination from '../pagination/Pagination';
import UsersTable from './UsersTable';

// CSS
import '../../css/style.css'


// Component
////////////

const Users = () => {

    // Component state
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [loading, setLoading] = useState(true);

    // When the component 'mounts' fetch the data from the backend &
    // fetch the data again when the chosen page or size changes
    useEffect(() => {
        setLoading(true);
        axios.get(`/api/users/all?pageNo=${page}&size=${size}`)
            .then(res => {
                console.log(res.data);
                // Save the values from the response in the state
                setSize(res.data.recordsPerPage);
                setPage(res.data.currentPage);
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, [page, size]);

    /******************
     * Event handlers *
     ******************/

    // Decrement page handler
    const decrementPage = () => { page > 1 && setPage(page - 1) };

    // Increment page handler
    const incrementPage = () => { page < data.pages && setPage(page + 1) };

    // Set first page handler
    const setPageBegin = () => { setPage(1) };

    // Set last page handler
    const setPageEnd = () => { setPage(data.pages) };

    // Set page number handler
    const selectPage = (value) => {
        (Math.abs(value) <= data.pages)
            ? setPage(Math.abs(value))
            : setPage(data.pages)
    };

    /*************************
     * End of Event handlers *
     *************************/

    return (
        <div>
            {data.data && <UsersTable data={data.data}/>}

            {/* If data is done loading, show the pagination */}
            {!loading &&
                <Pagination data={data} decrementPage={decrementPage} incrementPage={incrementPage}
                            setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}
                />
            }
        </div>
    )
};


// Export
/////////

export default Users;











