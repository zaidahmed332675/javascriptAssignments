

/* 1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */
var age = 25;
alert("My Age Is "+age);

/* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */

var myName = "ZAID BIN AHMED MAKHARISH";

/* 3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser: */
    
var birthYear = 1997;
document.write("My Birth Year Is 1990<br/>");
document.write("Data Type Of My Declared Variable IS " + typeof birthYear +"<br/>");

/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

var visitorName = prompt("Enter Your Name");
var product = prompt("WHAT PRODUCT YOU WANT");
var quantity = prompt("how much "+product+" quantity do you want?");

document.write("<strong>"+visitorName+"<strong/> ordered "+quantity+" "+product+" on XYZ Clothing Store");