const express=require('express');
const app=express();
require('./Database/Connection.js');
const food=require("./Models/Food.js");
const meal=require("./Models/Food.js");
const user=require("./Models/Food.js");
const port=process.env.PORT || 7000;


app.use(express.json()); //recognise the incoming request object as a json object
app.get('/',(req,res)=>{
    res.send("EVOLV backend CHALLENGE");
})
// create a new food
app.post('/food',(req,res)=>{
    const fooditem=new food(req.body);
    fooditem.save().then(()=>{
        res.status(201).send(fooditem);
    }).catch((e)=>{
        res.status(400).send(e);
    });
    res.send("Hello Please Add The Foods");
})
app.post('/meal',(req,res)=>{
    const mealInfo=new meal(req.body);
    mealInfo.save().then(()=>{
        res.status(201).send(mealInfo);
    }).catch((e)=>{
        res.status(400).send(e);
    });
    res.send("Hello Please add the meals");
})
app.post('/user',(req,res)=>{
    const userAccount=new user(req.body);
    userAccount.save().then(()=>{
        res.status(201).send(userAccount);
    }).catch((e)=>{
        res.status(400).send(e);
    });
    res.send("Hello Please add the Users");
})
app.listen(port,()=>{
    console.log(`Connected at ${port}`);
})