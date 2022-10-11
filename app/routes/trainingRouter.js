const express = require('express');
const router = express.Router();

const city = require('./../controllers/city.controller');

router.get('/', (req, res)=>{
    city.list((err, cities)=>{
        console.log(cities);    
    })
    res.send('start router');
});

module.exports = router;