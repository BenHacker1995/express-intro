// source in express from its Node module
// express is a function (somehow) =/
const express = require('express'); 
// gives us back an express app - object
const app = express();

//Tell express where to look for files when getting a
// request from someone's browser
app.use( express.static( 'server/public' ));

// Start listening for requests
const port = 5000;
app.listen( port, function() {
    console.log(`Listening on port ${port}`);
});