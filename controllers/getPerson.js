const express = require('express');
const mongoose = require('mongoose');
const Person = require('../model/personModel');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const { id }  = req.params;
    let person;
    try {
        person = await Person.findById(id);
        if (!person) {
            res.status(404).json({message: 'Person not found'});
        }
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
})

module.exports = router;