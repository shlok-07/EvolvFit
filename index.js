const express = require('express');
const app = express();
require('./Database/Connection.js');
const foodrouter = require('./Routers/FoodRoute.js');
const mealrouter = require('./Routers/mealRoute.js');
const userrouter = require('./Routers/userRoute.js');

const port = process.env.PORT || 7000;

app.use(foodrouter);
app.use(mealrouter);
app.use(userrouter);

app.listen(port, () => {
    console.log(`Connected at ${port}`);
})