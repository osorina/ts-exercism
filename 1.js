/* 1. Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. */
const array = [1, 4, 3, 0, 4, 5, 4];

const sum = array.reduce((accumulator, number) => {
    if (number % 2 === 0) {
        accumulator += Math.sqrt(number);
    }

    return accumulator;
}, 0);
