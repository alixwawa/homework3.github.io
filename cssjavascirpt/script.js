var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var lengthofpass = prompt("Enter the length of the password (type a # between 8-128 please)");
  var passwordLengthBad = true;
  while (passwordLengthBad) {
    if (lengthofpass >= 8 && lengthofpass <= 128) {
      passwordLengthBad = false;
    }
    else {
      alert("HEY!!! The password length must be between the numbers of 8 through 128.");
      lengthofpass = prompt("Enter the desired length of your password (Enter a number between 8-128)");
    }
  }


  var lowercaserequested = confirm("Please confirm if you would like to include lowercase letters.");
  var uppercaserequested = confirm("Please confirm if you would like to include uppercase letters.");
  var numbersrequested = confirm("Please confirm if you would like to include numbers.");
  var specialsrequested = confirm("Please confirm if you would like to include special characters.");
  var charmalo = true;
  while (charmalo) {
    if (lowercaserequested || uppercaserequested || numbersrequested || specialsrequested) {
      charmalo = false;
    }
    else {
      alert("Please select one of the character options");
      lowercaserequested = confirm("Please confirm if you would like to include lowercase letters.");
      uppercaserequested = confirm("Please confirm if you would like to include uppercase letters.");
      numbersrequested = confirm("Please confirm if you would like to include numbers.");
      specialsrequested = confirm("Please confirm if you would like to include special characters.");
    }
  }


  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var specials = '!@#$%^&*()_+}{:>?<';
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  
    var charcount = '';
  var arandpass = '';
  if (lowercaserequested) {
    charcount += lowercaseLetters;
  }
  if (uppercaserequested) {
    charcount += uppercaseLetters;
  }
  if (numbersrequested) {
    charcount += numbers;
  }
  if (specialsrequested) {
    charcount += specials;
  }


  
  for (var i = 1, n = lengthofpass; i <= lengthofpass; i++) {
    var char = Math.floor(Math.random() * charcount.length + 1);
    arandpass += charcount.charAt(char);
  }
  return arandpass;

}
