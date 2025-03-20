const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1];
for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    newArray.push(element);
}

console.log(newArray); // [1, 2, 3, 4, 5, 6]

const newArray2 = array1.concat(array2);
console.log(newArray2); // [1, 2, 3, 4, 5, 6]