// 1. Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
// row (5) // 5 4 3 2 1;

function doReverse(value) {
    console.log(value);
    if (value > 1) {
        doReverse(value - 1);
    }
}

doReverse(20);

// 2. Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6


function sumTo(n) {

    if (n > 0) {
        sum =  n + sumTo(n - 1);
    }    else {
        sum = 0;
    }
    return sum;
}
console.log(sumTo(4), "sum from 1 to n" );

// 3. Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!

function doFactorial(n) {
    if (n > 0) {
       result = n * doFactorial(n - 1);
    } else {
        result = 1;
    }
    return result;
}
console.log(doFactorial(4), "factorial");

// 4. Заполнить массив случайными числами:
 a =  new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(new Array(3), new Array(3))));

//a = [new Array(1), new Array(1), [new Array(1), [new Array(2), new Array(3)]]];

function fillArray(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] && Array.isArray(arr[i])) {
            fillArray(arr[i]);
        } else {
            arr[i] = Math.round(Math.random() * (10 - 1) + 1);
        }
    }
    
    return arr;
}
console.log(fillArray(a),"result fillArray ");
