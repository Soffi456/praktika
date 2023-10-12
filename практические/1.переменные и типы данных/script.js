let myText = 'The dog ate my homework!';
alert(myText);

myText = 'hello, world!';
myText = 99;
myText = 4 * 10;
myText = true;
myText = undefined;
alert(myText);

const siteURL = 'https://google.com';
alert(siteURL);
siteURL = 'https://ya.ru';

// Объявление переменных с различными типами данных
const name = 'Alex'; // string
const age = 26; // number
const googol = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n; // bigint
const isCold = false; // boolean
const city = undefined; // undefined
const person = { name: 'Alex', age: undefined }; // object
const country = null; // null
const symbol = Symbol('id'); // symbol

const currentYear = '2023';
console.log(typeof currentYear); // string
const numberCurrentYear = Number(currentYear); // number
console.log(typeof numberCurrentYear);

const nextYear = 2023;
console.log(typeof nextYear); // number
const stringNextYear = String(nextYear);
console.log(typeof stringNextYear); // string