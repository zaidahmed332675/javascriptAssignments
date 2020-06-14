/* 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */

var cityName = prompt("Enter Your City").toUpperCase();

if(cityName === "KARACHI"){
    alert("WELOME TO THE CITY OF LIGHTS");
}

/* 2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am. */

document.write(`/*---------------------------------------------*/<br><br>`);


var gender = prompt("Enter Your Gender").toUpperCase();

if (gender === "MALE"){
    alert("Good Morning Sir");
}
else if(gender === "FEMALE"){
    alert("Good Morning Ma'am");
}
else{
    alert("INVALID GENDER");
}


/* 3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:  */ 

document.write(`/*---------------------------------------------*/<br><br>`);

var trafficSignal = prompt("Please Enter Traffic Signal Color").toUpperCase();

if (trafficSignal === "RED"){
    alert("MUST STOP!")
}else if(trafficSignal === "YELLOW"){
    alert("READY TO MOVE");
}else if(trafficSignal === "GREEN"){
    alert("MOVE NOW")
}else{
    alert("INVALID COLOR");
}


/* 4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car */
document.write(`/*---------------------------------------------*/<br><br>`);

var remaFuel = prompt("Enter Remaining Fuel In Litres");
if(remaFuel === 0.25)
    alert("Please refill the fuel in your car")
else
    alert("The Fuel Is Good Enough");


/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs. */

document.write(`/*---------------------------------------------*/<br><br>`);

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}

if (c === 13){
    alert("condition 2 is true");
}

if (++c < 14){
    alert("condition 3 is true");
}

if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}

if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}


/* 6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table: */

document.write(`/*---------------------------------------------*/<br><br>`);

var subject = new Array(3);
var obtainedmarks = new Array(3);
var totalMarks = 100;

for (let i = 0; i < subject.length; i++) {
    subject[i] = prompt("Enter Your Subjects");
    obtainedmarks[i] = +prompt(`Obtain Marks In ${subject[i]}`);
}

var Percentage = ((obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]) / (totalMarks * 3)) * 100;

var [grade,remarks] = (Percentage >= 80) ? ["A-one","Excellent"] : (Percentage >= 70) ? ["A","Good"] : (Percentage >= 60) ? ["B","You Need To Improve"] : ["Fail","Sorry"];

document.write(`

<table border="1">
    <tr>
        <th> Total Marks </th>
        <th> Obtained Marks </th>
        <th> percentage </th>
        <th> Grade </th>
        <th> Remarks </th>
    </tr>   
    <tr>
        <td> ${totalMarks * 3} </td>
        <td> ${obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]} </td>
        <td> ${Math.round(((obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]) / (totalMarks * 3)) * 100)} % </td>
        <td> ${grade}</td>
        <td> ${remarks}</td>
    </tr>
</table>

`);


/* 7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer” */

document.write(`/*---------------------------------------------*/<br><br>`);

var guessRandom = Math.floor(Math.random() * 11);

var guessNumber = +prompt("Guess The Secret Number");

if(guessNumber === guessRandom ){
    alert("Bingo! Correct answer");
}else if(guessRandom === guessNumber + 1){
    alert("Close enough to the correct answer");
}
else{
    alert("You Lose");
}


/* 8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3. */


var divNum = +prompt("Enter A Number TO Check If It Is Divisible By 3");

if (divNum % 3 == 0){
    alert(`${divNum} Number Is Divisible By 3`);
}



/* 9. Write a program that checks whether the given input is an
even number or an odd number. */


var even_odd = +prompt("ENTER A NUMBER TO CHECK EVEN OR ODD");

if(even_odd % 2 == 0)
    alert(`${even_odd} IS EVEN NUMBER`);
else{
    alert(`${even_odd} IS ODD NUMBER`);
}


/* 10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */


var temperature = +prompt("ENTER TEMPERATURE");

if(temperature > 40 )
    alert(`IT IS TO HOT OUTSIDE`);
else if(temperature > 30 )
    alert(`THE WEATHER TODAY IS NORMAL`);
else if(temperature > 20 )
    alert(`TODAY'S WEATHER IS SO COOL`);
else if(temperature > 10 )
    alert(`OMG! TODAY'S WEATHER IS SO COOL`);
else{
    alert("OMG WEATHER");
}


/* 11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user */


var firstNum = +prompt("Enter First Number");
var operator = prompt("Enter Operator Number");
var secondNum = +prompt("Enter Second Number");


if(operator === "+" )
    alert(`SUM OF ${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
else if(operator === "-" )
    alert(`SUB OF ${firstNum} + ${secondNum} = ${firstNum - secondNum}`)
else if(operator === "*" )
    alert(`MUL OF ${firstNum} + ${secondNum} = ${firstNum * secondNum}`)
else if(operator === "/" )
    alert(`DIV OF ${firstNum} + ${secondNum} = ${firstNum / secondNum}`)
else if(operator === "%" )
    alert(`MOD OF ${firstNum} + ${secondNum} = ${firstNum % secondNum}`)
else{
    alert("INVALID OPERATION");
}






document.write(`

<table border="1">
    <tr>
        <th> Total Marks </th>
        <th> Obtained Marks </th>
        <th> percentage </th>
        <th> Grade </th>
        <th> Remarks </th>
    </tr>   
    <tr>
        <td> ${totalMarks * 3} </td>
        <td> ${obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]} </td>
        <td> ${Math.round(((obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]) / (totalMarks * 3)) * 100)} % </td>
        <td> ${grade}</td>
        <td> ${remarks}</td>
    </tr>
</table>

`);
