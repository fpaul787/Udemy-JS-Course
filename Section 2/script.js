////console.log('Hello World!!!');
//
//var firstName = 'Frantz';
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 28;
//
//// Data types is JS
//// Number: Floats, decimals, ints
//// String Sequence of characters
//// Boolean: can only be true of false
//// Undefined: does not have a value yet
//// Null: 'non-existent'
//
//// JS has dynamic typing
//
//var fullAge = true;
//console.log(fullAge);
//
//// variables must always have meaningful names
//
//var job;
//console.log(job);
//
//job = 'Teacher'
//console.log(job);

/******************************
* Variable mutation and type coercion
*/

//var firstName = 'John';
//var age = 28;
//
//// example of type coercion
//// age is converted to 
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//job = 'teacher';
//isMarried = false;
//
//console.log(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried)
//
//
//// Variable mutation
//age = 'twenty eight';
//job = 'driver';
//
//alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried)
//
//var lastName = prompt('What is his last Name?')
//console.log(firstName + ' ' + lastName)


/******************************
* Basic operators
*/

//var year, yearJohn, yearMark;
//year = 2020;
//yearJohn = year - 28;
//yearMark = year - 33;
//
//console.log(yearJohn)
//
//console.log(typeof year)

// Multiple assignments
//var x, y;
//x = y = (3 + 5) * 4 - 6;
//console.log(x, y)

// x *=2;
// x +=2;
// x -+2;
// x /=2;
//x++;


//var firstName = 'John';
//var civilStatus = 'single';
//
//if(civilStatus == 'married'){
//    console.log(firstName + ' is married!');
//}else{
//    console.log(firstName + ' will hopefully marry soon :)');
//}
//
//var firstName = 'john';
//var age = 16;
//
//age >= 18 ? console.log(firstName + ' drinks beer.')
//: console.log(firstName + ' drinks juice.');
//
//var drink = age >= 18 ? 'beer': 'juice';


/******************************
* Truthy and Flasy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 23; // nothing there

// if(height || height === 0){
//     console.log('Variable is defined');
// }else{
//     console.log('Variable has NOT been defined');
// }


// Equality operators 
// == does type coercion
// JS converts the string to a number (coercion)
// if (height == '23'){
//     console.log('The == operator does type coercion!');
// }

// when doing comparison, always use 
// ===

/******************************
* Function statements and Expressions
*/

// Function expression
//var whatDoYouDo = function(job, firstName){
//    switch(job){
//        case 'teacher':
//            return firstName + ' teaches kids how code';
//        break
//        case 'driver':
//            return firstName + ' drives a cab in miami';
//        break
//        case 'designer':
//            return firstName + ' designs beautiful websites';
//        break
//        default:
//            return firstName + ' does something else';
//    }
//}
//
//console.log(whatDoYouDo('teacher', 'Frantz'))

/******************************
* Arrays
*/

//var names = ['Frantz', 'Paul', 'Sam'];
//var years = new Array(1990, 1969, 1948);
//
//console.log(names[2]);
//console.log(names.length);
//
//names[1] = 'Ben';
//names[2] = 'Mary';
//console.log(names);
//
//
//// Different data types
//var john = ['John', 'Smith', 1889, 'teacher', false];
//
//john.push('blue');
//
//
//john.unshift('Mr.'); // added element to front
//
//john.pop(); // removes element from the end
//john.pop();
//
//console.log(john.indexOf(23));
//
//var isDesigner = john.indexOf('designer') === -1?
//    'John is NOT a designer' : 'John IS a designer';
//
//console.log(isDesigner)

// function tipCalculator(bill){
    
//     var percentage;
//     if(bill < 50){
//         percentage = .2;
//     }else if(bill >= 50 && bill < 200){
//         percentage = .15;
//     }else{
//         percentage = .1
//     }
//     return percentage * bill;
// }

// var bills= [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, finalValues);

/***********************
 * Objects and properties
 */

 // kinda like struct
 // Object literal
//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Jane', 'Mark', 'Bob', 'Emily'],
//      job: 'teacher',
//      isMarried: false
//  };

//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);

//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);

//  // new object syntax
//  var jane = new Object();
//  jane.firstName = 'Jane';
//  jane.birthYear = 1969;
//  jane['lastName'] = 'Smith';
//  console.log(jane);

/***********************
 * Objects and methods
 */

// var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1998,
//      family: ['Jane', 'Mark', 'Bob', 'Emily'],
//      job: 'teacher',
//      isMarried: false,
//      calcAge: function(){
//          this.age = 2018 - this.birthYear;
//      }
//  };
 
// john.calcAge();
// console.log(john);


// var john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }


// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

// if(john.bmi > mark.bmi){
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// }else if(mark.bmi > john.bmi){
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// }else{
//     console.log('They have the same BMI');
// }

/****
 * Loops
 */
// for (var i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for(var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string'){
//         continue; // goes to the next iteration
//     }
//     console.log(john[i]);
// }

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for(var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string'){
//         break; // stops iteration entirely
//     }
//     console.log(john[i]);
// }

/***
 * Coding challenge 5
 */

 var john = {
     fullName: 'John Smith',
     bills: [124, 48, 268, 180, 42],
     calcTips: function() {
         this.tips = [];
         this.finalValues = [];

         for(var i = 0; i <this.bills.length; i++)
         {
             // Determine percentage based on tipping 
             // rules
             var percentage;
             var bill = this.bills[i];

             if(bill < 50){
                 percentage = .2;
             }else if(bill >= 50 && bill < 200){
                 percentage = .15;
             }else{
                 percentage = .1;
             }

             // Add results to the corresponding array
             this.tips[i] = bill * percentage;
             this.finalValues[i] = bill + bill * percentage;
         }// end for
     }
 }

 john.calcTips();
 console.log(john);
