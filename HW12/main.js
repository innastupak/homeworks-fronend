// Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval. 

inputList = document.querySelectorAll("input");

function setTextareaValue() {

    inputValues = [];
    for (i = 0; i < inputList.length; i++) {
        if (inputList[i].value !== "") {
            inputValues.push(inputList[i].value);
        }
    }
    textareaValue = inputValues.join(', ');

    document.querySelector('textarea').value = textareaValue;

}

setInterval(setTextareaValue, 3000);

