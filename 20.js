/* https://gist.github.com/codedokode/ce30e7a036f18f416ae0#%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BA%D0%B8-%D0%BD%D0%B0-js */

/* == 1. Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8

*/
// const generator = sequence(10, 3);
// const generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13
// console.log(generator2()); // 7
// console.log(generator()); // 16
// console.log(generator2()); // 8

/* -- */
function sequence(start = 0, step = 1) {
    let i = 0;

    return function () {
        const result = start + step * i;

        i++;

        return result;
    };
}
/* --------------------------------------------------------------- */

/* == 2. Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки: */
// const generator3 = sequence(0, 2);

// console.log(take(generator3, 5)); // [0, 2, 4, 6, 8 ]

/* -- */
function take(gen, x = 1) {
    let i = 0;
    let arr = [];

    while (i < x) {
        i++;

        arr.push(gen());
    }

    return arr;
}
/* --------------------------------------------------------------- */

/* == 3. Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. */
// возведение в квадрат
function square(x) {
    return x * x;
}

var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]

/* -- */
function map(fn, array) {
    let temp = [];

    for (let element = 0; element < array.length; element++) {
        temp.push(fn(array[element]));
    }

    return temp;
}
/* --------------------------------------------------------------- */

/* == 4. Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в первом задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. */

var gen = sequence(1, 1);

function square(x) {
    return x * x;
}

var squareGen = fmap(square, gen);

// console.log(1, squareGen()); // 1
// console.log(4, squareGen()); // 4
// console.log(9, squareGen()); // 9
// console.log(16, squareGen()); // 16

/* -- */
function fmap(fn, gen) {
    return function (...arguments) {
        return fn(gen.call(gen, ...arguments));
    };
}
/* --------------------------------------------------------------- */

/* == 5. А, еще, сделай тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове эти аргументы бы передавались функции gen. Аргументов может быть любое количество.

Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов, то стоит погуглить про псевдопеременную arguments (псевдопеременная значит, что она выглядит как переменная, но формально ей не является). Чтобы понять, как вызвать функцию с заранее неизвестным числом аргументов, можно погуглить Function.prototype.call и Function.prototype.apply. В JS функции - это объекты, и у них есть полезные методы и свойства.*/

function add(a, b) {
    return a + b;
}

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
/* --------------------------------------------------------------- */
