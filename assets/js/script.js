// document.getElementById("test-button");

// testButton.addEventListener("click", buttonClick);

// function buttonClick() {
//   console.log("test click");
//   document.getElementById("tester").textContent = "You clicked me";
// }

var mainEl = document.querySelector('main');
var quizBox = document.getElementById('quiz-box');
var highScore = document.getElementById('vhs');
var results = document.querySelector('checkAnswe');

// Array for question and answers

var qAndA1 = [
    {
        question: "A string can be any text inside which of the following:",
        answer1: "Parenthesis",
        answer2: "Double or single quotes",
        answer3: "Brackets",
        answer4: "Question marks",
        correctAnswer: "Double or single quotes"
    }
]
var qAndA2 = [
    {
        question: "JavaScript booleans can have one of two values:",
        answer1: "True or False",
        answer2: "HTML or CSS",
        answer3: "A number or a letter",
        answer4: "A Parent or Child Element",
        correctAnswer: "True or False"
    }
]
var qAndA3 = [
    {
        question: "JavaScript is meant to _:",
        answer1: "to define the content of web pages",
        answer2: "to specify the layout of web pages",
        answer3: "host web pages",
        answer4: "to program the behavior of web pages",
        correctAnswer: "to program the behavior of web pages"
    }
]
var qAndA4 = [
    {
        question: "The % operator is called a  _:",
        answer1: "Increment",
        answer2: "Exponentiation",
        answer3: "Modulus",
        answer4: "Decrement",
        correctAnswer: "Modulus"
    }
]
var qAndA5 = [
    {
        question: "x += y is the same as which of the following?",
        answer1: "x = y",
        answer2: "x + y = z",
        answer3: "x = x + y",
        answer4: "x + y * y",
        correctAnswer: "x = x + y"
    }
]
var qAndA6 = [
    {
        question: "Which of the following returns a Random number?",
        answer1: "Parenthesis",
        answer2: "Math.random();",
        answer3: "random.integer",
        answer4: "RandomNumber()",
        correctAnswer: "Math.random();"
    }
]

// function to create welcome page
function init() {
  var quizTitle = document.createElement('h1');
  quizTitle.innerHTML = 'Coding Quiz Challenge';
  quizTitle.setAttribute('id', 'qTitle');
  quizBox.appendChild(quizTitle);

  var quizMessage = document.createElement('p');
  quizMessage.innerHTML = 'Try to answer the following code related questions before the timer runs out! INCORRECT answers reduce your score time by 10 seconds!!!';
  quizMessage.setAttribute('id', 'qMessage');
  quizBox.appendChild(quizMessage);

  var quizBut = document.createElement('button');
  quizBut.innerHTML = 'Start Quiz';
  quizBut.setAttribute('id', 'qBut');
  quizBox.appendChild(quizBut);

  quizBut.addEventListener('click', questionOne);

}

// function for question 1
function questionOne() {
  document.getElementById('qTitle').remove();
  document.getElementById('qMessage').remove();
  document.getElementById('qBut').remove();

  var question1 = document.createElement('h2');
  question1.innerHTML=(qAndA1[0].question);
  question1.setAttribute('id', 'ques1')
  quizBox.appendChild(question1);
  console.log(question1);

  var answerOne = document.createElement('button');
  answerOne.innerHTML=(qAndA1[0].answer1);
  answerOne.setAttribute('id', 'ans1');
  answerOne.style.width = '630px';
  answerOne.style.height = '50px';
  quizBox.appendChild(answerOne);

  var answerTwo = document.createElement('button');
  answerTwo.innerHTML=(qAndA1[0].answer2);
  answerTwo.setAttribute('id', 'ans2');
  answerTwo.style.width = '630px';
  answerTwo.style.height = '50px';
  quizBox.appendChild(answerTwo);

  var answerThree = document.createElement('button');
  answerThree.innerHTML=(qAndA1[0].answer3);
  answerThree.setAttribute('id', 'ans3');
  answerThree.style.width = '630px';
  answerThree.style.height = '50px';
  quizBox.appendChild(answerThree);

  var answerFour = document.createElement('button');
  answerFour.innerHTML=(qAndA1[0].answer4);
  answerFour.setAttribute('id', 'ans4');
  answerFour.style.width = '630px';
  answerFour.style.height = '50px';
  quizBox.appendChild(answerFour);

  ans1.addEventListener('click', questionTWO);
  ans2.addEventListener('click', questionTWO);
  ans3.addEventListener('click', questionTWO);
  ans4.addEventListener('click', questionTWO);

}

