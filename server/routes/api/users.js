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

    usersModel.countDocuments((err, count) => {
        // Error handling
        if (err) {
            response = {
                "error": true,
                "data": "Problem while counting the records"
            };

            // Return the negative response to the client
            return res.status(500).json(response);
        }

        count > 0 &&
        usersModel.find({}, {}, query, (err, data) => {
            // Error handling
            if (err) {
                response = {
                    "error": true,
                    "data": "Problem while fetching the data"
                };

                // Return the negative response to the client
                return res.status(500).json(response);
            }

            // Generate the response object
            response = {
                "error": false,
                "records": count,
                "currentPage": pageNo,
                "recordsPerPage": size,
                "pages": Math.ceil(count / size),
                "data": data
            };

            // Return the positive response to the client
            return res.status(200).json(response);
        })
    });
});


// Exports
//////////

module.exports = router;