/////////////////////////////////////////////////
// Coding Challenge

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// make things private by having another scope that
// interfere with another scope
(function() {
    // Function constructors
var Question = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);


    // loop through answers and receive answer
    for( var i = 0; i < this.answers.length; i++){
        console.log(i + ': ' +
                    this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans, callback){

    var sc;

    if(ans === this.correct){
        console.log('Correct Answer');
        sc = callback(true);
    }else{
        console.log('Wrong Answer. Try again');
        sc = callback(false);
    }

    this.displayScore(sc);
    
}

Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('------------------------------------------');
}
var q1 = new Question('Is JavaScript the coolest programming language in the world?', 
                    ['Yes', 'No'], 0);

var q2 = new Question('What is your name?', ['Hendy', 'Frantz', 'Lincoln'], 1);

// can create any amount of questions

var questions = [q1, q2];

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc += 1;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion(){


    var n = Math.floor(Math.random() * questions.length);


    questions[n].displayQuestion();


    // user input is string, we need integer

    var answer = prompt('Please select the correct answer.');     

    if(answer !=='exit'){
           
        questions[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
    
}
nextQuestion();
})();



