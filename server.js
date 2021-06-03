var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var notesRouter = require('./Routes/noteRoute')
const port = 3000;


var app= express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());


app.use('/api' , notesRouter);

app.get('/' , (req, res)=>{
    res.send("Welcome in Home!!!");
})

app.listen(port , ()=>{
    console.log("Server starts....!!");
})