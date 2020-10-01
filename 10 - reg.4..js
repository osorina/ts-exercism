/* == НА КАРМАНЫ ПРИ ЗАМЕНЕ */
/* Дана строка 'aaa@bbb eee7@kkk'. Напишите регулярку, которая найдет строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa. */
console.log('aaa@bbb eee7@kkk'.replace(/([a-z\d]+)@([a-z\d]+)/g, '$2@$1'));

/* Дана строка вида 'a1b2c3'. Напишите регулярку, которая найдет все цифры и удвоит их количество таким образом: 'a11b22c33' (то есть рядом с каждой цифрой напишет такую же). */
console.log('a1b2c3'.replace(/(\d)/g, '$1$1'));
/* == */

/* == ЗАДАЧИ НА TEST И MATCH */
const domains = ['site.ru', 'site.com', 'my-site.com', 'my-site.commm', 'my-sitecommm'];

const emails = [
    'mymail@mail.ru',
    'my.mail@mail.ru',
    'my-mail@mail.ru',
    'my_mail@mail.ru',
    'mail@mail.com',
    'mail@mail.by',
    'mail@yandex.ru',
    'mail.yandex.ru',
    'mail@yandex.russ',
];

const strings = [
    'https://blabla.com',
    'blabla.com',
    'htpps://bla.bla.com',
    'htpp://bla.bla.com',
    'http://bla.bla.com',
];

const numbers = [
    123123123,
    1123123,
    12312312313,
    12312313131313,
    1131231231312312313123123,
    12312312312312312313,
    12321,
    12312312313123123,
];

const files = [
    'test.pgp',
    'test.jpg',
    'test.png',
    'test.jpeg',
    'test.php',
    'test.html1',
    'test.html',
    'test.txt',
];

const stringWithEmails =
    '1 mymail@mail.ru Lorem  ipsum mail@mail.com dolor sit 2 ametmail@mail.com consectetur adipisicing elit. Aut my_mail@mail.ru ea';

const stringWithDigits = stringWithEmails.replace(/\s/g, ` : ${Math.ceil(Math.random() * 100)} : `);
/* С помощью метода test определите, что переданная строка является емэйлом. Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru. */
emails.forEach((email) => console.log(/^\w+\W?\w+@\w+\.\w{2,3}$/.test(email)));

/* Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива. */
console.log(stringWithEmails.match(/(\w+\S?\w+@\w+\.\w{2,3})/g));

/* С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com. */
domains.forEach((domain) => console.log(/^([a-z.-_]+\.[a-z]{2,3})$/.test(domain)));

/* С помощью test определите, что переданная строка начинается с http или с https. */
strings.forEach((string) => console.log(/^https?/.test(string)));

/*  С помощью test определите, что переданная строка заканчивается расширением txt, html или php. */
files.forEach((file) => console.log(/\.?(php|html|txt)$/.test(file)));

/* С помощью test определите, что переданная строка заканчивается расширением jpg или jpeg. */
files.forEach((file) => console.log(/\.?(jpg|jpeg)$/.test(file)));

/*  С помощью test узнайте является ли строка числом, длиной до 12 цифр */
numbers.forEach((number) => console.log(/^\d{1,12}$/.test(number)));

/* Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки. */
// console.log('stringWithDigits', stringWithDigits); // (x * 15) + 3
console.log(
    stringWithDigits.match(/\d+/g).reduce((total, number) => {
        return total + parseInt(number);
    }, 0),
);
/* == */

/* == ЗАДАЧИ НА REPLACE */
/* С помощью replace замените в строке домены вида http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>. */
const str1 =
    '1 http://site.ru Lorem  ipsum mail@mail.com dolor sit 2 ahttps://site.coml.com consectetur adipisicing elit. Aut my_mail@mail.ru ea';
console.log('str1', str1.replace(/(https?:(?:\/){2}(\w+\.\w{2,3}))/g, '<a href="$1">$2</a>'));

/* С помощью replace замените все повторяющиеся пробелы на один. */
const str2 = '   asdasd asdasd   asd     asdasdaksdlaka  asdasd     ';
console.log('str2', str2.replace(/\s{2,}/g, ' '));

/*  Найдите и удалите все комментарии CSS. */
const str3 = '/*comment 1*/ css content /* comment 2 */';
console.log('str3', str3.replace(/\/\*(.*?)\*\//g, ''));

/* Найдите и удалите все комментарии HTML */
const str4 = '<!--dfdf--> html content <!--ghgh-->';
console.log('str4', str4.replace(/<!--(.*?)-->/g, ''));
/* == */
