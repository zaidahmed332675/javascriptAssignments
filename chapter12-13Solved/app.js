/* 1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122). */

var character = prompt("Enter Character");

console.log(character.charCodeAt());

if(character.charCodeAt() >= 65 && character.charCodeAt() <=90)
    alert(`${character} IS IN UPPER CASE`)
else if(character.charCodeAt() >= 97 && character.charCodeAt() <= 122)
    alert(`${character} IS IN LOWER CASE`)
else if(character.charCodeAt() >= 48 && character.charCodeAt() <= 57)
    alert(`${character} IS A NUMBER`)

/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */

document.write(`/*---------------------------------------------*/<br><br>`);


var fNum = +prompt("Enter First Number");
var sNum = +prompt("Enter Second Number");

if (fNum < sNum){
    alert(`${sNum} Is Greater Than ${fNum}`);
}
else if (fNum > sNum){
    alert(`${fNum} Is Greater Than ${sNum}`);
}
else if (fNum === sNum){
    alert(`${fNum} Is EQUAL TO ${sNum}`);
}

/* 3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.  */ 

document.write(`/*---------------------------------------------*/<br><br>`);

var numToCheck = +prompt("ENTER A NUMBER TO CHECK IF IT IS POSITIVE, NEGATIVE OR ZERO");

if (numToCheck > 0 ){
    alert(`${numToCheck} IS POSITIVE`)
}else if(numToCheck < 0 ){
    alert(`${numToCheck} IS NEGATIVE`)
}else if(numToCheck === 0){
    alert(`${numToCheck} IS EQUAL TO ZERO`)
}


/* 4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise */

document.write(`/*---------------------------------------------*/<br><br>`);

var checkLetter = +prompt("ENTER A CHARACTER TO CHECK IF IT IS VOWEL OR NOT").toLowerCase();

if (checkLetter == "a" || checkLetter == "e" || checkLetter == "i" || checkLetter == "o" || checkLetter == "u" ){
    alert(`${checkLetter} IS VOWEL`)
}else{
    alert(`${checkLetter} IS NOT A VOWEL`)
}

/* 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise. */

document.write(`/*---------------------------------------------*/<br><br>`);


var password = "123246";
var validatPassword = prompt("ENTER YOUR PASSWORD");

if (validatPassword === "undefined"){
    validatePassword = prompt("PLEASE ENTER YOUR PASSWORD");
}else if(validatPassword === password){
    alert(`Correct! The password you entered matches the original password`);
}
else{
    alert("INCORRECT PASSWORD");
}


/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */

document.write(`/*---------------------------------------------*/<br><br>`);

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}


/* 7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements */

document.write(`/*---------------------------------------------*/<br><br>`);

var currentTime = +prompt("ENTER CURRENT TIME (1900 = 7PM)");

if(currentTime >= 0000 && currentTime < 1200)
    alert(`${currentTime} GOOD MORNING`)
else if(currentTime >= 1200 && currentTime < 1700)
    alert(`${currentTime} GOOD AFTERNOON`)
else if(currentTime >= 1700 && currentTime < 2100)
    alert(`${currentTime} GOOD EVENING`)
else if(currentTime >= 2100 && currentTime < 2359)
    alert(`${currentTime} GOOD NIGHT`)    