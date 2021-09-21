// document.getElementById("test-button");

// testButton.addEventListener("click", buttonClick);

// function buttonClick() {
//   console.log("test click");
//   document.getElementById("tester").textContent = "You clicked me";
// }

var mainEl = document.querySelector('main');
var quizBox = document.getElementById('quiz-box');
var highScore = document.getElementById('vhs');



// Array for question and answers

var qAndA1 = [
    {
        question = "A string can be any text inside which of the following",
        answer1 = "Parenthesis",
        answer2 = "Double or single quotes",
        answer3 = "Brackets",
        answer4 = "Question marks"
    }
]
var qAndA2 = [
    {
        question = "JavaScript booleans can have one of two values:",
        answer1 = "True or False",
        answer2 = "HTML or CSS",
        answer3 = "A number or a letter",
        answer4 = "A Parent or Child Element"
    }
]
var qAndA3 = [
    {
        question = "JavaScript is meant to _:",
        answer1 = "to define the content of web pages",
        answer2 = "to specify the layout of web pages",
        answer3 = "host web pages",
        answer4 = "to program the behavior of web pages"
    }
]
var qAndA4 = [
    {
        question = "The % operator is called a  _:",
        answer1 = "Increment",
        answer2 = "Exponentiation",
        answer3 = "Modulus",
        answer4 = "Decrement"
    }
]
var qAndA5 = [
    {
        question = "x += y is the same as which of the following?",
        answer1 = "x = y",
        answer2 = "x + y = z",
        answer3 = "x = x + y",
        answer4 = "x + y * y"
    }
]
var qAndA6 = [
    {
        question = "Which of the following returns a Random number?",
        answer1 = "Parenthesis",
        answer2 = "Math.random();",
        answer3 = "random.integer",
        answer4 = "RandomNumber()"
    }
]
