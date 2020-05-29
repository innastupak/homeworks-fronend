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


app.post('/', function (req, res) {

    const {login = 'unnamed', password} = req.body;

    function findUser(usersArr, login, password) {

        for (let i = 0; i < usersArr.length; i++) {

            if (usersArr[i].login === login && usersArr[i].password === password) {
                return usersArr[i].id;

            }
        }
        return null;
    }


    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            usersArr = JSON.parse(data)

            var userId = findUser(usersArr, login, password);
            if (userId) {
                let resData = {"id": userId};
                res
                    .status(200)
                    .send(resData);
            } else {
                res
                    .status(401)
                    .send('Пользователь не существует');
            }
        }
    });

});

app.get('/goods', function (req, res) {
    let id = req.query.userId;
    let urlToJson = 'goods/' + id + '.json';
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

