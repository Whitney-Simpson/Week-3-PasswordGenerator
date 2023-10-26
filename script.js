// Characters to be used in password generator
var lowerCaseChar ="abcdefghijklmnopqrstuvwxyz";
var lowerarray = lowerCaseChar.split("");
var upperarray = lowerCaseChar.toUpperCase().split("");
var numberChar = "0123456789";
var numberarray = numberChar.split("");
var symbolChar = "!@#$%^&*()_+=-";
var symbolarray = symbolChar.split("");



var generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

//Series of prompts for user to use for password criteria
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the number of characters wanted? It must be between 8 - 128"));

  var promptnumbers = confirm("Would you like numbers in your password?");

  var promptlowercase = confirm("Would you like lowercases in your password?");

  var promptuppercase = confirm("Would you like uppercases in your password?");

  var promptspecial = confirm("Would you like special characters in your password?");


  //Functions that create the password

  var functionarrays = [
    function aquirenumbers() {
      return numberChar[Math.floor(Math.random() *numberChar.length)];
    },
    function aquirelowercase() {
      return lowerCaseChar[Math.floor(Math.random() *lowerCaseChar.length)];
    },
    function aquireuppercase() {
      return upperCaseChar[Math.floor(Math.random() *upperCaseChar.length)];
    },
    function aquirespecial() {
      return symbolChar[Math.floor(Math.random() *symbolChar.length)];
    }
  ];

  var passwordGenerator = "";
  var items = []
  if (promptnumbers === true) {
    items = items.concat(numberarray);
  }
  if (promptlowercase === true) {
    items = items.concat(lowerarray);
  }
  
  if (promptuppercase === true) {
    items = items.concat(upperarray)
  }
  
  if (promptspecial === true) {
    items = items.concat(symbolarray);
  }
  
  console.log(items);
  if (items.length === 0) {
    alert("Must choose at least one character type");
    return "Please try again"
  }
 //
 if (isNaN(passwordLength)){
  alert("Must select a number between 8 and 128");
  return "Please try again"
 }

  //Randomizing 
  for (let i = 0; i < passwordLength; i++) {
    var randomChar = items[Math.floor(Math.random() *items.length)];

    passwordGenerator += randomChar;
  }
// return "Test"
  return passwordGenerator;
}
;