function questionTWO(event) {
  console.log('here',event.target.innerHTML);
  checkAnswer(event.target.innerHTML, qAndA1[0].correctAnswer);
  document.getElementById('ques1').remove();
  document.getElementById('ans1').remove();
  document.getElementById('ans2').remove();
  document.getElementById('ans3').remove();
  document.getElementById('ans4').remove();

  var question1 = document.createElement('h2');
  question1.innerHTML=(qAndA2[0].question);
  question1.setAttribute('id', 'ques1')
  quizBox.appendChild(question1);
  console.log(question1);

  var answerOne = document.createElement('button');
  answerOne.innerHTML=(qAndA2[0].answer1);
  answerOne.setAttribute('id', 'ans1');
  answerOne.style.width = '630px';
  answerOne.style.height = '50px';
  quizBox.appendChild(answerOne);

  var answerTwo = document.createElement('button');
  answerTwo.innerHTML=(qAndA2[0].answer2);
  answerTwo.setAttribute('id', 'ans2');
  answerTwo.style.width = '630px';
  answerTwo.style.height = '50px';
  quizBox.appendChild(answerTwo);

  var answerThree = document.createElement('button');
  answerThree.innerHTML=(qAndA2[0].answer3);
  answerThree.setAttribute('id', 'ans3');
  answerThree.style.width = '630px';
  answerThree.style.height = '50px';
  quizBox.appendChild(answerThree);

  var answerFour = document.createElement('button');
  answerFour.innerHTML=(qAndA2[0].answer4);
  answerFour.setAttribute('id', 'ans4');
  answerFour.style.width = '630px';
  answerFour.style.height = '50px';
  quizBox.appendChild(answerFour);


  ans1.addEventListener('click', questionThree);
  ans2.addEventListener('click', questionThree);
  ans3.addEventListener('click', questionThree);
  ans4.addEventListener('click', questionThree);


}

function questionThree(event) {
  checkAnswer(event.target.innerHTML, qAndA2[0].correctAnswer);

  document.getElementById('ques1').remove();
  document.getElementById('ans1').remove();
  document.getElementById('ans2').remove();
  document.getElementById('ans3').remove();
  document.getElementById('ans4').remove();

  var question1 = document.createElement('h2');
  question1.innerHTML=(qAndA3[0].question);
  question1.setAttribute('id', 'ques1')
  quizBox.appendChild(question1);
  console.log(question1);

  var answerOne = document.createElement('button');
  answerOne.innerHTML=(qAndA3[0].answer1);
  answerOne.setAttribute('id', 'ans1');
  answerOne.style.width = '630px';
  answerOne.style.height = '50px';
  quizBox.appendChild(answerOne);

  var answerTwo = document.createElement('button');
  answerTwo.innerHTML=(qAndA3[0].answer2);
  answerTwo.setAttribute('id', 'ans2');
  answerTwo.style.width = '630px';
  answerTwo.style.height = '50px';
  quizBox.appendChild(answerTwo);

  var answerThree = document.createElement('button');
  answerThree.innerHTML=(qAndA3[0].answer3);
  answerThree.setAttribute('id', 'ans3');
  answerThree.style.width = '630px';
  answerThree.style.height = '50px';
  quizBox.appendChild(answerThree);

  var answerFour = document.createElement('button');
  answerFour.innerHTML=(qAndA3[0].answer4);
  answerFour.setAttribute('id', 'ans4');
  answerFour.style.width = '630px';
  answerFour.style.height = '50px';
  quizBox.appendChild(answerFour);

  ans1.addEventListener('click', questionFour);
  ans2.addEventListener('click', questionFour);
  ans3.addEventListener('click', questionFour);
  ans4.addEventListener('click', questionFour);
}

function questionFour(event) {
  checkAnswer(event.target.innerHTML, qAndA3[0].correctAnswer);

  document.getElementById('ques1').remove();
  document.getElementById('ans1').remove();
  document.getElementById('ans2').remove();
  document.getElementById('ans3').remove();
  document.getElementById('ans4').remove();

  var question1 = document.createElement('h2');
  question1.innerHTML=(qAndA4[0].question);
  question1.setAttribute('id', 'ques1')
  quizBox.appendChild(question1);
  console.log(question1);

  var answerOne = document.createElement('button');
  answerOne.innerHTML=(qAndA4[0].answer1);
  answerOne.setAttribute('id', 'ans1');
  answerOne.style.width = '630px';
  answerOne.style.height = '50px';
  quizBox.appendChild(answerOne);

  var answerTwo = document.createElement('button');
  answerTwo.innerHTML=(qAndA4[0].answer2);
  answerTwo.setAttribute('id', 'ans2');
  answerTwo.style.width = '630px';
  answerTwo.style.height = '50px';
  quizBox.appendChild(answerTwo);

  var answerThree = document.createElement('button');
  answerThree.innerHTML=(qAndA4[0].answer3);
  answerThree.setAttribute('id', 'ans3');
  answerThree.style.width = '630px';
  answerThree.style.height = '50px';
  quizBox.appendChild(answerThree);

  var answerFour = document.createElement('button');
  answerFour.innerHTML=(qAndA4[0].answer4);
  answerFour.setAttribute('id', 'ans4');
  answerFour.style.width = '630px';
  answerFour.style.height = '50px';
  quizBox.appendChild(answerFour);

  ans1.addEventListener('click', questionFive);
  ans2.addEventListener('click', questionFive);
  ans3.addEventListener('click', questionFive);
  ans4.addEventListener('click', questionFive);
}

