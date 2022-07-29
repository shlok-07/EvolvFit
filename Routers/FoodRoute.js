const express = require('express');
const router = new express.Router();
const food = require('../Models/Food.js');

router.use(express.json());

// create a new food
router.post('/food', async (req, res) => {
    try {
        const f = new food(req.body);
        const foodItems = await f.save();
        res.status(201).send(foodItems);
    } catch (e) {
        res.send(e);
    }
})

// Update a food
router.patch('/food/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const UpdateFood = await food.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(UpdateFood);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;