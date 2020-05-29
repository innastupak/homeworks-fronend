// Cоздать конвертер-функцию которая получает на вход массив вида: mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
// а на выходе получим переобразованый массив: [1,2,3,3.1,4,5,6,7,8]

function convertToNew(arr,newArr) {
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            convertToNew(arr[i], newArr);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function convert(arr) {
    return convertToNew(arr,[]);
}

mass = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8]]];
result = convert(mass);
console.log(result);


// 1. Создать объект с такой структурой:
// obj = { a: 10, b: 12, c: { f: 13 } }
// Написать функцию convert(obj), он получает аргументом obj. Функция должна вернуть новый объект:
// newO2j = { a: 10, b: 12, f: 13 }



obj = {
    a: 10,
    b: 12,
    c: {f: 13}
}

function convertObj(object, newObj) {

    for (key in object) {

        if (object[key] instanceof Object){
            convertObj ( object[key], newObj  )
        } else {
            newObj[key] = object[key];
        }

    }

    return newObj;

}

function convert(object) {
    return convertObj(object, {});
}
console.log(convert(obj));



// 2. Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта
// и возвращает новый, который состоит из свойство обоих обьектов (склеить). Если свойство повторяется,
// то взять значение второго обьекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }


function assignObjects(obj1, obj2) {
    newObj = {};
    for (key in obj1) {
        newObj[key] = obj1[key];
    }
    for (key in obj2) {
        newObj[key] = obj2[key];
    }
    console.log(newObj, "newObj");

}

assignObjects({x: 10, y: 20}, {z: 30, x: 255});



// 3. Адаптировать функцию assignObjects() под неопределенное количество объектов.
// assignObjects(obj1, obj2, ....., objn);


function assignObjects() {
    newObj = {};
    for (i=0; i<arguments.length; i++){
        for ( key in arguments[i]){
            newObj[key] = arguments[i][key];
        }
    }


    console.log(newObj, "newObj");

}

assignObjects({x: 10, y: 20}, {z: 30, x: 255}, {z: 1, x: 2055});



// 4. (**)Имеем функцию getPerson(name, from, to) которая возвращает объект {name: name, age: Math.random()}
//
// Создать массив из 5 таких объектов.
//     Найти средний возраст и самого старшего человека.
//     Создать массив уникальных имен.

function getPerson(name, from, to) {
    return {name: name, age: Math.ceil(Math.random() * (to - from) + from)}
}

persons = [
    getPerson("Inna", 1, 100),
    getPerson("Alice", 1, 100),
    getPerson("Tom", 1, 100),
    getPerson("Alice", 1, 100),
    getPerson("Lili", 1, 100),

];
console.log(persons);


for (i = 0, sumAge = 0; i < persons.length; i++) {
    sumAge += persons[i].age;
}
avgAge = sumAge / persons.length;
console.log(avgAge, "avgAge");

for (i = 0, maxAge = 0; i < persons.length; i++) {
    if (persons[i].age > maxAge) {
        maxAge = persons[i].age;
    }
}
console.log(maxAge, "maxAge");

uniqNames = [];
for (i = 0; i < persons.length; i++) {
    if (!uniqNames.includes(persons[i].name)) {
        uniqNames.push(persons[i].name);
    }
}
console.log(uniqNames, "unicNames");
