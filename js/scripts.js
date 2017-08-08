// welcome the user
alert("Welcome to Quiz Ninja!");

var question = "What is superman's real name?";
var answer = prompt(question);
alert("You answered " + answer);

var quiz = [["What is Superman's real name?", "Clark Kent"], ["What is Wonderwoman's real name?", "Diana Prince"], ["What is Batman's real name?", "Bruce Wayne"]];

var score=0; 

for (var i=0, max=quiz.length; i<max; i++)
    {
        //get answer from user
        var answer = prompt(quiz[i][0]); //quiz[i][0] is the ith question

        //check if answer is correct
        if (answer === quiz[i][1])
            {
                alert("Correct!");
                score++;
            }
        else
            {
                alert("Wrong!");
            }
    }
alert("Game Over, you scored " + score + " points!");