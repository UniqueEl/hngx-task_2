const express = require('express');
const mongoose = require('mongoose');
const Person = require('../model/personModel');

const router = express.Router();

router.put('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        const newName = req.body.name;

        if (!newName || typeof newName !== 'object') {
            return res.status(400).json({
                message: 'a new Name is required'
            });
        }
        const person = await Person.findByIdAndUpdate(id, {
            name: newName
        }, {
            new: true
        });
        if (!person) {
            return res.status(404).json({
                message: 'no person with the provided Id found'
            });
        }
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;