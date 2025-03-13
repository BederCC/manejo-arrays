const numbers = [1, 2, 3, 5];

let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some((item) => item % 2 === 0);
console.log(rta2);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 20, 30),
};
// date-fns es una biblioteca de JavaScript que proporciona varias funciones de utilidad para trabajar con fechas y horas. Ofrece una amplia gama de funciones para analizar, formatear, manipular y comparar fechas. En este código, la biblioteca date-fns se utiliza para verificar si hay alguna superposición entre la nueva cita y las citas existentes en el array "dates". La función "areIntervalsOverlapping" de date-fns se utiliza para comparar los intervalos de tiempo y determinar si se superponen.
const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newData) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newData.startDate, end: newData.endDate }
        );
    });
};

console.log(isOverlap(newAppointment));