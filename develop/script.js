// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function generatePassword() {

  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numbers = ["0","1","2","3","4","5","6","7","8","9","0"];
  const special = ["!","@","#","$","%","^","&","*","(",")"];

//password length
  var passwordLength = window.prompt("Enter a password length: ");
  while (passwordLength<8 | passwordLength>128){
    passwordLength = window.prompt("Enter a length between 8 and 128: ");
  }
  alert("Your password is " + passwordLength + " characters long.");

//types of characters
  var charConfirm = "You chose";

  var typeCount = 0;

  var chars = [];

  var lowerQ = window.prompt("Do you want lower case letters (yes/no): ");
  if (lowerQ == "yes"){

    chars = chars.concat(lowerCase);
    typeCount++;
    charConfirm += " lower case letters";
  }
  
  var upperQ = window.prompt("Do you want upper case letters (yes/no): ");
  if (upperQ == "yes"){

    chars = chars.concat(upperCase);
    typeCount++;
    charConfirm += " upper case letters";
  }

  var numberQ = window.prompt("Do you want numbers (yes/no): ");
  if (numberQ == "yes"){

    chars = chars.concat(numbers);
    typeCount++;
    charConfirm += " numbers";
  }
  
  var specialQ = window.prompt("Do you want special characters (yes/no): ");
  if (specialQ == "yes"){

    chars = chars.concat(special);
    typeCount++;
    charConfirm += " special characters"
  }

  while (typeCount==0){
    alert("please select at least one character type")

    var lowerQ = window.prompt("Do you want lower case letters (yes/no): ");
  if (lowerQ == "yes"){

    chars = chars.concat(lowerCase);
    typeCount++;
    charConfirm += " lower case letters";
  }
  
  var upperQ = window.prompt("Do you want upper case letters (yes/no): ");
  if (upperQ == "yes"){

    chars = chars.concat(upperCase);
    typeCount++;
    charConfirm += " upper case letters";
  }

  var numberQ = window.prompt("Do you want numbers (yes/no): ");
  if (numberQ == "yes"){

    chars = chars.concat(numbers);
    typeCount++;
    charConfirm += " numbers";
  }
  
  var specialQ = window.prompt("Do you want special characters (yes/no): ");
  if (specialQ == "yes"){

    chars = chars.concat(special);
    typeCount++;
    charConfirm += " special characters"
  }
  }

    alert (charConfirm);
//password putter-together
  var password1 = "";
  for (var i = 0; i< passwordLength; i++){
    var randomInt = Math.floor(chars.length * Math.random());
    password1 = password1 + chars[randomInt];
  }

  return password1;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  
  
  passwordText.value = password;

  // passwordText.value = document.getElementById("#password").type="radio";

 

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);