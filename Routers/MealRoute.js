const express = require('express');
const router = new express.Router();
const meal = require('../Models/meal.js');

router.use(express.json());


router.post('/meal', async (req, res) => {
    try {
        const m = new meal(req.body);
        const mealInfo = await m.save();
        res.send(mealInfo);
        // console.log("Created Meal");
    } catch (e) {
        res.status(404).send(e);
        console.log(e);
    }
})

// Update a meal
router.patch('/meal/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const UpdateMeal = await meal.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(UpdateMeal);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;