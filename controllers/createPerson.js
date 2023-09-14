const mongoose = require('mongoose');
const express = require('express');
const Person = require('../model/personModel');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        // grabbing the person object from the request body
        let {name} = req.body;
        // check if the person object is of valid type
        if (!name) {
            return res.status(400).json({message: 'Invalid name provided. Please enter a name of type String'})
        };
        // create a new person object    
        const person = new Person({name});
        // save the person object
        await person.save();
        // return the newly created person object
        res.status(201).json({ id: person._id, name: person.name});
    } catch (error) {
    res.status(500).json({message: error.message});
    }
});

module.exports = router;