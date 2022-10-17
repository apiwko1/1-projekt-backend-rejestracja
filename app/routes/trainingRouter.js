const express = require('express');
const router = express.Router();

const city = require('./../controllers/city.controller');
const event = require('./../controllers/event.controller');
const user = require('./../controllers/user.controller');

router.get('/', (req, res) => {
    city.list((err, cities) => {
        event.list((err, events) => {
            user.list((err, users) =>{
                let data = {
                    'cities': cities, 
                    'events': events, 
                    'users' : users
                };
                res.render('home', data);

            })
            // console.log(events);
            // console.log(cities);
            
        })
    })
    
});

module.exports = router;