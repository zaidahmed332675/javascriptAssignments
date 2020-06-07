/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser. */

document.write("<h1>Result</h1><br>");

var randomNum = +prompt("Enter A Number");

document.write("The Value Of Variable Is: "+ randomNum+"<br><br>");

document.write("The Value Of ++variable Is: "+ (++randomNum) +"<br>");
document.write("Now The Value Of Variable Is: "+ randomNum +"<br><br>");

document.write("The Value Of variable++ Is: "+ (randomNum++) +"<br>");
document.write("Now The Value Of Variable Is: "+ randomNum +"<br><br>");

document.write("The Value Of --variable Is: "+ (--randomNum) +"<br>");
document.write("Now The Value Of Variable Is: "+ randomNum +"<br><br>");

document.write("The Value Of variable-- Is: "+ (randomNum--) +"<br>");
document.write("Now The Value Of Variable Is: "+ randomNum +"<br><br>");

/* 2. What will be the output in variables a, b & result after
execution of the following script: */

/* var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

*/

