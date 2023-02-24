require('dotenv').config();
const express = require('express');
const app = express();
const listener =  app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port' + listener.address().port);
});

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(_dirname + '/views/index.html')
});

//open the home page index.html once the client side hit the root end point of the 
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(_dirname + '/views/index.html');
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