function questionFive(event) {
  checkAnswer(event.target.innerHTML, qAndA4[0].correctAnswer);

  document.getElementById('ques1').remove();
  document.getElementById('ans1').remove();
  document.getElementById('ans2').remove();
  document.getElementById('ans3').remove();
  document.getElementById('ans4').remove();

  var question1 = document.createElement('h2');
  question1.innerHTML=(qAndA5[0].question);
  question1.setAttribute('id', 'ques1')
  quizBox.appendChild(question1);
  console.log(question1);

  var answerOne = document.createElement('button');
  answerOne.innerHTML=(qAndA5[0].answer1);
  answerOne.setAttribute('id', 'ans1');
  answerOne.style.width = '630px';
  answerOne.style.height = '50px';
  quizBox.appendChild(answerOne);

  var answerTwo = document.createElement('button');
  answerTwo.innerHTML=(qAndA5[0].answer2);
  answerTwo.setAttribute('id', 'ans2');
  answerTwo.style.width = '630px';
  answerTwo.style.height = '50px';
  quizBox.appendChild(answerTwo);

  var answerThree = document.createElement('button');
  answerThree.innerHTML=(qAndA5[0].answer3);
  answerThree.setAttribute('id', 'ans3');
  answerThree.style.width = '630px';
  answerThree.style.height = '50px';
  quizBox.appendChild(answerThree);

  var answerFour = document.createElement('button');
  answerFour.innerHTML=(qAndA5[0].answer4);
  answerFour.setAttribute('id', 'ans4');
  answerFour.style.width = '630px';
  answerFour.style.height = '50px';
  quizBox.appendChild(answerFour);

  ans1.addEventListener('click', questionSix);
  ans2.addEventListener('click', questionSix);
  ans3.addEventListener('click', questionSix);
  ans4.addEventListener('click', questionSix);
}

function questionSix(event) {
  checkAnswer(event.target.innerHTML, qAndA5[0].correctAnswer);

  document.getElementById('ques1').remove();
  document.getElementById('ans1').remove();
  document.getElementById('ans2').remove();
  document.getElementById('ans3').remove();
  document.getElementById('ans4').remove();

  var question1 = document.createElement('h2');
  question1.innerHTML=(qAndA6[0].question);
  question1.setAttribute('id', 'ques1')
  quizBox.appendChild(question1);
  console.log(question1);

  var answerOne = document.createElement('button');
  answerOne.innerHTML=(qAndA6[0].answer1);
  answerOne.setAttribute('id', 'ans1');
  answerOne.style.width = '630px';
  answerOne.style.height = '50px';
  quizBox.appendChild(answerOne);

  var answerTwo = document.createElement('button');
  answerTwo.innerHTML=(qAndA6[0].answer2);
  answerTwo.setAttribute('id', 'ans2');
  answerTwo.style.width = '630px';
  answerTwo.style.height = '50px';
  quizBox.appendChild(answerTwo);

  var answerThree = document.createElement('button');
  answerThree.innerHTML=(qAndA6[0].answer3);
  answerThree.setAttribute('id', 'ans3');
  answerThree.style.width = '630px';
  answerThree.style.height = '50px';
  quizBox.appendChild(answerThree);

  var answerFour = document.createElement('button');
  answerFour.innerHTML=(qAndA6[0].answer4);
  answerFour.setAttribute('id', 'ans4');
  answerFour.style.width = '630px';
  answerFour.style.height = '50px';
  quizBox.appendChild(answerFour);

  ans1.addEventListener('click', finishPage);
  ans2.addEventListener('click', finishPage);
  ans3.addEventListener('click', finishPage);
  ans4.addEventListener('click', finishPage);
}

function finishPage(event) {
  checkAnswer(event.target.innerHTML, qAndA6[0].correctAnswer);

  document.getElementById('ques1').remove();
  document.getElementById('ans1').remove();
  document.getElementById('ans2').remove();
  document.getElementById('ans3').remove();
  document.getElementById('ans4').remove();

  var finished = document.createElement('h2');
  finished.innerHTML='All Finished!!!!!!';
  finished.setAttribute('id', 'finish')
  quizBox.appendChild(finished);

  var fScore = document.createElement('h2');
  fScore.innerHTML='Your Final Score is: ________';
  fScore.setAttribute('id', 'finSco');
  quizBox.appendChild(fScore);
  
  var initials = document.createElement('label');
  initials.innerHTML='Enter Initials : ';
  initials.setAttribute('id', 'initials2');
  quizBox.appendChild(initials);

  var entInitials = document.createElement('input');
  entInitials.innerHTML='Enter Initials';
  entInitials.setAttribute('id', 'initialBox');
  quizBox.appendChild(entInitials);

  var submit = document.createElement('button');
  submit.innerHTML='Submit';
  submit.setAttribute('id', 'subBut');
  quizBox.appendChild(submit);

  subBut.addEventListener('click', highScore); 
}

function checkAnswer(userAnswer, correctAnswer) {
// compare userAnswer to correctAnswer
//logic for check answer
results = document.getElementById('checkAnswe');
results.innerHTML=(userAnswer==correctAnswer);
results.setAttribute("style", "color: red; font-size: 30px");
// quizBox.appendChild(results);
console.log(userAnswer==correctAnswer);


}




function highScore() {
  

}
// checkAnswer();
//Page load function called
init();