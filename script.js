// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var lowerCase = "";
var upperCase = "";
var special = "";
var numbers = "";
var passwordChar = "";
var password = "";

// var passwordChars = [["A"], ["@"], ["3"]];

var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");
// var numberChars = "0123456789".split("");
// todo: convert numberChars to an array of numbers
var passwordChars = [];
// var passwordChars = [];
// var password = "";

//* todo: remove after testing
// console.log(lowerChars);
// console.log(upperChars);
// console.log(specialChars);
// console.log(numberChars);
console.log(passwordChars);

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   console.log("password");

function getInput() {
  passwordLength = prompt("How many charactors?");
  if (passwordLength > 20) {
    alert("Please choose between 5 - 20");
    return null;
  } else if (passwordLength < 5) {
    alert("Please choose between 5 - 20");
    return null;
  }
  lowerCase = confirm(
    "Do you want to include lower case? Click cancel for no."
  );
  if (lowerCase) {
    passwordChars.push(lowerChars);
    console.log(passwordChars);
  }
  upperCase = confirm(
    "Do you want to include upper case? Click cancel for no."
  );
  if (upperCase) {
    passwordChars.push(upperChars);
    console.log(passwordChars);
  }
  special = confirm(
    "Do you want to include special characters? Click cancel for no."
  );
  if (special) {
    passwordChars.push(specialChars);
    console.log(passwordChars);
  }
  // numbers = confirm("Do you want to include numbers? Click cancel for no.");
  // if (numbers) {
  //   passwordChars.push(numbers);
  //   console.log(passwordChars);
  // }

  // TODO: add the cancel option for the other options below
  // and also add an if statement for each option
  // upperCase = confirm("Do you want to include upper case?");
  // special = confirm("Do you want to include special charactors?");
  // numbers = confirm("Do you want to include numbers?");
  console.log(passwordLength, lowerCase, upperCase, special);

  // TODO: Call the function that will build the password
}

// TODO: Create a function for this to live in
// TODO: Create a for loop that runs as many times as the password length
// var randomIndex = Math.floor(Math.random() * passwordChars.length);
// var randomCharIndex = Math.floor(Math.random() * passwordChars[randomIndex]);
// var randomChar = passwordChars[randomIndex][randomCharIndex];

// TODO: Write the password to the html
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getInput);
