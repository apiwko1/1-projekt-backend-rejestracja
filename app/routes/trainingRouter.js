const express = require('express');
const router = express.Router();

const city = require('./../controllers/city.controller');
const event = require('./../controllers/event.controller');
const user = require('./../controllers/user.controller');

router.get('/', (req, res) => {
    city.list((err, cities) => {
        event.list((err, events) => {
            user.list((err, users) => {
                let data = {
                    'cities': cities,
                    'events': events,
                    'users': users
                };
                // console.log(data.users);
                res.render('home', data);
            })
        })
    })

});

router.post('/', function(req, res){
 console.log('post /');
    user.add(req.body, function(err, user){
        console.log(req.body);
        if(err) res.send(err);

        res.redirect('/training')
    })
});

router.get('/delete/:id', function(req, res){
     
    user.delete(req.params.id, function(err, user){
        if(err) res.send(err);
 
        res.redirect('/training');
    });
     
});

module.exports = router;