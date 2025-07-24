// Email Masking Start

function maskEmail(email){
  var i = email.indexOf("@");
  let lengthToBeRemoved = email.slice(1, i -1);
  let replaceThis = lengthToBeRemoved.length;

  return email.replace(email.slice(1, i -1 ), "*".repeat(replaceThis));
}

let email = "myEmail@email.com";

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));

// Email Masking End


// Leap Year Start
let year = 2025;
let result;

function isLeapYear(year){

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return result =  year + " is a leap year.";
  }
  else{
    return result =  year + " is not a leap year.";
  }
}

result = isLeapYear(year);
console.log(result);
// Leap Year End

// Truncate a String Algorithm Start
let word = "Brian";
let limitNum = 2;

function truncateString (word, limitNum){
  if (word.length <= limitNum){
    return word;
  }
  else{
  return word.replace(word.slice(limitNum), ".".repeat(3));
  }
}

console.log(truncateString(word, limitNum));
console.log(truncateString("A-", 1));
// Truncate a String Algorithm End

// Quiz Game Start
let questions = [
  {
    category: "Entertainment",
    question: "Who sang the title song for the latest Bond film, No Time to Die?",
    choices:["Adele","Sam Smith","Billie Eilish"],
    answer:"Billie Eilish"
  },
  {
    category: "Geography",
    question: "Which flies a green, white, and orange (in that order) tricolor flag? ",
    choices:["Ireland","Ivory Coast","Italy"],
    answer:"Ireland"
  },
  {
    category: "Gadgets",
    question: "What company makes the Xperia model of smartphone?",
    choices:["Samsung","Sony","Nokia"],
    answer:"Sony"
  },
  {
    category: "Geography",
    question: "Which city is home to the Brandenburg Gate?",
    choices:["Vienna","Zurich","Berlin"],
    answer:"Berlin"
  },
  {
    category: "Science",
    question: "Which of the following is NOT a fruit?",
    choices:["Rhubarb","Tomatoes","Avocados"],
    answer:"Rhubarb"
  }
];

function getRandomQuestion(question){
  const random = Math.floor(Math.random() * question.length);
return random, question[random];
}

function getRandomComputerChoice(choices){
  const random = Math.floor(Math.random() * choices.length);
return random, choices[random];
}

function getResults(question, answer){
  if(question.answer === answer){
    return "The computer's choice is correct!";
  }
  else{
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}

let questionForToday = (getRandomQuestion(questions));

let inQuestion = questionForToday.question;

let answerForToday = (getRandomComputerChoice(questionForToday.choices));

console.log(getResults(questionForToday, answerForToday));
// Quiz Game End
