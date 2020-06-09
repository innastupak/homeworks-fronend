var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 3005;

app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});




app.get('/products', function (req, res) {

    let urlToJson = 'products.json';
    fs.readFile(urlToJson, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res
                .status(200)
                .send(data);
        }
    });
});

