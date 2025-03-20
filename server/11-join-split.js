const elements = ['Fire', 'Air', 'Water'];

let rta = ' ';
const separator = ' and ';

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    rta = rta + element + separator;
}

const rta2 = elements.join(separator);
console.log(rta);
console.log(rta2);


const title = 'Modern JavaScript';
console.log(title.split(' ').join('-').toLowerCase()); // modern-javascript