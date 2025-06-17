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
