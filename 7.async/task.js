//Необходимо написать класс *AlarmClock* со следующими методами:


class AlarmClock {

    //`constructor` - выделяет память для объекта. 
    //Создайте свойство для хранения коллекции звонков `alarmCollection` с начальным значением пустого массива.
    //Создайте свойство `timerId` для хранения `id` таймера без начального значения.
    constructor() {
        this.alarmCollection = [];
        this.timerId
    }

    //`addClock` - добавляет новый звонок в коллекцию существующих. 

    // Принимает параметр времени в формате `HH:MM` - время, когда должно запуститься действие.
    // Принимает параметр функции-колбека - действие, которое должно запуститься.
    // Принимает параметр идентификатора создаваемого звонка.

    addClock(time, func, identificator) {

        //Проверьте, передан ли параметр `id`. Если параметр не передан, выполните выброс ошибки (с помощью `throw new Error('error text')`).

        // Проверьте, есть ли какой-нибудь звонок с уже существующим `id`
        //  Если есть, выведите ошибку (с помощью `console.error()`) 
        // и завершите выполнение метода. Программа должна продолжать работать, но звонок не должен быть добавлен.

        for (let key in this.alarmCollection) {
            if (identificator == undefined) {
                throw new Error("Параметр не передан")
            }
            if (this.alarmCollection[key].id == identificator) {
                console.error("Будильник с таким id уже существует!")
            }
            else {

                //Перед завершением метода добавьте в массив звонков объект со свойствами `id`, `time`, `callback`.

                let firstAlarm = {
                    id: identificator,
                    time: time,
                    callback: func
                };
                this.alarmCollection.push(firstAlarm)
            }
        }

    }


    //`removeClock` - удаляет определённый звонок.
    //Принимает `id` звонка, который следует удалить.
    removeClock(identificator) {

        //Удалите из массива звонков тот, у которого `id` совпадает с текущим. Например, можно использовать метод `filter`.

        //Array.filter(callback, contextObject);

        let newColletion = this.alarmCollection.id.filter((element) => { return element != identificator })

        //Верните логическое значение об успешности/провале удаления объекта звонка из общего массива.

        // ЗДЕСЬ НАДО ДЕЙСТВОВАТЬ ЧЕРЕЗ ДЛИНУ length
        if (newColletion.length == this.alarmCollection.length) {
            return false
        }
        else {
            this.alarmCollection = newColletion
            return true
        }
    }

    //`getCurrentFormattedTime` - возвращает текущее время в строковом формате `HH:MM`

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })
    }

    // `start` - запускает все звонки
    start() {

        //Создайте функцию проверки (`checkClock`), которая принимает звонок и проверяет:

        function checkClock() {

            //если текущее время совпадает со временем звонка, то вызывайте колбек.

            const timeRightNow = Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })

            for (let key in this.alarmCollection) {
                if (timeRightNow == this.alarmCollection[key].time) {
                    this.alarmCollection[key].callback()
                }

                //Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
                //В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию `checkClock`.
                else {
                    setInterval(() => this.alarmCollection.forEach(element, () => { checkClock() }), 10000);
                    // this.alarmCollection[key].id = setInterval(() => this.alarmCollection.forEach(element, () => { checkClock() }), 10000);
                }

                // Результат функции `setInterval` сохраните в свойстве идентификатора текущего таймера.


        //`stop` - останавливает выполнение всех звонков

        stop() {
            //Сделайте проверку существования идентификатора текущего таймера.

            //Если у идентификатора текущего таймера есть значение, то вызовите функцию `clearInterval` для удаления интервала,
            //а так же удалите значение из свойства "идентификатор текущего таймера".
            function clearInterval() {

            }
        }


        //  `printAlarms` - печатает все звонки

        printAlarms() {

            //С помощью метода `forEach` выведите информацию о каждом звонке (`id` и `time`).

            // arr.forEach(function callback(currentValue, index, array) {
            //your iterator
            //}[, thisArg]);

            this.alarmCollection.forEach((element =>
                console.log("Будильник" + " " + this.alarmCollection.id + "заведен на" + " " + this.alarmCollection.time)));

            // КАК ОБРАТИТЬСЯ К ВРЕМЕНИ И ID??

        }

        //`clearAlarms` - удаляет все звонки
        // Вызывает метод остановки интервала.
        //Удаляет все звонки.
        clearAlarms() {

            //clearInterval(intervalID)
            // delete this.alarmCollection
            // УДАЛЯЕТСЯ СВОЙСТВО ИЛИ СОДЕРЖИМОЕ СВОЙСТВА (ЗВОНКИ)?

        }

    }

// Напишите пример использования класса *AlarmClock* (реализуйте и запустите функцию `testCase`): 
// НЕ ПОНИМАЮ, ЧТО ДОЛЖНА ДЕЛАТЬ ТЕСТВАЯ ФУНКЦИЯ

//Создайте объект класса `AlarmClock`.

let phoneAlarm = new AlarmClock();

// Добавьте в созданный объект новый звонок с текущим временем и колбеком вывода текста на консоль. 
// Так, чтобы после запуска, функция вывода *выполнилась несколько раз*.
phoneAlarm.addClock("15:31", () => { setInterval(() => console.log("Пора вставать"), 1000) }, 1);

//Добавьте ещё один звонок со временем +1 минуты от текущего времени и колбеком: вывода текста на консоль,
//а так же удалением этого звонка. Так, чтобы после запуска функция вывода *выполнилась один раз, а потом удалилась*.

phoneAlarm.addClock("15:31", () => { setInterval(() => console.log("Давай, вставай уже!"), 1000); phoneAlarm.removeClock(2) }, 2);


//Добавьте ещё один звонок со временем +2 минут от текущего времени и колбеком: вывода текста на консоль, 
//а так же остановки всех звонков, очистки всех звонков и выводом всех звонков.
// Так, чтобы после запуска функция вывода *выполнилась один раз,
//потом остановился интервал, все звонки очистились, и ничего не вывелось*

phoneAlarm.addClock("15:31", () => {
    setInterval(() => console.log("Вставай, а то проспишь!"), 120000);
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms()
}, 3);

//Напечатайте все звонки (должно вывестись 3 звонка).

phoneAlarm.printAlarms();

//Запустите выполнение ваших звонков.

phoneAlarm.start();