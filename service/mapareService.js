const path = require('path');

const Image = require('../models/format');

async function getAll(req,res){
    const images = await Image.find();
    console.log(images);
    res.send(images);
};

async function getOne(req, res){
    const { id_type } = req.params;
    const image = await Image.find({ profile: true, id_type });
    console.log(image);
    res.send(image);
};