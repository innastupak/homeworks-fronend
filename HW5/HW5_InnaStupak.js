// Лекция
// 1.Написать функицию которая вернет произведение переданных фактических аргументов.

function mult(a, b) {
    return a * b;
}

result = mult(2, 5);
console.log(result);

// Лекция
// 2. Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4


function getCenter() {

    data = [];
    center = 0;

    for (i = 0; i < arguments.length; i++) {
        arrcenter = (arguments[i].length - 1) / 2;
        if (arguments[i].length % 2 === 0) {
            center = arguments[i].slice(arrcenter, arrcenter + 2);
        } else {
            center = arguments[i].slice(arrcenter, arrcenter + 1);
        }
        data = data.concat(center);
    }
    return data;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 7, 4, 5, 6];
console.log(getCenter(arr1, arr2));


// Лекция
// 3. Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции
// с двумя аргументами числами. doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.


function doFunction(a, b, callback) {
    return callback(a, b);
}

function power(a, b) {
    for (i = 0, result = 1; i < b; i++) {
        result *= a;
    }
    console.log(result, "power")
}

doFunction(2, 3, power);

// Лекция
// 4. Из п.3 реализовать функции sum, div, mul, power

function sum(a, b) {
    return sum = a + b;
}

console.log(doFunction(5, 5, sum), "sum");


function div(a, b) {
    return sum = a / b;
}

console.log(doFunction(6, 3, div), "div");


function mul(a, b) {
    return sum = a * b;
}

console.log(doFunction(3, 3, mul), "mul");

// Лекция
// 5. Реализовать функцию copy(list) по копированию массива.

function copy(list) {
    for (i = 0, listCopy = []; i < list.length; i++) {
        listCopy[i] = list[i];
    }
    return(listCopy);
}

console.log(copy([1, 55, 2]));

// Лекция
// 6. Предусмотреть возможность передачи вторым аргументом функции. При копировании массива - функция
// применится к каждому элементу копируемого массива. newL = copy(list, function(value){ return value*10; })

function doCopy(list, foo) {
    newL = [];
    for (i = 0;  i < list.length; i++) {
        newL[i] = foo(list[i]);
    }
    return newL;
}
function mult(value) {
    return value *10;
}
console.log(doCopy([1, 55, 2], mult));

// Практика
/// 1. Написать функцию заполнения массива. Имя произвольное.




function fillArr(arr) {
    for (i = 0; i < arr.length; i++) {
        data[i] = Math.round(Math.random() * (100 - 1) + 1);
    }
}

data = new Array(10);
fillArr(data);
console.log(data, "data");


// Практика
// 2. Написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.



function maxArr(arr) {

    for (i = 0, maxSum = 0; i < arr.length; i++) {
        sum = 0;
        for (j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === "number") {
                sum += arr[i][j];
            }
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxSumArr = i;
        }
    }
    console.log(arr[maxSumArr]);
    return arr[maxSumArr];
}

maxArr([[1, 9, 3], [1, "a23", 1]]);


// Практика
// 3. Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
//     В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия,
// указанного в переменной znak.

function doMath(x, znak, y) {
    switch (znak) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "%":
            return x % y;
        case "^":
            return Math.pow(x, y);
    }
}

result = doMath(2, "^", 3);
console.log(result);

// Практика
// 4. Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

function delSymbol(str, symbol) {

    strArr = str.split('');
    for (j = 0; j < symbol.length; j++) {
        strArr = strArr.filter(letter => letter !== symbol[j]);
    }
    strArr = strArr.join('');
    return strArr;
}

result = delSymbol("hello world", ['l', 'd']);
console.log(result);


// Практика
// 5. Напиши функцию filter, которая принимает функцию-предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.
//  var input = [1, 2, 3, 4, 5, 6];
//  function isEven(x) { return x % 2 == 0; } // проверяет на четность
//  console.log(filter(input, isEven)); // [2, 4, 6]

input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 === 0;
}

function filter(input, isEven) {
    evenArr = [];
    for (i = 0; i < input.length; i++) {
        if (isEven(input[i])) {
            evenArr.push(input[i]);
        }
    }
    return evenArr;
}

console.log(filter(input, isEven)); // [2, 4, 6]
