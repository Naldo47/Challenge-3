// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']
var password = "";

var mega = []


function generatePassword(){
 var passwordLength = prompt("How many character would you like?")
console.log(passwordLength)
var upOption = confirm("Would you like Upper Case?")
console.log(upOption)
var lowerC = confirm("Would you like Upper Lower Case?")
console.log(lowerC)
var nunvers = confirm ( "Would you like Numbers?")
console.log(nunvers)
var speciall = confirm("Would you like Special Letter?")
console.log(speciall)

if (upOption) {
  console.log("mega", mega)
  mega = mega + uppercase 
  console.log("after", mega)

}

if (lowerC) {
  console.log("mega", mega)
  mega = mega + lowercase
  console.log("after", mega)

}

if (nunvers) {
  console.log("mega", mega)
  mega = mega + numbers
  console.log("after", mega)

}

if (speciall) {
  console.log("mega", mega)
  mega = mega + special
  console.log("after", mega)

}


 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for (var i=0; i <= mega.Length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber. randomNumber +1);

  }

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


