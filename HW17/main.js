// 1. Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). При нажатии на Click - counter увеличивается. 
// При перезагрузке страницы counter должен сохраняться.

// 2. Создать кнопку ClearCounters()

// 3. Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.


var counters = document.querySelectorAll(".counter");
var values = document.querySelectorAll(".value");
var btnPlus = document.querySelectorAll(".plus");

for (let i = 0; i < counters.length; i++) {

    if (localStorage != null && localStorage.getItem("counterValue" + counters[i].id)) {
        values[i].innerText = localStorage.getItem("counterValue" + counters[i].id);
    } else {
        values[i].innerText = 0;
    };

    // Increase counter +1

    btnPlus[i].addEventListener('click', function () {
        values[i].textContent = parseInt(values[i].textContent) + 1;
        let counterId = counters[i].getAttribute("id");
        localStorage.setItem("counterValue" + counterId, values[i].textContent);
    });
}

// Clear all counters
var btnClear = document.getElementById("clear");

btnClear.addEventListener("click", function () {
    values.forEach(value => {
        value.innerText = 0;
    })
    localStorage.clear();
});

// Set counter's value
let btnSetCounter = document.getElementById("setcounter");
btnSetCounter.addEventListener("click", function () {
    let counterId = parseInt(prompt("Введите Counter ID"));
    let newValue;
    if (isNaN(counterId) || counterId > counters.length) {
        alert("Wrong ID");
    } else {
        newValue = parseInt(prompt("Enter counter's value (number)"));
        if (isNaN(newValue)) {
            alert("Wrong counter's value.");
        } else {
            values[counterId - 1].innerText = newValue;
            localStorage.setItem("counterValue" + counterId, newValue);
        }
    }
});
