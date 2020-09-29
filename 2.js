/* 2. Напишите функцию, которая пишет в консоль число в заданном диапазоне, в случае, если оно успешно делится или не делится на число, с остатком или без остатка в зависимости от параметров. */
(function (options = { min: 45, max: 68, int: 5, remnant: true }, callback = console.log) {
    const result = Array(options.max - options.min + 1)
        .fill()
        .map((_, index) => options.min + index)
        .filter((num) => num % options.int == options.remnant);

    callback(result);

    return result;
})();
