/* 7 */

/* == НА '.', СИМВОЛЫ */
/* Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'. */
console.log('aba aca aea abba adca abea'.match(/a.b/g));

/* Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'. */
console.log('aba aca aea abba adca abea'.match(/a..a/g));

/* Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca. */
console.log('aba aca aea abba adca abea'.match(/ab.a/g));
/* == */

/* == НА '+', '*', '?', () */
/* Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */
console.log('ab abab abab abababab abea'.match(/ab+a/g));

/* Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ни одного раза), буква 'a'. */
console.log('ab abab abab abababab abea'.match(/ab*a/g));

/*  Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'. */
console.log('ab abab abab abababab abea'.match(/ab?a/g));

/* Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea */
console.log('ab abab abab abababab abea'.match(/ab*a/g));

/* Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз. */
console.log('ab abab abab abababab abea'.match(/(ab)+/g));
/* == */

/* == НА ЭКРАНИРОВКУ */
/* Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные. */
console.log('a.a aba aea'.match(/a\.a/g));

/* Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные. */
console.log('2+3 223 2223'.match(/2\+3/g));

/* Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество). */
console.log('23 2+3 2++3 2+++3 345 567'.match(/2\++3/g));

/* Дана строка '23 2+3 2++3 2+++3 445 677'. Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные. */
console.log('23 2+3 2++3 2+++3 445 677'.match(/2\+*3/g));

/* Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные. */
console.log('*+ *q+ *qq+ *qqq+ *qqq qqq+'.match(/\*q+\+/g));
/* == */

/* == НА ЖАДНОСТЬ */
/* Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме a). */
console.log('aba accca azzza wwwwa'.replace(/^a.+?a$/, '!'));
/* == */
