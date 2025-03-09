const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = [1, 2, 3, 4, 5];

const newArray = letters.map(item => item + '++');

// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }

const newArray2 = numbers.map(item => item * 2);
console.log(newArray2);

console.log('original array:', letters);
console.log('new array:', newArray);