// Imports
//////////

const express = require('express');
const router = express.Router();

// Model
const usersModel = require('../../database/schema');


// Requests
///////////


// GET ALL USERS route
// @public /api/users/all
router.get('/all', (req, res) => {

    // Get the query parameters
    const pageNo = parseInt(req.query.pageNo);
    const size = parseInt(req.query.size);

    // Create the "skip" & "limit" fields for use in mongoDb
    const skip = size * (pageNo - 1);

    // Set the query object for mongoDb
    const query = {
        skip: skip,
        limit: size
    };

    // Initialize the response;
    let response = {};

    // Find all the users
    usersModel.find({},{},query,(err, data) => {

        // Error handling
        if (err) {
            response = {
                "error": true,
                "data": "Problem while fetching the data"
            };

            // Return the negative response to the client
            return res.status(500).json(response);
        }

        // Prepare the data to send to the client
        response = {
            "error": false,
            "data": data
        };

        // Return the positive response to the client
        res.status(200).json(response);
    })
});


// TEST route
// @public /api/users/
router.get('/', (req, res) => res.json(
    { message: "Users route works" })
);



// Exports
//////////

module.exports = router;