// Lecture: let and const

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// // for values we want to change or mutate later

// // In ES6, we use const for values that are not going to change
// //we no longer use var
// // we use let if we want to change value

// // let and const variables are block scoped
// // var is function scoped 
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// ES5
// function driversLicense5(passedTest){
//     //console.log(firstName); // will print out undefined
//     if(passedTest){
//         var firstName = 'Frantz';
//         var yearOfBirth = 1998;        

//     }

//     // Will work b/c var is function scoped
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allow to drive a car.');
// }


// driversLicense5(true);


// // ES6
// function driversLicense6(passedTest){

//     // console.log(firstName); // will produce error
//     // we can only use a variable after we declare and define it. 
//     let firstName;
//     const yearOfBirth = 1998;

//     if(passedTest){
//         // let firstName = 'Frantz';
//         // const yearOfBirth = 1998;
//         firstName = 'Frantz';

//         // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allow to drive a car.');

//     }
//     // let and const are block scoped, so the following line will create an error
//     // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allow to drive a car.');
// }
// driversLicense6(true);


// let i = 23;
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i);

// var i = 23;
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i);



/////*************************************************** */
// Lecture: Blocks and IIFEs

//ES6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }
// // console.log(a + b);
// console.log(c);

// //ES5
// (function() {
//     var c = 3;
// })();

// console.log(c);

//******************************* */
// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1998;
// function calcAge(year){
//     return 2019 - year;
// }

// // Template literals

// //ES6
// console.log(`This is ${firstName} ${lastName}. He was born ${yearOfBirth} and today he is ${calcAge(yearOfBirth)} years old.`);


// const n = `${firstName} ${lastName}`;
// if(n.startsWith('J')){
//     console.log('The name starts with a J');
// }

// if(n.endsWith('J')){
//     console.log('The name starts with a J');
// }

// if(n.includes(' ')){
//     console.log('The name has a space');
// }

// console.log(firstName.repeat(5));


///////////////////////////////////////////////////////
//Lecture: Arrow functions

// const years = [1998, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(year) {
//     return 2019 - year;
// });

// console.log(ages5);

/// ES6

// let ages6 = years.map(year =>
//     2019 - year
// );

// console.log(ages6);

// ages6 = years.map((year, index) => `Age element ${index + 1}: ${2019 - year}`);
// console.log(ages6);

// ages6 = years.map((year, index) => {
//     const now = new Date().getFullYear();
//     const age = now - year;
//     return `Age element ${index + 1}: ${age}`
// });

// console.log(ages6);


/////////////////////////////////////////
// Lecture: Arrow functions 2


//* Arrow functions do not have a this keyword like other JS function
//* Arrow functions use the this keyword of the function they're written in
//* So we say they have a lexical 'this' keyword.


//ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){

//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + 
//             ' and it is ' + 
//             self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe();

// //ES6
// // arrow functions share the lexical 'this' keyword of its surroundings
// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){

//         document.querySelector('.green').addEventListener('click', () =>{
//             var str = 'This is box number ' + this.position + 
//             ' and it is ' + 
//             this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();

//ES6
// 
// var box66 = {
//     color: 'green',
//     position: 1,

//     // Will not work because 'this' share variables from surroundings
//     // which in this case will be the window object.
//     clickMe: () => {

//         document.querySelector('.green').addEventListener('click', () =>{
//             var str = 'This is box number ' + this.position + 
//             ' and it is ' + 
//             this.color;
//             alert(str);
//         });
//     }
// }
// box66.clickMe();

// function Person(name){
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = 
// function(friends){

//     var arr = friends.map(function(el){
//         //the this keyword will point to global object
//         // name will be undefined
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends);

// // ES6
// Person.prototype.myFriends6 = 
// function(friends){

//     var arr = friends.map(el => 
//         this.name + ' is friends with ' + el);
        
//     console.log(arr);
// }
// new Person('John').myFriends5(friends);



//////////////////////////////////////////////////////
// Lecture: Destructuring


// // ES5
// var john = ['John', 26];
// // var name = john[0];
// // var age = john[1];

// // ES6
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);


// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);



// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);




/////////////////////////////////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll('.box');

// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });


// // ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(element => 
//     element.style.backgroundColor = 'dodgerblue'
// );


// //ES5
// // for(var i = 0; i < boxesArr5.length; i++){
// //     if(boxesArr5[i].className === 'box blue'){
// //         continue; // skip current iteration, go to next
// //     }

// //     boxesArr5[i].textContent = 'I changed to blue';
// // }

// //ES6
// for(const cur of boxesArr6){
//     if(cur.className.includea === 'blue'){
//         continue;
//     }

//     cur.textContent = 'I changed to blue!';
// }


// // ES5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur){
//     return cur >= 18;
// });
// console.log(full);


// console.log(full.indexOf(true));

// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 18));

// console.log(ages.find(cur => cur >= 18));


////////////////////////////////////////////////////////
// Lecture: Spread Operator
// Convient way to expand elements of an array


// function addFourAges (a, b, c, d){
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);

// var ages = [18, 29, 12, 21];
//ES5
// 
// // take array and apply method to it
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);


// ES6
// const max3 = addFourAges(...ages); // expands array
// console.log(max3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familyMiller, 'Lily', ...familySmith];
// console.log(bigFamily);


// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');



////////////////////////////////////////////////////////////////
// Lecture: Rest parameters
// Rest parameters allow us to send an arbitrary amt of params
// to a function.

// Function with arbitrary number of years


// //ES5
// function isFullAge5(){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur){
//         console.log((2019 - cur) >= 18);
//     })
// }

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016);


//ES6
// Spread operator is used in function calls,
// REST parameters is used in function declarations
// function isFullAge6(...years){
    
//     // console.log(years);
//     years.forEach(cur => console.log((2019 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016);

// //ES5
// function isFullAge5(limit){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur){
//         console.log((2019 - cur) >= limit);
//     })
// }

// isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016);


// //ES6
// //Spread operator is used in function calls,
// //REST parameters is used in function declarations
// function isFullAge6(limit, ...years){
    
//     // console.log(years);
//     years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(16, 1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016);








///////////////////////////////////////////////////
//Lecture: Default parameters

// function SmithPerson(firstName, yearOfBirth, lastName, nationality){

//     lastName === undefined ? lastName = 'Smith': lastName = lastName;
//     nationality === undefined ? nationality = 'american': nationality = nationality;


//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1998);

// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


// ES6

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality= 'american'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
// var john = new SmithPerson('John', 1998);
// console.log(john);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


/////////////////////////////////////////////////////////////
// Lecture: Maps

// const question = new Map();
// question.set('question', 'What is the official name of the latest major JS version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6')
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer:D');
// question.set(false, 'Wrong, please try again!');

// // console.log(question.get('question'));
// // console.log(question.size);


// // if(question.has(4)){
// //     // question.delete(4);
// //     console.log('Answer 4 is here');
// // }

// // question.clear();

// //forEach method is in prototype
// // question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for(let [key, value] of question.entries()){
//     // we can use destructoring to 
//     // store keys and value in two
//     // separate values. 
//     // console.log(`This is ${key}, and it's set to ${value}`);

//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`);
//     }

// }

// // prompt function
// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')));


///////////////////////////////////////////////////////////////////
// Lecture: Classes


//Classes are not hoisted, meaning that we need to declare them 
//first before we start using them
//We can only add methods and not properties

//ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1998, 'teacher');

// //ES6
// class Person6 {
//     constructor(name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// const john6 = new Person6('John', 1998, 'teacher');



// Person6.greeting();


//////////////////////////////////////////////////////
// Classes with subclasses
//ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }
// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
//     Person5.call(this, name, yearOfBirth, job); // like super in java
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }



// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function(){
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('John', 1998, 'swimmer', 3, 10);

//ES6
// class Person6 {
//     constructor(name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     // static greeting() {
//     //     console.log('Hey there!');
//     // }
// }

// //Create a subclass
// class Athlete6 extends Person6{
//     constructor(name, yearOfBirth, job, olympicGames, medals){
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1998, 'swimmer', 3, 10);
// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();








