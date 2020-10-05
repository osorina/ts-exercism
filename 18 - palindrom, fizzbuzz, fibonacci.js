/* == Палиндром (слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном.)
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
 */

const strings = ['tenet', 'improve', 'glg '];

console.log(strings.map((string) => isPalindrome(string)));

function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

/* == FizzBuzz
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
    вывод fizz вместо чисел, кратных 3;
    вывод buzz вместо чисел, кратных 5;
    вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/

fizzbuzz(16);

function fizzbuzz(number) {
    const numbers = new Array(number).fill().map((i, index) => {
        const value = index + 1;
        if (value % 3 === 0 && value % 5 === 0) return 'fizzbuzz';
        else if (value % 3 === 0) return 'fizz';
        else if (value % 5 === 0) return 'buzz';
        return value;
    });
    // .forEach((e) => console.log(e));

    // body
}

/* == Анаграмма (Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.)
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/

const test = [
    ['finder', 'friend'],
    ['hello', 'bye'],
];

// test.forEach((testCase) => console.log(isAnagram(testCase)));

function isAnagram([str1, str2] = []) {
    if (!str1 || !str2) return false;

    const getSortedString = (str) => str.toLowerCase().split('').sort().join('');

    return getSortedString(str1) === getSortedString(str2);
}

/* == Поиск гласных
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
*/
// console.log(getVowelsCount('dfffdfdfa'));
// console.log(getVowelsCount('euigh'));

function getVowelsCount(str) {
    return str.replace(/[^aeiouAEIOU]/g, '').length;
}

/* == Фибоначчи (это ряд чисел, где каждое последующее является суммой двух предыдущих. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.)
Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.

Эта задача включает прохождение по циклу такое количество раз, которое указано в аргументе, с возвратом значения на соответствующей позиции. Этот способ постановки задачи требует использования циклов. Если вместо этого вы используете рекурсию, это может понравиться интервьюеру и дать вам несколько дополнительных очков.

fibonacci(3) // -> 2
*/

console.log(fibonacci(3)); // -> 2

function fibonacci(n = 3, length = 10) {
    if (n < 2) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}
