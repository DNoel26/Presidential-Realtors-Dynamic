const express = require('express');
require('dotenv').config({path: 'config/keys.env'});
const exphbs = require('express-handlebars');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const file_upload = require('express-fileupload');
const mysql = require('mysql2');

const app = express();

app.get('/', (req, res) => {

    res.send('Hello World!');
});
  
app.listen(3000, () => {
    
    console.log(`Example app listening at http://localhost:${3000}`);
});