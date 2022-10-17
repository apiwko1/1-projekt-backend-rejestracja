const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema  = mongoose.Schema({
    name: String, 
    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event'
    }, 
    city: {
        type: mongoose.Types.ObjectId,
        ref: 'City'
    }
})

module.exports = mongoose.model('User', schema);