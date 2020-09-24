// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //ask for password length 
  var passlengh =  prompt("How many characters would you like for your password?") ;

  //put the length inside the generator
  var length = passlengh,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
  passwordText = "";

  //using loop and array`s characters makes a random password
for (var i = 0, n = charset.length; i < length; ++i) {
  passwordText += charset.charAt(Math.floor(Math.random() * n));
}

//log the Generated password 
console.log(passwordText);

//Selecting the ID for "Generated password"
var GeneratedPassword = document.querySelector("#password");

//Assign the "Generated password" to the content of the text(line 19-25)
GeneratedPassword.textContent = passwordText;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


