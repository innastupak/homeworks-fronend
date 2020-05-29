// 1. Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). При нажатии на Click - counter увеличивается. 
// При перезагрузке страницы counter должен сохраняться.

// 2. Создать кнопку ClearCounters()

// 3. Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.

if(localStorage.counterValue){
    document.getElementById("counter").innerText = parseInt(localStorage.counterValue);
    var counter = parseInt(localStorage.counterValue);;
} else{
	document.getElementById("counter").innerText = 0;
    var counter = 0;
};

var btnPlus = document.getElementById("plus");

btnPlus.addEventListener("click", function(){
    counter += 1;
    document.getElementById("counter").innerText = counter;
    localStorage.setItem("counterValue", counter); 
});

var btnClear = document.getElementById("clear");

btnClear.addEventListener("click", function(){
    counter = 0;
    document.getElementById("counter").innerText = counter;
    localStorage.counterValue = 0;
});

// Ясли я правильно поняла 3 задание ))) то решение вот: 

var btnSetCounter = document.getElementById("setcounter");

function setCounter(idBlock){
    var counterNew = parseInt(prompt("Введите число"));
    counter = counterNew;
    document.getElementById(idBlock).innerText = counterNew;
    localStorage.counterValue = counterNew;
}

btnSetCounter.addEventListener("click", function(){
    setCounter("counter");
});
