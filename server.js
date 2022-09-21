if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes');

connectDB();

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 4000

 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//allowcross-origin requests 
app.use(cors());

app.use(routes);


app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
