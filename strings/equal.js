const equal = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(equal(string1, string2));
console.log(equal(string2, string3));
console.log(equal(string1, string3));
