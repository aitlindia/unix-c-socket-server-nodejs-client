/**
 * Created by alpha on 27/8/17.
 */

var bodyParser = require('body-parser');

const express = require('express');
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var myDunc = function (req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);

    console.log(user_id + ' ' + token + ' ' + geo);
};


app.get('/api/users', myDunc);

app.get('/', function (req, res) {
    res.send('Hello World! mr alam');
});

app.listen(8081, function () {
    console.log('Example app listening on port 3000!');
});




