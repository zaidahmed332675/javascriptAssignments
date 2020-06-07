

/* 1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser. */

var num1 = +prompt("Enter 1st Number");
var num2 = +prompt("Enter 2nd Number");

document.write("Sum Of " +num1+ " and " +num2+ " is: " + (num1 + num2) +"<br>");

/* 2. Repeat task1 for subtraction, multiplication, division & modulus */

document.write("Subtraction Of " +num1+ " and " +num2+ " is: " + (num1 - num2) +"<br>");
document.write("Multiplication Of " +num1+ " and " +num2+ " is: " + num1 * num2 +"<br>");
document.write("Division Of " +num1+ " and " +num2+ " is: " + num1 / num2 +"<br><br>");


/* 2. Do the following using JS Mathematic Expressions */
    
    /* a. Declare a variable */
    var var1;

    /* b. Show the value of variable in your browser like “Value
after variable declaration is: ??”. */ 
    document.write("Value after variable declaration is: "+ var1+ "<br>");

    /* c. Initialize the variable with some number. */ 
    var1 = 10;

    /* d. Show the value of variable in your browser. */ 
    document.write("Initial Value Is: " + var1 +"<br>");

    /* e. Increment the variable. */ 
    var1++;
    
    /* e. Show the value of variable in your browser. */ 
    document.write("Value after increment is: " + var1 +"<br>");
    
    /* e. Add 7 to the variable. */ 
    var1 += 7;
    
    /* e. Show the value of variable in your browser. */ 
    document.write("Value after addition is: " + var1 +"<br>");
    
    /* e. Decrement the variable. */ 
    var1--;
    
    /* e. Show the value of variable in your browser. */ 
    document.write("Value after decrement is: " + var1 +"<br>");
    
    /* e. Show the remainder after dividing the variable’s value by 3. */ 
    document.write("The remainder is: " + var1 % 3 + "<br>");
    
    
    /* e. 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price 
    in a variable & calculate the cost of buying 5 tickets to a movie.. */ 
    
    var ticketPrice = 600;
    var totalTickets = 5;
    document.write("Total Cost To Buy "+ totalTickets +" Tickets To A Movie is: " + totalTickets * ticketPrice + " PKR"+"<br>");

    /* 5. Write a script to display multiplication table of any number in your browser. E.g */ 

    document.write("<h1>Table Of 4</h1>");
    document.write("4 x 1 = " + 4 * 1+"<br>");
    document.write("4 x 2 = " + 4 * 2+"<br>");
    document.write("4 x 3 = " + 4 * 3+"<br>");
    document.write("4 x 4 = " + 4 * 4+"<br>");
    document.write("4 x 5 = " + 4 * 5+"<br>");
    document.write("4 x 6 = " + 4 * 6+"<br>");
    document.write("4 x 7 = " + 4 * 7+"<br>");
    document.write("4 x 8 = " + 4 * 8+"<br>");
    document.write("4 x 9 = " + 4 * 9+"<br>");
    document.write("4 x 10 = " + 4 * 10+"<br><br>");

    /* 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here */ 

    var celciusTemp = 21;
    var farenheit = Math.round((celciusTemp * (9/5)) + 32);
    var backtocelciusTemp = (farenheit - 32) * 5/9;

    document.write(celciusTemp + " °C is " + farenheit + " °F<br>");
    document.write(farenheit + " °F is " + celciusTemp + " °C");