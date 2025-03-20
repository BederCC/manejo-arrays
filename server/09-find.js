const numbers = [1, 30, 39, 29, 10, 13];

let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 29) {
        rta = element;
        break;
    }
}
console.log(rta); // 29

const rta2 = numbers.find((item) => item === 29);
console.log(rta2); // 29

const products = [
    {
        name: "Pizza",
        price: 12,
        id: "🍕",
    },
    {
        name: "Burger",
        price: 23,
        id: "🍔",
    },
    {
        name: "Hot dog",
        price: 34,
        id: "🌭",
    },
    {
        name: "Hot cakes",
        price: 355,
        id: "🥞",
    },
];


const rta3 = products.find((item) => item.id === '🍔');
console.log('find', rta3); // undefined
const rta4 = products.findIndex((item) => item.id === '🍔');
console.log('findIndex', rta4); // 1