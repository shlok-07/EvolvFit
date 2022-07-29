const mongoose = require('mongoose');
const validator = require('validator');

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    calories: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    carb: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    acceptedUnits: {
        type: String,
        enum: ['ml', 'liter', 'kg', 'g', 'item'],
        required: true
    },
    itemWeight: {
        type: Number,
        required: true
    }
})



// we will create a new collection

const food = new mongoose.model('food', FoodItemSchema);



// module.exports = { food, meal, user };
module.exports = food;

