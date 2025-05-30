const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log('original array:', orders);
const rta = orders.map(item => item.total);
console.log('new array:', rta);

// const rta2 = orders.map(item => {
//     item.tax = 0.19;
//     return item;
// });

// console.log('new array 2:', rta2);
// console.log('original array:', orders);

const rta3 = orders.map(item => {
    return {
        ...item, //con esto no traemos la referencia em memoria, sino hacemos una copia del array
        tax: 0.19
    }
});

console.log('new array 3:', rta3);
console.log('original array:', orders);