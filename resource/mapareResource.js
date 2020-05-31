const { Router } = require('express');
const router = Router();

const service = require('../service/mapareService');

router.get('/format', (req,res) =>{
    service.getAll(req,res);
});

router.get('/format/:id_format', (req,res) =>{
    service.getOne(req,res);
});

router.post('/format/upload', (req,res) =>{//-/upload
    service.create(req, res);
});

router.delete('/format/delete/:id', (req,res) =>{
    service.delete1(req, res);
});

module.exports = router;