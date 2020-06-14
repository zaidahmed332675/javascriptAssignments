/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser. */

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

document.write(`/*---------------------------------------------*/<br><br>`);


var a = 2;
var b = 1;

document.write(`The initial Value of a is : ${a}<br>`);
document.write(`The initial Value of b is : ${b}<br><br>`);

document.write(`The Value Of a after --a become : 1<br>`);
document.write(`The Value Of b after --b become : 0<br><br>`);

document.write(`The Value Of b after ++b become : 1<br>`);
document.write(`The Value Of b after b-- become : 1<br><br>`);

var result = --a - --b + ++b + b--;
document.write(`Now The Final Result Value Is ( --a - --b + ++b + b-- ) : ${result}<br><br>`);



/* 3. Write a program that takes input a name from user &
greet the user. */ 
document.write(`/*---------------------------------------------*/<br><br>`);

var username = prompt("Please Enter Your Name");
alert(`Welcome ${username}`);


/* 5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.
*/
document.write(`/*---------------------------------------------*/<br><br>`);

var tableNum = +prompt("Enter Number To Print Table");
if(tableNum === 0)
    tableNum = 5;
document.write(`<h1>Multiplication Table Of ${tableNum}</h1><br>`);

for (var i = 1; i <= 10 ; i++){
    document.write(`${tableNum} x ${i} = ${tableNum * i}<br>`);
}

/* 6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
ALERTS | JAVASCRIPT
Page 3 of 3
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table) */

document.write(`/*---------------------------------------------*/<br><br>`);

var subject = new Array(3);
var obtainedmarks = new Array(3);
var totalMarks = 100;

for (let i = 0; i < subject.length; i++) {
    subject[i] = prompt("Enter Your Subjects");
    obtainedmarks[i] = +prompt(`Obtain Marks In ${subject[i]}`);
}


console.log((obtainedmarks[0] / totalMarks) * 100);


document.write(`

<table>
    <tr>
        <th> Subject </th>
        <th> Total Marks </th>
        <th> Obtained Marks </th>
        <th> percentage </th>
    </tr>
    <tr>
        <td> ${subject[0]} </td>
        <td> ${totalMarks} </td>
        <td> ${obtainedmarks[0]} </td>
        <td> ${(obtainedmarks[0] / totalMarks) * 100} % </td>
    </tr>
    <tr>
        <td> ${subject[1]} </td>
        <td> ${totalMarks} </td>
        <td> ${obtainedmarks[1]} </td>
        <td> ${(obtainedmarks[1] / totalMarks) * 100} % </td>
    </tr>
    <tr>
        <td> ${subject[2]} </td>
        <td> ${totalMarks} </td>
        <td> ${obtainedmarks[2]} </td>
        <td> ${(obtainedmarks[2] / totalMarks) * 100} % </td>
    </tr>
    <tr>
        <td></td>
        <td> ${totalMarks * 3} </td>
        <td> ${obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]} </td>
        <td> ${((obtainedmarks[0] + obtainedmarks[1] + obtainedmarks[2]) / (totalMarks * 3)) * 100} % </td>


    </tr>
</table>

`);
console.log(subject);