/* 3. Есть ферма животных, у всех животных есть имена и возраст. Животные бывают разных типов: Кошки, Собаки, Коровы. У каждого животного могут быть дети. Если животное является родителем этих детей, в свою очередь глубина семейного древа может достигать N либо 0.

Опишите структуры данных для фермы животных и напишите функцию, которая делает подсчёт всех возрастов животных и выводит общий возраст для всей фермы. */
// let cats = generateAnimals('Cat', 5);
// addChildsTo(cats, 10, 'Cat');

// let dogs = generateAnimals('Dog', 3);
// addChildsTo(dogs, 3, 'Dog');

// let cows = generateAnimals('Cow', 7);
// addChildsTo(cows, 1, 'Dog');

// let animals = [...cats, ...dogs, ...cows];

// console.log(getAnimalsAge(animals)); // 411
class Animal {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.age = id;
    }
}

class Cat extends Animal {
    constructor(id) {
        super(id, 'Cat');
    }
}
class Dog extends Animal {
    constructor(id) {
        super(id, 'Dog');
    }
}

class Cow extends Animal {
    constructor(id) {
        super(id, 'Cow');
    }
}

function generateAnimals(type, count = 0, iterator = 0) {
    let generated = [];

    for (let i = iterator + 1; i <= count + iterator; i++) {
        switch (type) {
            case 'Dog':
                generated.push(new Dog(i));
                break;
            case 'Cat':
                generated.push(new Cat(i));
                break;
            case 'Cow':
                generated.push(new Cow(i));
                break;
            default:
                break;
        }
    }

    return generated;
}

function addChildsTo(array, count, type) {
    const currentType = array[0].type;

    if (currentType.toLowerCase() !== type.toLowerCase()) {
        console.warn('Some kind of biohacking expiriments... This is only allowed in China');

        return array;
    }

    array.sort((a, b) => a.id - b.id);

    const iterator = array[array.length - 1].id;
    const newbie = generateAnimals(type, count, iterator);

    return [...array, ...newbie];
}

function getAnimalsAge(animals = []) {
    return animals.reduce((total, animal) => (total += animal.age), 0);
}

const cats = addChildsTo(generateAnimals('Cat', 3), 3, 'Cat');
const dogs = addChildsTo(generateAnimals('Dog', 2), 5, 'Dog');
const cows = addChildsTo(generateAnimals('Cow', 2), 5, 'Dog');
const animals = [...cats, ...dogs, ...cows];

console.log(getAnimalsAge(animals));
