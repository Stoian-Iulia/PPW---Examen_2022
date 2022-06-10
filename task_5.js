const students = [
    {
        name: "Iulia Stoian",
        marks: [8, 9, 9, 10, 8]
    },
    {
        name: "Valentina Burlaca",
        marks: [7, 8, 9, 10, 9]
    },
    {
        name: "Valentin Vrabie",
        marks: [9, 9, 9, 7, 9]
    },
    {
        name: "Liviu Cojocaru",
        marks: [6, 7, 8, 8, 7]
    },
    {
        name: "Iulian Colesnic",
        marks: [5, 8, 8, 6, 8]
    },
    {
        name: "Andrey Jiganov",
        marks: [7, 7, 8, 8, 9]
    },
    {
        name: "Dmitrii Porcescu",
        marks: [8, 9, 10, 10, 7]
    }
 
];

//средний бал
const media =[];
for (let i = 0; i < students.length; i++) {
    media[i] = (students[i].marks.reduce((sum, number) => sum + number, 0)/students[i].marks.length);
    console.log(students[i].name + ": " + media[i])
}

//ученики с оценкой <5
for (let i = 0; i < media.length; i++) {
    if(media[i]<5) console.log("Elev restantier: " + students[i].name)
}

//ученики с оценкой max или min
console.log("Elevul cu nota minima: " + students[media.indexOf(Math.min.apply(Math, media))].name);
console.log("Elevul cu nota maxima: " + students[media.indexOf(Math.max.apply(Math, media))].name);   


// media.sort();
// media.reverse();
// console.log("Lista sortata descrescator");
// for (let i = 0; i < media.length; i++) {
//     for (let j = 0; i < students.length; j++) {
//         if (media)console.log(students[i].name);
//     }
// }

//ученики со средней оценкой больше чем средняя оценка класса
let mediaClasei = (media.reduce((sum, number) => sum + number, 0)/media.length).toFixed(2);
for (let i = 0; i < media.length; i++) {
    if(media[i]>mediaClasei) console.log("Elev cu nota > " + mediaClasei + " (media clasei): " + students[i].name)
}