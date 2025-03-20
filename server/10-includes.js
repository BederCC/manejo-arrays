const pets = ['cat', 'dog', 'bat'];

let rta = false;

for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'dog') {
        rta = true;
        break;
    }
}
console.log('for', rta); // true

const rta2 = pets.includes('dog');
console.log('includes', rta2); // true