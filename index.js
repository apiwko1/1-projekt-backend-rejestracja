const path = require( 'path');
const express = require( 'express');
const app = express();
app.use(express.static('public'));

const hbs =  require('express-handlebars');
app.engine('hbs', hbs.engine({
    defaultLayout: 'main', 
    extname: '.hbs'
}));
app.set('views', path.join(__dirname, './views'));

const trainingRouter = require('./app/routes/trainingRouter');
app.use('/training', trainingRouter);


app.listen(8080, ()=>{
    console.log('start');
})