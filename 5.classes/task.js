//ЗАДАНИЕ 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }

    //Нельзя улучшить новое издание, и бесполезно подклеивать полностью уничтоженное.
    //  Для лучшего контроля над состоянием создайте «сеттер» для свойства `state`, 
    //принимающий в качестве аргумента новое состояние печатного издания (число).   

    get state() {
        return this._state
    }
    set state(number) {
        this._state 
    }

    setnewState(number) {
        if (number < 0) {
            this.state = 0
            return this.state
        }
        else if (number > 100) {
            this.state = 100
            return this.state
        }
        else {
            this.state = number
            return this.state
        }

    }
}



const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log("State" + sherlock.state); //100
//sherlock.fix();
//console.log(sherlock.state); //100
console.log("Установление метода" + sherlock.setnewState(20));
console.log("Новое state" + sherlock.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}


const Cosmopolitan = new Magazine(
    "Космополитан",
    1972,
    168
);
console.log(Cosmopolitan)


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.authorName = author;
        this.type = 'book';
    }

}

const Book1 = new Book(
    "Замятин",
    "Мы",
    1911,
    200
);
console.log(Book1)


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super( author, name, releaseDate, pagesCount);
        this.type = '"novel"';
    }
}

const ZovKtulhu = new NovelBook(
    "Лавкрафт",
    "Зов Ктулху",
    1980,
    180,
);
console.log(ZovKtulhu);

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = '"fantastic"';
    }

}
const LordOfTheRings = new FantasticBook(
    "Толкин",
    "Властелин колец",
    1950,
    2000,
);
console.log(LordOfTheRings);

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = '"detective"';
    }
}

const SecretHistory = new DetectiveBook(
    "Донна Тарт",
    "Тайная история",
    1990,
    450,
);
console.log(SecretHistory);

//ЗАДАНИЕ 2

class Library {
    constructor(name, books) {
        this.name = "name";
        this.books = [];
    }
    // Конструктор класса должен принимать название библиотеки `name` (строка). Значением свойства `books` должен быть пустой массив.
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let key in this.books) {
            if (this.books[key][type] == value) {
                return this.books[key]
            }
        }
        return null
    }

    giveBookByName(bookName) {
        for (let key in this.books) {
            console.log(this.books[key].name);
            if (this.books[key].name == bookName) {
                return this.books[key]
            }
            delete this.books[key].name
        }
        return null
    }
}


const library = new Library("Библиотека имени Ленина", [])


library.addBook(
    new DetectiveBook(
        "Донна Тарт",
        "Тайная история",
        1990,
        450,
    )
);


library.addBook(
    new FantasticBook(
        "Толкин",
        "Властелин колец",
        1950,
        2000,
    )
);


library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);


console.log(library);
console.log(library.books);
console.log(library.findBookBy("name", "Артур Конан Дойл"));


console.log(library.giveBookByName("Властелин колец"));
console.log(library.books);

// ЗАДАНИЕ 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }


    // Предмет + оценка

    addMark(mark, value) {
        for (let key in this.subjects) {
            if (this.marks === undefined && mark > 0 && mark < 6 && this.subjects[key].subjectName == value) {
                this.marks = [mark];
                console.log(this.marks);
                this.subjects[key].subjectMark.push(mark);
                return this.subjects[key]
            }
            else if (mark > 0 && mark < 6 && this.subjects[key].subjectName == value) {
                this.marks.push(mark);
                console.log(this.marks);
                this.subjects[key].subjectMark.push(mark);
                return this.subjects[key]
            }
            else if (mark < 0 || mark > 5) {
                return "Ошибка, оценка должна быть числом от 1 до 5"
            }
        }
        return "Несуществующий предмет"
    }


    setSubject(name) {
        let subject = {
            subjectMark: [],
            subjectName: name
        }

        if (this.subjects === undefined) {
            this.subjects = [subject];
            return this.subjects
        } else {
            this.subjects.push(subject)
            return this.subjects
        }
    }

    getAverageBySubject(value) {
        for (let key in this.subjects) {
            if (this.subjects[key].subjectName == value && this.subjects[key].subjectMark.length > 0) {
                let elementsCount = this.subjects[key].subjectMark.length;
                let sum = this.subjects[key].subjectMark.reduce(function (result, elem) {
                    return result + elem;
                }, 0);
                let result = sum / elementsCount;
                return result
            }
            else if (this.subjects[key].subjectName == value && this.subjects[key].subjectMark.length <= 0) {
                return "Оценок нет"
            }
        }
        return "Несуществующий предмет"
    }

    getAverage() {
        console.log(this.marks);
        let i
        for (i = 0; i < this.marks.length; i++) {
            if (this.marks.length > 0) {
                let elementsCount = this.marks.length;
                let sum = this.marks.reduce(function (result, elem) {
                    return result + elem;
                }, 0);
                let result = sum / elementsCount;
                console.log(result)
                return result
            }
        }

    }
    exclude(reason) {
        delete this.subjects;
        delete this.marks;
        this.excluded = reason
    }

}



const student1 = new Student(
    "Tony",
    "male",
    37
);

const student2 = new Student(
    "Buzz",
    "female",
    35
);

student1.setSubject("algebra");
student1.setSubject("history");
student1.setSubject("biology");
student1.addMark(4, "algebra");
student1.addMark(5, "algebra");
console.log(student1.addMark(5, "algebra"));
console.log(student1.addMark(3, "history"));
console.log((student1.addMark(5, "literature")));
console.log((student1.addMark(7, "algebra"))); 
console.log(student1.getAverageBySubject("algebra"));
console.log(student1.getAverageBySubject("geography"));
console.log(student1.getAverageBySubject("biology"));
console.log(student1.getAverage());
console.log(student1);
student1.exclude("low grades");
console.log(student1);