const express = require('express');
const bodyParser = require("body-parser");

// Initialitazion
const app = express();
require('./database/database');

// Settings
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json()); // <--- Here

// Routes
app.use(require('./resource/mapareResource'));

//rutas testeo
app.get("/test", (req, res) => {
    res.render("index");
});

// Start
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});