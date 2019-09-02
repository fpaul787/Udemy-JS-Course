
class Player{
    constructor(name, position, yearOfBirth ){
        this.name = name;
        this.position = position;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge(){
        return parseInt(new Date().getFullYear() - this.yearOfBirth);
    }
}

// Array of objects
var players = [new Player("Steph", "PG", 1998), new Player("Klay", "SG", 2000)];

// Arrow functions use
var playerAges = players.map(player =>
    2019 - player.yearOfBirth  
); 


//Destructoring use
const {name: a, position: b} = players[0];
// console.log(a);
// console.log(b);

// Using rest operator (send abitrary amt of arguments)
function printStuff(...a){
    console.log(a);
}

// printStuff(playerAges[0]);
// printStuff(playerAges[0], playerAges[1]);

//Maps use
const question = new Map();
question.set('question', 'What is the position of ' + players[0].name + '?');

question.set('A', 'PG');
question.set('B', 'SG');
question.set('C', 'SF/PF');
question.set('correct', 'A');
question.set(true, 'Correct Answer');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
// console.log(question.size);

// prompt function
const ans = prompt('Write the correct answer');

console.log(question.get(ans === question.get('correct')));