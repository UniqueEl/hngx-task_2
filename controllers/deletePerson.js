const express = require('express');
const mongoose = require('mongoose');
const Person = require('../model/personModel');

const router = express.Router();


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const deletePerson = await Person.findByIdAndDelete(id);
    if (!deletePerson) {
        return res.status(404).json({
            message: 'Person not found'
        });
    }
    res.status(200).json({message: 'Person deleted'});
});

module.exports = router;