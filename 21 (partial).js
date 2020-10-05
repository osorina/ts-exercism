/* == Частичное применение (partial application)
Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. Пример:

Есть функция с аргументами:
f1(a, d, c, d)

Мы можем с помощью partial сделать из нее функцию с меньшим числом аргументов, заранее задав значения для нескольких из них, например:
var f2 = partial(f1, 1, 2); // фиксируем a = 1, b = 2

И вызов: f2(x, y)
будет равносилен вызову: f1(1, 2, x, y)

Кстати, имеющийся в новых версиях JS метод bind() тоже может делать частичное применение: http://frontender.info/partial-application-in-javascript-using-bind/ Но ты должен обойтись без его использования, и написать свой велосипед.
--------------------------------------------- */

function add(a, b) {
    return a + b;
}
function mult(a, b, c, d) {
    return a * b * c * d;
}

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6

function partial(fn, ...fixed) {
    return function (...last) {
        return fn(...fixed, ...last);
    };
}
