// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в прототипе),
// иначе - запросить ввод новых данных через метод input() класса SuperMath.
// Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает


function SuperMath() {
}

// obj = {x: 12, y: 3, znak: "/"};

SuperMath.prototype.input = function () {
    obj = {
        x: parseInt(prompt("Введите число x")),
        y: parseInt(prompt("Введите число y")),
        znak: prompt("Введите знак + - / * %")
    };
    if (obj.znak === "+" || obj.znak === "-" || obj.znak === "/" || obj.znak === "*" || obj.znak === "%") {
        return obj;
    } else
        console.log("Вы ввели неверный ZNAK. Попробуйте снова");
        return false;
};

SuperMath.prototype.znak = function (obj) {
     switch (obj.znak) {
        case "+":
            return obj.x + obj.y;
        case "-":
            return obj.x - obj.y;
        case "*":
            return obj.x * obj.y;
        case "/":
            return obj.x / obj.y;
        case "%":
            return obj.x % obj.y;
    }
};

p = new SuperMath();

p.check = function (obj) {
    if (confirm("Вы хотите произвести действие " + obj.znak + " c " + obj.x + " и " + obj.y + " ?") === true) {
        return this.znak(obj);
    } else {
        obj = this.input();
        return this.znak(obj);
    }
};

if (p.input() !== false) {
    result = p.check(obj);
    console.log(result);
}



