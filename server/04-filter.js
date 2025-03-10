const words = ['hello', 'world', 'foo', 'bar', 'baz'];

const newWords = [];
for (let index = 0; index < words.length; index++){
    const element = words[index];
    if ( words[index].length > 3){
        newWords.push(element);
    }
}

console.log('original array:', words);
console.log('new array:', newWords);

// filter es una funcion que recibe un callback y retorna un nuevo array
const rta = words.filter(item => item.length > 3);
console.log('new array filter:', rta);

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

const rtaOrder = orders.filter(item => item.delivered && item.total >= 100);
console.log('new array filter orders:', rtaOrder);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log('search:', search('Zu'));