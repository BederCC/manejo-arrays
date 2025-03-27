const users = [
    { userId: 1, username: 'mariot', atributes: ['nice', 'cute'] },
    { userId: 2, username: 'peach', atributes: ['beautiful', 'smart'] },
    { userId: 3, username: 'luigi', atributes: ['tall', 'funny'] }
]

const rta = users.map(user => user.atributes)
const rta2 = users.map(user => user.atributes).flat();
const rta3 = users.flatMap(user => user.atributes);

console.log(rta); // [['nice', 'cute'], ['beautiful', 'smart'], ['tall', 'funny']]
console.log(rta2); // ['nice', 'cute', 'beautiful', 'smart', 'tall', 'funny']
console.log(rta3); // ['nice', 'cute', 'beautiful', 'smart', 'tall', 'funny']


const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const rta4 = Object.values(calendars).flatMap(item => {
    return item.map(event => event.title);
});
console.log(rta4); // ['primaryCalendar', 'secondaryCalendar']
