// Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
// Изменяя состояние range меняется состояние поля ввода number. И наоборот.

// Реализовать блок-диаграмму, который в пикселях будет отображать значение range. Например - range выбрали число 83,
// высота блока-диаграммы будет 83 пикселя.

// Alt Text
// Красный блок - количество комиссии. Комиссия вычисляется по формуле:

// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%
// Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108.
// // Высота красного блока - 8px

var inputRange = document.querySelector("input[type=range]");
var inputNumber = document.querySelector("input[type=number]");
var rangeDiagr = document.querySelector(".range");
var comisDiagr = document.querySelector(".comission");

function changeRangeDiagr() {
    rangeDiagr.style.height = inputRange.value + "px";
}

function changeComisDiagr() {
    if (inputRange.value > 0 && inputRange.value <= 20 ){
        comisDiagr.style.height = "2px";
    } else if (inputRange.value > 20 && inputRange.value <= 50){
        comisDiagr.style.height = "4px";
    } else if (inputRange.value > 50 && inputRange.value <= 75){
        comisDiagr.style.height = "6px";
    } else if (inputRange.value > 75){
        comisDiagr.style.height = "8px";
    } else {
        comisDiagr.style.height = "0";
    }
}

inputRange.addEventListener("change", function () {
    inputNumber.value = this.value;
    changeRangeDiagr();
    changeComisDiagr();
});

inputNumber.addEventListener("input", function () {
    inputRange.value = this.value;
    changeRangeDiagr();
    changeComisDiagr();
});







