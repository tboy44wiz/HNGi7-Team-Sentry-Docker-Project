const express = require('express');     //  Importing Express Package.
const mongoose = require('mongoose');   //  Importing the mongoose package.
const morgan = require('morgan');   //  Importing Morgan Package.
const bodyParser = require('body-parser');  //  Import Body-Parser Package.


//  Connect to MongoDB using Mongoose.
mongoose.connect("mongodb://localhost/markdownDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//  Importing Routes
const apiPageRoute = require('./routes/addPageRoute');  //  For the API EndPoint.


//  Set Up Express App
const app  = express();


//  parse JSON-encoded bodies and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//  Using Middleware Morgan for logging.
app.use(morgan("combined"));


//  Requesting for imported Routes
app.use('/api/markdown', apiPageRoute);     //  For the API EndPoint.



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}, Kindly visit http://localhost:${PORT}`);
});