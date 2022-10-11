const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema  = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Event', schema);