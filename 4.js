/* Перепишите функцию clone таким образом, чтобы она была способна клонировать переданный как параметр объект. */

let animal = {
    name: 'animal',
    age: 10,
    childs: ['child 1', 'child 2'],
};

let cat = clone(animal);
cat.name = 'cat';
cat.age = 5;
cat.childs.push('child 3');

console.log(cat.name, cat.age); // cat 5
console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]

console.log(animal.name, animal.age); // animal 10
console.log(animal.childs); // [ 'child 1', 'child 2'

function clone(object) {
    /* simple */
    // return JSON.parse(JSON.stringify(object));

    /* some new shit */
    // return require('v8').deserialize(require('v8').serialize(object));

    /* deep */
    if (typeof object !== 'object' || typeof object === 'null') {
        return object;
    }

    const temp = object.constructor();

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            temp[key] = clone(object[key]);
        }
    }

    return temp;
}
