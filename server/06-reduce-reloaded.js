const items = [
    1, 2, 3, 4, 3, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];

const repsuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }
    return obj;
}, {});

console.log(repsuesta);

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const respuesta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }
    return obj;
}, {});

console.log(respuesta2);

//-------ejercicio clase-----
numbers1 = [1,1,1,1] // 4
numbers2 = [2,2,2,2] // 8
numbers3 = [1,2,-2,2] // 3
numbers4 = [] // 0

function sum(numbers) {
    return numbers.reduce((obj, item) => obj + item,0)
}
console.log(sum(numbers1));
console.log(sum(numbers2));
console.log(sum(numbers3));
console.log(sum(numbers4));