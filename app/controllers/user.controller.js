const User = require('./../models/User');

function userList(cb) {
    User.find().lean()
    .populate('city')
    .populate('event')
    .exec((err, users) => {
        if (err) {
            cb(err);
        } else {
            cb(null, users);
        }
    })
}

function userAdd(data, cb) {
    let newUser = new User(data);

    newUser.save(function (err, user) {

        if (err) {
            cb(err);
        } else {
            cb(null, user);
        }

    });
}

function userDelete(id, cb) {
    User.deleteOne({_id: id},function (err, user) {
        if (err) {
            cb(err);
        } else {
            cb(null, user);
        }
    });
}

module.exports = {
    list: userList, 
    add: userAdd, 
    delete: userDelete
}