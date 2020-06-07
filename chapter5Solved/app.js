

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


    /* 7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables */ 

    document.write("<h1>Shopping Cart</h1><br>");

    var item1Price = 650;
    var item2Price = 3;
    var item1Quantity = 100;
    var item2Quantity = 7;
    var shippingCharges = 100;

    document.write("Price Of item 1 is: "+ item1Price +"<br>");
    document.write("Price of item 2 is: "+ item2Price +"<br>");
    document.write("Ordered quantity of item 1 is: "+ item1Quantity +"<br>");
    document.write("Ordered Quantity of item 2 is: "+ item2Quantity +"<br>");
    document.write("Shipping charges: "+ shippingCharges +"<br>");

    var totalCost = (item1Quantity * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
    document.write("Total Cost Of Your Order Is: "+ totalCost +"<br>");

    
    /* 8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser */ 

    document.write("<h1>Mark Sheet</h1><br>");

    var totalMarks = 980;
    var marksObtained = 804;
    var percentage = (totalMarks / marksObtained) * 100;

    document.write("Total Marks: "+ totalMarks +"<br>");
    document.write("Marks Obtained: "+ marksObtained +"<br>");
    document.write("percentage: "+ percentage +"%<br>");


    /* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee) */ 

document.write("<h1>Currency In PKR</h1><br>");

var usDollars = 10;
var saudiRiyals = 25;

var pkr = (usDollars * 104.80 ) + ( saudiRiyals * 28);

document.write("Total Currency In PKR: "+ pkr +"<br>");


/* 10. Write a program to initialize a variable with some
number and do arithmetic in following sequence: */ 
/* a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */ 

var num = 10;
num = ((num + 5) * 10) / 2;

document.write("RESULT IS: "+ num +"<br>");


/* 11. The Age Calculator: Forgot how old someone is? */ 
/* a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values */ 

var currentYear = 2020;
var birthYear = 1997;
calculatedAge = currentYear - birthYear;

document.write("They Are Either: "+ calculatedAge +" Or "+ (calculatedAge + 1) +"<br>");


/* 12. The Geometrizer: Calculate properties of a circle */ 
/* a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */ 

document.write("<h1>The Geometrizer</h1><br>");

    var r = 20;
    var pie = 3.142;
    var circumference = 2 * pie * r;
    var area = pie * (r^2);

    document.write("Radius Of A Circle: "+ r +"<br>");
    document.write("The Circumference Is: "+ circumference +"<br>");
    document.write("The Area Is: "+ area +"%<br>");


    /* 13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more. */
/* a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life. */ 

document.write("<h1>The Lifetime Supply Calculator</h1><br>");

var snack = "Candy Biscuit";
var currentAge = 24;
var expectedAge = 85;
var snackPerDay = 3;
var remainingYear = expectedAge - currentAge;
var daysLeft = remainingYear * 365;
var noOfSnacks = daysLeft * snackPerDay;    

document.write("You Will Need : "+ noOfSnacks + " " +snack+" To Last You Untill The Ripe Old Age Of 85<br>");
