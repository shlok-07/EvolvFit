const mongoose=require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/Fitness",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
console.log("DataBase Connects Succesfully");
}).catch((e)=>{
    console.log("No Connection Stablised");
})
