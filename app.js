const { Console } = require("console");
const express = require("express");
const mongoose = require('mongoose'); // importing mongoose 
mongoose.connect('mongodb://localhost/irfanTraders',{useNewUrlParser:true}); // connectiong to mongoose database
const app = express();
const port = 80;
const path = require("path");
const bodparser = require("body-parser")
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))

//Defining the schema for the database
const traderSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    age: String,
    occupation: String
  });

//Creating models of that schema
const traders = mongoose.model('tradercollections',traderSchema);

//Creating documents
// const tradeIrfan = new traders({name:'tradingTrek'});



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/services', (req, res)=>{
    const params = {}
    res.status(200).render('services.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.get('/aboutus', (req, res)=>{
    const params = {}
    res.status(200).render('aboutus.pug', params);
})
app.get('/classinfo', (req, res)=>{
    const params = {}
    res.status(200).render('classinfo.pug', params);
})
app.post('/contact', (req, res)=>{
    var myData = new traders(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

