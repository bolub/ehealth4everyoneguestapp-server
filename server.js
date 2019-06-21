const express           = require('express');
const app               = express();
const PORT              = process.env.PORT || 3001;
const cors              = require('cors');
const path              = require('path');
const guestRoutes       = require('./routes/guest');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser'); 

app.use(cors());
app.use(bodyParser.json());

//mongoose
const db =  "mongodb://Bolub:Bioluwasefe1#@ds341247.mlab.com:41247/ehealth4everyonecustomerapp";

mongoose.connect(db, { useNewUrlParser: true }, ()=>{
    console.log("database connected")
});

app.use(guestRoutes);

app.get('/', (req, res)=>{
    res.redirect('/api/guests');
});


app.listen(PORT, ()=> console.log('SERVER RUNNING'));
