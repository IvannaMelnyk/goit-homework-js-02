function filterArray(array) {
    'use strict';
    const numbers = [];

    for (let i = 0; i < array.length; i += 1) {
        // Write code under this line
        if (array[i] === Number.isFinite(array[i])) {
            numbers.push(Number.isFinite(array));
        }
    }
    return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

//console.log(filterArray([1, NaN, Infinity]));
// [1]

//console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]