const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true, trim: true },
        last: { type: String, required: true, trim: true },
    },
    calorieRequirement: {
        type: Number,
        required: true
    },
    mealPlan: {
        date: {
            type: Date,
            default: Date.now
        },
        meal: {
            type: String,
            enum: ['Breakfast', 'Lunch', 'Evening', 'Snack', 'Dinner'],
        }
    }
})
const user = new mongoose.model('user', UserSchema);

module.exports = user;