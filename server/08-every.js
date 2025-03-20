const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 40) {
        rta = false;
        break;
    }
}

console.log('for', rta);

const rta2 = numbers.every((item) => item <= 40);
console.log('every', rta2);


//para la casa
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const menores = team.every((item) => item.age <= 15);
console.log('menores', menores);