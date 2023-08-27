
// Prototype Based
// let person ={
//   name:"",
//   age:"",
//   address:"",

// }
// let p =new person("ahmed","20","haram");
// console.log(person);
// let sudent = {
//   id:"",
//   subjects:""
// }
// console.log(sudent);
// Object.setPrototypeOf(sudent,person);
// console.log(sudent);

// student byakhod mn el person

// ---------------------------constructor function
// function Person(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
// }

// let p = new Person("Ahmed", "20", "Haram");

// console.log(p);     // "Ahmed"
// console.log(p.age);      // "20"
// console.log(p.address);  // "Haram"

//-----------------------------------------------------

// Class Based

// class academy {
//   name = "";
//   age="";
//   constructor(){
//     console.log("Hello");
//   }
// }
// let obj = new academy();
// ------------------------------------------------------------------------

// let person ={
 
//   fullname:function(){
//     return this.firstName + " "+this.lastName;
//   }
// }
// let youssef = {
//   firstName :"Ahmed",
//   lastName : "Hussieny",
//   age:25,
//   gender:"male",
// }
// Object.setPrototypeOf(youssef,person);
// person.fullname.apply(youssef);
// console.log(youssef.fullname())
// el fekra f apply btkhaliny atb2 method mn object l object tani mn gher m a3ml inhrtance
// console.log(person.fullname.apply(youssef))
// ----------------------------------------------------------------------------


import { QuizSettings } from "./quizSettings.js";


let settings = new QuizSettings();
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});