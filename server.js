//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//get request for bmicalculator.html (bmi)
app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

//post request for bmi
app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var answer = weight/(height* height);

    res.send("Your BMI is " + answer);
});

app.listen(3000,function(){
    console.log("Server started at port 3000");
});
