//Необходимо написать класс *AlarmClock* со следующими методами:


class AlarmClock {

    //`constructor` - выделяет память для объекта. 
    //Создайте свойство для хранения коллекции звонков `alarmCollection` с начальным значением пустого массива.
    //Создайте свойство `timerId` для хранения `id` таймера без начального значения.
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }

    //`addClock` - добавляет новый звонок в коллекцию существующих. 

    // Принимает параметр времени в формате `HH:MM` - время, когда должно запуститься действие.
    // Принимает параметр функции-колбека - действие, которое должно запуститься.
    // Принимает параметр идентификатора создаваемого звонка.

    addClock(time, func, id) {
        //Проверьте, передан ли параметр `id`. Если параметр не передан, выполните выброс ошибки (с помощью `throw new Error('error text')`).
        if (id === undefined) {
            throw new Error("Параметр не передан");
        }

        //   Проверьте, есть ли какой-нибудь звонок с уже существующим `id`
        //  Если есть, выведите ошибку (с помощью `console.error()`)
        // и завершите выполнение метода. Программа должна продолжать работать, но звонок не должен быть добавлен. 
        if (this.alarmCollection[id] !== undefined) {
            console.error("Будильник с таким id уже существует!");
            return false;
        }

        this.alarmCollection[id] = {
            id: id,
            time: time,
            callback: func
        };

        return true;
    }


    //`removeClock` - удаляет определённый звонок.
    //Принимает `id` звонка, который следует удалить.
    removeClock(id) {
        if (this.alarmCollection[id] === undefined)
            return false;

        delete this.alarmCollection[id];
        return true;

        //Удалите из массива звонков тот, у которого `id` совпадает с текущим. Например, можно использовать метод `filter`.

        //Верните логическое значение об успешности/провале удаления объекта звонка из общего массива.

    }

    //`getCurrentFormattedTime` - возвращает текущее время в строковом формате `HH:MM`
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });
    }

    start() {
        // Создайте функцию проверки (`checkClock`), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
        function checkClock(alarm) {
            if (alarm.time == new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }))
                alarm.callback();
        }

        // Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
        // Результат функции `setInterval` сохраните в свойстве идентификатора текущего таймера. 
        if (this.timerId === undefined) {
            this.timerId = setInterval(function (alarmClock) {Ы
                // В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию `checkClock`.       
                alarmClock.alarmCollection.forEach(checkClock);
            }, 60000, this);
        }
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }
    printAlarms() {
        console.log('Alarms list:');
        this.alarmCollection.forEach(function (alarm) { console.log(alarm.id + " " + alarm.time); });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();
    console.log(phoneAlarm.getCurrentFormattedTime());

    // Добавьте в созданный объект новый звонок с текущим временем и колбеком вывода текста на консоль. 
    // Так, чтобы после запуска, функция вывода *выполнилась несколько раз*.
    phoneAlarm.addClock("13:36", () => { console.log("Пора вставать") }, 1);

    //Добавьте ещё один звонок со временем +1 минуты от текущего времени и колбеком: вывода текста на консоль,
    //а так же удалением этого звонка. Так, чтобы после запуска функция вывода *выполнилась один раз, а потом удалилась*.

    phoneAlarm.addClock("13:37", function () {
        console.log("Давай, вставай уже!");
        phoneAlarm.removeClock(2);
    }, 2);


    //Добавьте ещё один звонок со временем +2 минут от текущего времени и колбеком: вывода текста на консоль, 
    //а так же остановки всех звонков, очистки всех звонков и выводом всех звонков.
    // Так, чтобы после запуска функция вывода *выполнилась один раз,
    //потом остановился интервал, все звонки очистились, и ничего не вывелось*

    phoneAlarm.addClock("13:38", function () {
        console.log("Проснись и пой");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    //Напечатайте все звонки (должно вывестись 3 звонка).

    phoneAlarm.printAlarms();

    //Запустите выполнение ваших звонков.

    phoneAlarm.start();
}

testCase();