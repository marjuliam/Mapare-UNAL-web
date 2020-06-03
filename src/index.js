const express  = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost/mapareDB")
    .then(db => console.log("DB conectada"))
    .catch(err => console.log("Error al conectar"))

//Settings

app.set("port", process.env.port || 3000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/form", require("./routes/form"));

//Static fields

//console.log(__dirname + "/public")
app.use(express.static(__dirname + "/public"))

//Server is listening
app.listen(app.get("port"), () =>{
    console.log("Server on port " + app.get("port"));
});