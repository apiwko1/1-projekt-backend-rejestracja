const City = require('./../models/City');


function cityList(cb) {
    City.find().lean().exec((err, cities) => {
        if (err) {
            cb(err);
        } else {
            cb(null, cities);
        }
    })
}

module.exports = {
    list: cityList
}