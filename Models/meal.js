const mongoose = require('mongoose');
const validator = require('validator');

const MealSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Evening', 'Snack', 'Dinner'],
        required: true
    },
    name: {
        first: { type: String, required: true, trim: true },
        last: { type: String, required: true, trim: true },
    },
    foodItems: {
        type: Array,
    }
})

const meal = new mongoose.model('meal', MealSchema);


module.exports = meal;