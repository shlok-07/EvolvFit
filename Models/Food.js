const mongoose = require('mongoose');
const validator = require('validator');

const FoodItemSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true, trim: true },
        last: { type: String, required: true, trim: true },
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
        type: String,
    }
})


// we will create a new collection

const food = new mongoose.model('food', FoodItemSchema);
const meal = new mongoose.model('meal', MealSchema);
const user = new mongoose.model('user', UserSchema);

// module.exports = { food, meal, user };
module.exports=food;
module.exports=meal;
module.exports=user;