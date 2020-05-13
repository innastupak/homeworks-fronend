var express = require('express'); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require('fs');// fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require('body-parser');// 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

//Настройки
//(https://overcoder.net/q/7302/%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-body-parser-%D1%81-express)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 3002;

// запусть наше nodeJs приложении на порту 3002 по адресу http://localhost:3002/
/* 
 теперь мы знаем куда мы можем обращаться к нашей nodeJS программе
 чтоб получить данные.
 (по адресу) http://localhost:3000/. 
 
*/
app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------


//http://localhost:3000/set-user-info (post)

app.post('/set-user-info', function (req, res) {

    // req example
    // { 
    //     "login": "Valera", 
    //     "password": 123, 
    //     "secretKey": "@gh5"         
    // }

    var usersArr = [];
    var newUser = req.body;

    function addUser(newUser, usersArr, res) {
        usersArr.push(newUser)
        var json = JSON.stringify(usersArr, null, ' ')

        fs.writeFile('users.json', json, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
                res
                    .status(200)
                    .send('ok');
            }

        })
    }

    function userNotExist(usersArr, newUser) {
        var needToAdd = true
        for (i = 0; i < usersArr.length; i++) {

            if (usersArr[i].secretKey === newUser.secretKey) {
                needToAdd = false
                break
            }
        }
        return needToAdd;
    }


    fs.exists('users.json', function (exists) {
        if (exists) {  // если файл существует
            fs.readFile('users.json', (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    usersArr = JSON.parse(data)

                    if (userNotExist(usersArr, newUser)) {
                        addUser(newUser, usersArr, res)
                    } else {
                        res
                            .status(301)
                            .send('Пользователь уже существует');
                    }
                }

            });
        } else { 
            addUser(newUser, usersArr, res)
        }
    });

});

