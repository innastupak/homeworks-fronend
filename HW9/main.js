// Лекция


	// 1. Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать
// стандартным методам массивов.
// list.myPush(); list.myJoin(); list.myReverse(); ...



let list = {
    length: 0,
    myPush: function (newElem) {
        this[this.length] = newElem;
        this.length++;
        return this;
    },

    myReverse: function () {
        for (i = 0, j = this.length - 1; i <= j; i++, j--) {
            last = this[j];
            this[j] = this[i];
            this[i] = last;
        }
        return this;
    },

    myJoin: function (symbol) {   
       var str = "";
        for (i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                str += String(this[i]);
            } else {
                str += String(this[i]) + symbol;
            }
        }
        return str;
    }
}

list.myPush(1);
list.myPush(2);
list.myPush(3);
list.myReverse();
console.log(list.myJoin(","));
 





// 2. Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), которая
// описана в window. При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта,
// кроме самого метода renderObject
//
// obj => { x:10, y: 20 }
// obj.renderObject() -> x:10, y: 20

obj = { 
    x:10, 
    y:20,
    renderObject: function(){
        renderObject(this);
    }

};

function renderObject(obj){
    for (key in obj){
        if (key !== "renderObject"){ 
        console.log( key + " : " + obj[key]);
        }         
    }
}

obj.renderObject();


// 3. Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:
//
// obj.m1().m2().m3();
// obj.m2().m1().m3();
// obj.m2().m1().m3().m1().m1();
// ...

obj = {
    m1: function () {
        console.log("M1")
        return this;
    },
    m2: function (a, b) {
        console.log("M2")
        return this;
    },
    m3: function () {
        console.log("M3")
        return this;
    },
};

obj.m1().m2().m3();


// 4. в обьекте data существует метод addRecord, который аргументами получает любой набор объектов.
// Метод addRecord добавляет все свойства переданных объектов в data.
//
//     data = {
//     addRecord: function(){},
//     p: 600,
//     str: 'hello',
//     y: -50
// }
// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'


data = {
    addRecord: function () {
        for (i = 0; i < arguments.length; i++) {
            for (key in arguments[i]){
                this[key]=arguments[i][key]
             }

        }
    },
    p: 600,
    str: 'hello',
    y: -50

};
data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
console.log(data);

// 5. В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет
// присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта this,
// если false - берется свойство из arguments. По умолчанию flag = false;

data = {
    addRecord: function () {

        for (i = 0; i < arguments.length; i++) {
            for (key in arguments[i]) {

                flag = arguments[arguments.length - 1];
                if (flag === true) {
                    if (this.hasOwnProperty(key) === false) {
                        this[key] = arguments[i][key];
                    }
                } else {
                    this[key] = arguments[i][key];
                }
            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50

};

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);
console.log(data);

// Практика

// 1. Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. Организовать создание методов так,
// что бы можно было вызывать любые комбинации:
//-------------------------------------------------------------
//     obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
//-------------------------------------------------------------
// doFunction(func, x, y); получает параметрами 2 числа и функцию, которую нужно применить к x и y.
// Результат операции сохранять в obj.result
//-------------------------------------------------------------
// clear() очищает значение obj.result в 0
//-------------------------------------------------------------
//
// * copy(buffer) получает параметром название ключа buffer (string) и добавляет его к obj
// Далее в любом порядке можно вызывать комбинации функций


// * Создать метод target(property)- дальнейшие действия функций doFunction() и clear() будут изменять значение
// не result, а переданной property
//
// Пример: obj .doFunction(sum, 2, 4).copy('some_name').target('another_some_name').doFunction(mul, 6, 3)


obj = {
    copy: function (key) {
        this[key] = undefined;
        return this;
    },
   clear: function () {
        this[this.link]  = 0;
        return this;
    },
    doFunction: function (func, x, y) {
        this[this.link] = func(x, y);      
        return this;
    },
    result: 0,
    link: "result",
    target: function(property){
        this.copy(property);
        this.link = property;
        
return this;
    }

};

function sum(x,y) {
    return x + y;
}

function mul(x,y) {
    return x * y;
}

obj.doFunction(sum, 2, 4).copy("buffer").target('newResult').doFunction(mul, 6, 3);
console.log(obj);



// 2.Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

function doCamelCase(someString) {
    let words = someString.split("_");
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}

newSomeString = doCamelCase('var_text_hello');
console.log(newSomeString);

// 3.  Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.
//------------------------------------------------------------------------------------------------------------
// inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']) должно вернуть true, т.к. в affooasf есть совпадение.
//------------------------------------------------------------------------------------------------------------


function inArray(text, arr) {

    for (i = 0; i < arr.length; i++) {                
        if (arr[i].indexOf(text) !== -1) {
            console.log("Совпадение есть");            
            return true; 
        } 
    }
    console.log("Совпадений нет");
    return false;
}
inArray("foo", ["sjhfnaof", "affooasf", "dfhdfhdfh"]);