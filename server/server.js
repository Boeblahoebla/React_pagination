// Imports
//////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser =require ('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const db = 'mongodb://localhost:27017/demo';

const usersRoute = require('./routes/api/users');

// Connectivity
///////////////

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('Mongodb is connected'))
    .catch(error => console.log('Problem connecting to db',error));

mongoose.set('useFindAndModify', false);


// Middleware
/////////////

// Connectivity
app.use(cors());

// JSON parsing
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Logging
app.use(morgan('tiny'));


// Routes
/////////

app.use('/api/users', usersRoute);


// Requests
///////////

// POST request
// @public /
app.get('/', (req,res)=> res.send('Hello from root of the server'));


// Server
/////////

// run de server
const port = 5000;
app.listen(port, () =>  console.log('listening on port', port));
