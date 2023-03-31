// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var lowerCase = "";
var upperCase = "";
var special = "";
var numbers = "";
var passwordChar = "";
var password = "";

// TODO: Remove these arrays from passwordChars and fill out with chars
passwordChars = [["A"], ["@"], ["3"]];
var lowerChars = ["a"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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
  }
  // TODO: add the cancel option for the other options below
  // and also add an if statement for each option
  upperCase = confirm("Do you want to include upper case?");
  special = confirm("Do you want to include special charactors?");
  numbers = confirm("Do you want to include numbers?");
  console.log(passwordLength, lowerCase, upperCase, numbers, special);

  // TODO: Call the function that will build the password
}

// TODO: Create a function for this to live in
// TODO: Create a for loop that runs as many times as the password length
var randomIndex = Math.floor(Math.random() * passwordChars.length);
var randomCharIndex = Math.floor(Math.random() * passwordChars[randomIndex]);
var randomChar = passwordChars[randomIndex][randomCharIndex];

// TODO: Write the password to the html
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getInput);
