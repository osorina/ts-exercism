/* 1. Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. */
const array = [1, 4, 3, 0, 4, 5, 4];

const result = array.reduce((total, number) => {
    if (number % 2 === 0) {
        total += Math.sqrt(number);
    }

    return total;
}, 0);

console.log('result', result);
