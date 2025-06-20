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
