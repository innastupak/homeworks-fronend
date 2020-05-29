
/* 
Создать форму с полями login, password и кнопку sign in. По нажатию на кнопку введенные данные с формы отправляются на сервер.
Сервер должен проверить в файле users.json существует ли такой юзер с отправленными данными(login, password). 
Пример массива из файла users: [{"login":"admin", "password": "admin", "id": 1}]

Сервер должен отправить на client id пользователя, и в запрос указать status 200. 
Если такого пользователя не существует то 'Not found' и status 401.

Тренируемся дальше. 
Задача по id получить список товаров по юузеру. Логика работы следующая:
Как только вы получили id на client-е (от сервера) - отпрвить его обратно на сервер. За получением списка товаров по юзеру.

На сервере создать папку goods где будут файлики: 1.json, 2.json, 3.json ,...., n.json (создайте столько сколько у вас юзеров в файле users.json)

Воспользоваться id полученой от client для того чтоб воспользоваться им для прочтения соответсвующего файлика n.json 
Например: при id = 1 - я могу создать строку такого вида let urlToJson = 'goods/' + id + '.json'; - получу 'goods/1.json - путь к товарам юзера. 
Товары могут выглядеть так [{..},{..}] на ваше усмотрение из чего будут состоять информация по товару. Отправить товары на client.

Вывести на экран товары юзера.
*/


const form = document.getElementById('form');


form.addEventListener('click', function (event) {
   event.preventDefault();
   const target = event.target;


   if (target.tagName.toLowerCase() === 'button') {
      const requestPayload = processForm(form);

      sendAjax({
         url: "http://localhost:3005/",
         method: "post",
         data: requestPayload,
         success(data) {

            sendAjax({
               url: "http://localhost:3005/goods?userId=" + data.id,
               method: "get",
               success(data) {
                  showGoods(data);
               }
            });
         }
      });
   }

});

function processForm(form) {
   let requestData = {};

   for (let i = 0; i < form.length; i++) {
      const formElement = form[i];

      if (formElement.tagName.toLowerCase() === 'input') {
         requestData[formElement.name] = formElement.value;
      }
   }
   clearGoods();
   return requestData;
}

function showGoods(goodsArr) {

   let container = document.getElementById('goods-container');
   for (i = 0; i < goodsArr.length; i++) {
      const { item, price } = goodsArr[i];
      const divItem = document.createElement('div');
      divItem.innerHTML = item + '<br>' + price;
      container.appendChild(divItem);
   };
}

function clearGoods() {
   let container = document.getElementById('goods-container');
   container.innerHTML = "";
}





function sendAjax({ url, method, success, data }) {
   var xhr = new XMLHttpRequest();

   xhr.addEventListener('load', function ({ target }) {
      if (target.status == 200) {
         const response = JSON.parse(target.response);

         success(response);

      }
   });

   xhr.open(method, url);
   xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');



   xhr.send(JSON.stringify(data));
}







// sendAjax(config);


// function sendAjax({url, method, success}) {
//    var xhr = new XMLHttpRequest();

//    xhr.onreadystatechange = function() {
//       if (xhr.readyState !== 4) return;

//       let response = JSON.parse(xhr.responseText);

//       success(response);
//    };

//    xhr.open(method, url);

//    xhr.send();
// }