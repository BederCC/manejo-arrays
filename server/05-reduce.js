const totals = [1, 2, 3, 4, 5]

let sum = 0;

for (let index = 0; index < totals.length; index++){
    const element = totals[index];
    sum += element;
}

console.log('sum:', sum);

const rta = totals.reduce((suma, item) => suma + item, 0);
console.log('rta:', rta);