const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql')
const app = express();
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors');
const bcrypt = require('bcryptjs')
const fileUpload = require('express-fileupload');

//*******************************************[ SWAGGER DOCS ] ********************************************************** */



app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//********************************************   [ ROUTES ]  ********************************************************* */
var locations = require('./routes/LocationsController');
app.use('/location', locations);

app.listen('3000'), () => {}
console.log('Server running in port 3000')
module.exports = app;