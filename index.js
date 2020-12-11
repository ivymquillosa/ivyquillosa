const express = require('express');
const path = require('path');
const app = express();

const data = require('./data.json');

app.use(express.static(__dirname + '/public'));

app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Home', data});
})


const PORT = 3002

app.listen(PORT, () => console.log (`||----------- Started at port ${PORT} -----------||`));