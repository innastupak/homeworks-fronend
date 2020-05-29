// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.

var elem = document.getElementById('elem');

function func() {
    alert(this.value);
}

func.call(elem); //тут должно вывести value инпута

// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

var elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

func.call(elem, "Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'

// 3.  Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply().

var elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ["Иванов", "Иван"]); //тут должно вывести 'привет, Иванов Иван'

// Напишите в указанном месте конструкцию с методом bind() так, 
// чтобы this внутри функции func всегда указывал на инпут из переменной elem.

var elem = document.getElementById('elem');

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()
var func = func.bind(elem);


func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'