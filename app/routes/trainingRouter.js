const express = require('express');
const router = express.Router();

const city = require('./../controllers/city.controller');
const event = require('./../controllers/event.controller');

router.get('/', (req, res) => {
    city.list((err, cities) => {
        event.list((err, events) => {
            // console.log(events);
            // console.log(cities);
            res.render('home');
        })
    })
    
});

module.exports = router;