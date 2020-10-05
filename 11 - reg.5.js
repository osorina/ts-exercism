/* == НА ПОЗИТИВНЫЙ И НЕГАТИВНЫЙ ПРОСМОТР */
/* С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак '!'. То есть из 'aaab' нужно сделать '!b'.  */
console.log('aaab aaa'.replace(/\a{3}(?=b)/g, '!'));

/*  С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак '!'. То есть из, к примеру, 'aaaw' нужно сделать '!w', а 'aaab' не поменяется. */
console.log('aaaw aaab aaac'.replace(/a{3}(?!b)/g, '!'));

/* НА REPLACE */
/* Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты. */
console.log('2  41 21  12'.replace(/\d+/g, (m) => m * m));

/* Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза. Пример: из строки 2aaa'3'bbb'4' сделаем строку 2aaa'6'bbb'8'. */
// console.log("2aaa'3'bbb'4'".replace(/'(\d+)'/g, (m, m2) => `'${m2 * 2}'`));
console.log("2aaa'3'bbb'4'".replace(/\d+(?=')/g, (m) => m * 2));

/* Дана строка в которой есть вставки {{текст}}. Найдите все такие вставки и поменяйте в них порядок букв на обратный (то есть из 'текст' нужно сделать 'тскет'). */
// console.log("2aaa'3'{{текст}}'4'".replace(/\w+(?=})/g, (m) => '!'));
console.log(
    "2aaa'3'{{текст}}'4'".replace(/[а-яa-zA-Z]+(?=})/g, (m) => m.split('').reverse().join('')),
);

/* Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции в виде '23 + 35 = 58'. */
console.log(
    '23 + 35 ='.replace(
        /(\d+)\s*\+\s*(\d+)\s+\=/g,
        (r, m1, m2) => r + ' ' + (parseInt(m1) + parseInt(m2)),
    ),
);
/* == */