const express = require('express');
const router = new express.Router();
const user = require('../Models/user.js');

router.use(express.json());  // it's for the req.body part without it. It cannot take input

router.post('/user', async (req, res) => {
    try {
        const ua = new user(req.body);
        const userAccount = await ua.save();
        res.status(200).send(userAccount);
    } catch (e) {
        res.status(404).send(e);
    }
})

// Update a meal
router.patch('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const UpdateUser = await user.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(UpdateUser);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;