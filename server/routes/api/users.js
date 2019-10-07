// Imports
//////////

const express = require('express');
const router = express.Router();


// Requests
///////////

// GET request
// @public /api/users/
router.get('/', (req, res) => res.json(
    { message: "Users route works" })
);


// Exports
//////////

module.exports = router;