const matriz = [
    [1, 2, 3],
    [4, 5, 6,[1,2,[1,2,3]]],
    [7, 8, 9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
}

console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArray2 = matriz.flat(3);
console.log(newArray2); // [1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 3, 7, 8, 9]