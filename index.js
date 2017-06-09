/**
 * Created by tom-n on 8-6-2017.
 */
var http        = require('http');
var express     = require('express');
var config      = require('./config/config.json');

//routes var
var routes_apiv1 = require('./routes/routes_apiv1');
var routes_apiv2 = require('./routes/routes_apiv2');


//create the application
var app = express();

app.set('PORT', config.webPort);

app.all('*', function (req, res, next) {
    console.log(req.method + " " + req.url);
    next();
});

app.get('/api/v1/hello', function (req, res, next) {
    res.contentType('application/json');
    res.json({
        "msg" : "test"
    });


});

app.use('/apiv1', routes_apiv1);
app.use('/apiv2', routes_apiv2);
//start server
var port = process.env.PORT || app.get('PORT');

app.listen(port, function () {
    console.log('The magic happens at http://localhost:' + port);
});

module.exports = app;