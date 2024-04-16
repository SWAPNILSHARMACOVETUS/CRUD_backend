require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const mongo_URL = process.env.MONGO_URL;

mongoose.connect(mongo_URL).then(()=>{
    console.log("MongoDB connected successfully !!");
}).catch((error)=>{
    console.log(error," Something went wrong");
})

app.use('/',(req,res)=>{
    res.send("Server started,Hello world !");
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});