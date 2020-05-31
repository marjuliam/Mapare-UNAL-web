const { Schema, model } = require('mongoose');

const formatSchema = new Schema({
    id_format: { type: String },
    path: { type: String},
    size: { type: Number},
    size: { type: Number},
    size: { type: Number},
    created_at: { type: Date, default: Date.now()}
});

module.exports = model('Format', formatSchema); 