const path = require('path');

const Format = require('../models/format');

async function getAll(req,res){
    const format = await Format.find();
    console.log(format);
    res.send(format);
};

async function getOne(req, res){
    const { id_format } = req.params;
    const format = await Format.find({ id_format });
    console.log(format);
    res.send(format);
};

async function create1(req, res){
    console.log(req.body);
    const format = new Format();
    format.id_format = req.body.id_format;
    format.alto = req.body.alto;
    format.largo = req.body.largo;
    format.ancho = req.body.ancho;
    format.path = req.body.path;
    
    await format.save();
    console.log(format);
    res.send(format);
    //res.redirect('/');
};

async function delete1(req, res){//luego de esto debe colocar imagen default
    const {id} = req.params;
    const format = await Format.findById(id);
    console.log(format);
    await format.remove();
    console.log('Model identyfied by '+ id +' was deleted');
    res.send('Model identyfied by '+ id +' was deleted');
    //res.redirect('/');
};

exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create1;
exports.delete1 = delete1;