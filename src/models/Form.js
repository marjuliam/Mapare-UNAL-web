const mongoose = require("mongoose");
const { Schema } = mongoose;

const Form = new Schema({
    type: Number,
    width: Number,
    height: Number,
    xScale: Number,
    yScale: Number
});

module.exports = mongoose.model("Form", Form);