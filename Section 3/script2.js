/////////////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1965);

// function calculateAge(year){
//     console.log(2016 - year);
// }

// // Hoisting works with function declarations, not 
// // expressions


// //retirement(1956); 

// var retirement = function(year){ // Hoisting will not work with function expressions
//     console.log(65 - (2016 - year))
// }

// // Hoisting can happen with variables, but in a different way
// console.log(age); // will print undefined 
// var age = 23; // Global execution context object
// console.log(age); // will print 23


// function foo(){
//     var age = 65;
//     console.log(age); // will print 65
// }

// foo();
// console.log(age); // will print 23


///////////////////////////////////
// Lecture: Scoping

// Frist scoping example

// var a = 'Hello';
// first();

// function first(){
//     var b = 'Hi!';
//     ScriptProcessorNode();

//     function second(){
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

////////////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

// calculateAge(1985);


// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing
mike.calculateAge = john.calculateAge; // treating a function as a varaible
mike.calculateAge(); // calling the function