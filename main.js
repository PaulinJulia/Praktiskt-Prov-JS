// 10 (3p)
// Använd ES6 moduler. Du ska exportera klasserna Student och Course genom att skapa filerna Student.js och Course.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar två olika studenter och lägger till två olika kurser till studenterna.
// Skriv även ut studententens kurser (listCourses()) samt information om kurserna (getCourseInfo()).
// main.js ska vara kopplat till index.html och informationen om studenterna och kurserna ska loggas ut i consolen.

import { Student } from "./Student.js";
import { Course } from "./Course.js";

const student1 = new Student("My");
const student2 = new Student("Nils");
const course1 = new Course("Typescript", 35);
const course2 = new Course("Figma", 10);
student1.registerCourse(course1);
student1.registerCourse(course2);
student2.registerCourse(course1);
student2.registerCourse(course2);
student1.listCourses();
student2.listCourses();
course1.getCourseInfo();
course2.getCourseInfo();

console.log(student1);
console.log(student2);
