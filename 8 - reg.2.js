/* == НА {} */
/*  Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их. */
console.log('aa aba abba abbba abbbba abbbbba'.match(/ab{2,4}a/g));

/*  Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается менее 3-х раз (включительно) */
console.log('aa aba abba abbba abbbba abbbbba'.match(/ab{0,3}a/g));

/* Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно). */
console.log('aa aba abba abbba abbbba abbbbba'.match(/ab{4,}a/g));
/* == */

/* == НА \s, \S, \w, \W, \d, \D */
/* Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра. */
console.log('a1a a2a a3a a4a a5a aba aca'.match(/a\da/g));

/* Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр */
console.log('a1a a22a a333a a4444a a55555a aba aca'.match(/a\d+a/g));

/* Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa'). */
console.log('aa a1a a22a a333a a4444a a55555a aba aca'.match(/a\d*a/g));

/* Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число. */
console.log('avb a1b a2b a3b a4b a5b abb acb'.match(/a\Db/g));

/* Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра. */
console.log('ave a#b a2b a$b a4b a5b a-b acb'.match(/a\Wb/g));

/* Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'. Напишите регулярку, которая заменит все пробелы на '!'. */
console.log('ave a#a a2a a$a a4a a5a a-a aca'.replace(/\s/g, '!'));
/* == */

/* == НА [], '^' - НЕ, [a-zA-Z], КИРИЛЛИЦУ */
/* Дана строка 'aba aea aca aza axa'. Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных. */
console.log('aba aea aca aza axa'.match(/a[bex]a/g));

/*  Дана строка 'aba aea aca aza axa a.a a+a a*a'. Напишите регулярку, которая найдет строки aba, a.a, a+a, a*a, не затронув остальных. */
console.log('aba aea aca aza axa a.a a+a a*a'.match(/a[b.+*]a/g));

/* Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - цифра от 3-х до 7-ми. */
console.log('a1a a2a a3a a4a a5a a6a a7a aba'.match(/a[3-7]a/g));

/* Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до g */
console.log('aaa aba aca ada ana a6a aga '.match(/a[a-g]a/g));

/* Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z. */
console.log('aaa aba aca ada afa aza aga '.match(/a[a-fj-z]a/g));

/* Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от A до Z. */
console.log('aaa aBa aca aDa afa aZa aga '.match(/a[a-fA-Z]a/g));

/* Дана строка 'aba aea aca aza axa a-a a#a'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - не 'e' и не 'x'. */
console.log('aba aea aca aza axa a-a a#a'.match(/a[^ex]a/g));

/* Дана строка 'wйw wяw wёw wqw'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'w', а между ними - буква кириллицы. */
console.log('wйw wяw wёw wqw'.match(/w[а-яА-ЯёЁ]w/g));
/* == */
