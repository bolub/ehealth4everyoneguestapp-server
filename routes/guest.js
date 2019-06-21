const express           = require('express');
const app               = express();
const router            = express.Router();
const bodyParser        = require('body-parser'); 
const Guest             = require('./../models/guest');

// body-parser
app.use(bodyParser.json());

// index route
router.get('/api/guests', (req, res)=>{
    Guest.find({}, (err, guests)=>{
        if(err){
            res.json(err);
        }else{
            res.json(guests);
        }
    })
});

// create route
router.post('/api/guests/add', (req, res)=>{
    const { name, email, address, comment } = req.body;
   
    const guest = { name, email, address, comment, created: new Date().toLocaleString() }

    Guest.create(guest, (err, newGuest)=>{
        if(err){
            console.log(err);
        }else{
            res.json({ message: 'Guest added successfully' });
        }
    });
})

//show route
router.get('/api/guests/:id', (req, res)=>{
    let id = req.params.id;

    Guest.findById(id, (err, foundGuest)=>{
        if(err){
            console.log(err);
        }else{
            res.json(foundGuest);
        }
    })
})

//UPDATE ROUTE
router.put("/api/guests/:id", (req, res)=>{
    let id = req.params.id;
    const { name, email, address, comment } = req.body;
    const foundGuest = { name, email, address, comment, created: new Date().toLocaleString()};


    Guest.findByIdAndUpdate(id, foundGuest, (err, updatedGuest)=>{
        if(err) {
            console.log(err);
        } else {
            res.json({ message: 'Guest updated successfully' });
        }
    });
 });
 
 //DELETE ROUTE

router.delete("/api/guests/:id", (req, res)=>{
    Guest.findByIdAndRemove(req.params.id, (err)=>{
        if (err) {
            console.log(err);
        } else {
            res.json({ message: 'Guest removed successfully' });
        }
    });
 });

module.exports = router;