const Event = require('./../models/Event');


function eventList(cb) {
    Event.find().lean().exec((err, events) => {
        if (err) {
            cb(err);
        } else {
            cb(null, events);
        }
    })
}

module.exports = {
    list: eventList
}