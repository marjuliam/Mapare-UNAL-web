const express = require("express");

const router = express.Router();

const Form = require("../models/Form");

router.get("/", async (req, res) => {
    const forms = await Form.find();
    res.json(forms);
});

router.post("/", async (req, res) => {
    const forms = new Form(req.body);
    await forms.save();
    res.json({
        status: "Form guardado"
    });
});

router.put("/:id", async (req, res) => {
    await forms.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: "Form actualizado"
    });
});

router.delete("/:id", async (req, res) => {
    await forms.findByIdAndRemove(req.params.id);
    res.json({
        status: "Form borrado"
    })
});

module.exports = router;