//http://localhost:3000/set-user-info (post)

app.post('/set-user-info', function (req, res) {

    var usersArr = [];
    var newUser = req.body;

  


    // fs.exists('users.json', function (exists) {
    //     if (exists) {  // если файл существует
    //         fs.readFile('users.json', (err, data) => {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 usersArr = JSON.parse(data)
    //                 for (i = 0; i < usersArr.length; i++) {
    //                     if (usersArr[i].secretKey !== newUser.secretKey) {
    //                         usersArr.push(newUser)
    //                         var json = JSON.stringify(usersArr, null, ' ')
                    
    //                         fs.writeFile('users.json', json, err => {
    //                             if (err) {
    //                                 console.log('Error writing file', err)
    //                             } else {
    //                                 console.log('Successfully wrote file')
                                    
    //                             }
                                
    //                         })
    //                     } else {
                            
    //                     }
    //                 }
    //             }
    //         });
    //     } else {
    //     usersArr.push(newUser)
    //     var json = JSON.stringify(usersArr, null, ' ')

    //     fs.writeFile('users.json', json, err => {
    //         if (err) {
    //             console.log('Error writing file', err)
    //         } else {
    //             console.log('Successfully wrote file')
                
    //         }
    //     })
    //     console.log("111")
        
    //     }
    // });
    res.status(200)
    console.log("222")
});

//     fs.readFile('./users.json', 'utf8', (err, jsonString) => {
//         if (err) {
//             console.log("Error reading file from disk:", err)
//             return
//         }
//         try {
//             const users = JSON.parse(jsonString)
//             console.log("Users:", users) // => "Customer address is: Infinity Loop Drive"
//     } catch(err) {
//             console.log('Error parsing JSON string:', err)
//         }
//     })

//     const newUser = req.body   
//     const jsonString = JSON.stringify(newUser)



//     fs.writeFile('./users.json', jsonString, err => {
//         if (err) {
//             console.log('Error writing file', err)
//         } else {
//             console.log('Successfully wrote file')
//         }
//     })
//     res.send("ok");
// });





// app.post('/registration', function (req, res) {
//  const {id, login, password} = req.body; // req - обьект запроса, res -- обьект ответа
//   console.log(id, login, password);
//   console.log(req.body, 'req.body');
//   req.body.id++;
//   req.body.login += ' Hello';

//   res.send(req.body);
// });

// var data = [{name:"Valera"}, {name:"Valera - 2"}, {name:"Valera - 3"}];

// //http://localhost:3000/registration (get)
// app.get('/registration', function (req, res) {
//    res.send(data);
//  });

