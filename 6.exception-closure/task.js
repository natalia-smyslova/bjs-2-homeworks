// ЗАДАНИЕ 1

// Напишите функцию `parseCount` 
// Аргументом функции является значение, которое необходимо распарсить.

function parseCount(value) {

    //Для парсинга воспользуйтесь функцией `Number.parseInt`

    const parsed = Number.parseInt(value);

    // Если результатом парсинга является значение `NaN`, то выбрасывайте исключение с ошибкой *"Невалидное значение"

    if (Number.isNaN(parsed) == true) {
        throw ("Невалидное значение")
    }
    if (Number.isNaN(parsed) == false) {
        return parsed
    }
    //Верните результат парсинга из функции.
}

console.log(parseCount("0xF"));



// Напишите функцию `validateCount`
// Аргументом функции является значение, которое необходимо распарсить

function validateCount(value) {

    //Попробуйте распарсить значение с помощью функции `parseCount`.
    try {
        parseCount(value)
    }
    catch (e) {
        console.log(e)
        return e
    }
    return parseCount(value)
}

validateCount("jfkdsl");
console.log(validateCount("jfkdsl"));






// ЗАДАНИЕ 2


// Напишите класс `Triangle`
// Конструктор класса должен принимать 3 стороны треугольника.
// В случае нарушения правила существования треугольника 
// выбрасывайте исключение с ошибкой *"Треугольник с такими сторонами не существует"

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw ("Треугольник с такими сторонами не существует")
        }
        else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    // Метод `getPerimeter` должен возвращать периметр треугольника.
    getPerimeter() {
        let P = (this.a + this.b + this.c);
        this.Perimeter = P
        return P
    }

    // Метод `getArea` должен возвращать площадь треугольника
    getArea() {
        let PP = this.Perimeter * 0.5;
        let S = Math.sqrt(PP * (PP - this.a) * (PP - this.b) * (PP - this.c));
        return S.toFixed(3)
    }

    // Напишите функцию `getTriangle`
    // Аргументами функции являются 3 значения длин сторон.

    //Попытайтесь вернуть новый объект треугольника
    // В случае перехвата исключения возвращайте объект с двумя методами
    // `getArea` и `getPerimeter`, которые возвращают строку: *"Ошибка! Треугольник не существует"
}

const newTriangle = new Triangle(
    6,
    10,
    15
)
console.log(newTriangle);
console.log(newTriangle.getPerimeter());
console.log(newTriangle.getArea());

function getTriangle(a, b, c) {
    try {
        const SecondTriangle = new Triangle(
            a,
            b,
            c
        );
        return SecondTriangle
    }
    catch (e) {
        console.log(e)
        SecondTriangle = {
            getPerimeter(){
             return "Ошибка! Треугольник не существует"
            },

            getArea(){
                return "Ошибка! Треугольник не существует"
             }
        }
        return SecondTriangle
    };
}


getTriangle(1, 300, 100);
console.log(getTriangle(1, 300, 100));
getTriangle(2, 5, 5);
console.log(getTriangle(2, 5, 5));
console.log(SecondTriangle.getPerimeter());
console.log(SecondTriangle.getArea());