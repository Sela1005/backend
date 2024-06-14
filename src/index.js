const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Sử dụng routes
routes(app);

mongoose.connect(process.env.MONGO_DB)
.then(() => { 
    console.log('Connect DB Success!');
})
.catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log('Server running on port:', port);
});
