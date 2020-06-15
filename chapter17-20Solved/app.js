/* 1. Declare and initialize an empty multidimensional array. (Array of arrays) */

var  multArray = [[1],[2],[3]];

/* 2. Declare and initialize a multidimensional array
representing the following matrix: */

var  multArrayMatrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

/* 3. Write a program to print numeric counting from 1 to 10. */
document.write("<h1>COUNTING FROM 1 TO 10</h1>");
for (let i = 1; i <= 10; i++) {
    document.write(`${i}<br>`);
}


/* 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/


var table = +prompt("ENTER A NUMBER TO PRINT A TABLE");
var tableLength = +prompt("ENTER LENGTH OF A TABLE TO PRINT");
document.write(`<h1>MULTIPLICATION TABLE OF ${table} OF LENGTH ${tableLength}</h1><br>`);
for (let i = 1; i <= tableLength; i++) {
    document.write(`${table} x ${i} = ${table * i}<br>`);
}



/* 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */

var fruits = ["apple", "banana", "mango", "orange","strawberry"];

document.write(fruits+"<br><br>");

fruits.forEach((item,index)=>{
    document.write(`ELEMENT AT INDEX ${index} IS ${item}<br>`);
})


/* 6. Generate the following series in your browser. See
example output. */

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h1>COUNTING FROM 1 TO 10</h1><p>");
for (let i = 1; i <= 15; i++) {
    document.write(`${i}<br>`);
    if(i < 15 ){
        document.write(",");
    }
}
document.write("</p>");


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h1>COUNTING FROM 10 TO 1</h1><p>");
for (let i = 10; i > 0; i--) {
    document.write(`${i}<br>`);
    if(i > 1 ){
        document.write(",");
    }
}
document.write("</p>");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h1>EVEN NUMBER COUNTING FROM 0 TO 20</h1><p>");
for (let i = 0; i <= 20; i = i + 2) {
    document.write(`${i}<br>`);
    if(i < 20 ){
        document.write(",");
    }
}
document.write("</p>");


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h1>ODD NUMBER COUNTING FROM 1 TO 19</h1><p>");
for (let i = 1; i <= 20; i = i + 2) {
    document.write(`${i}<br>`);
    if(i < 20 ){
        document.write(",");
    }
}
document.write("</p>");


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */
document.write("<h1>SERIES FROM 2K TO 20K</h1><p>");
for (let i = 2; i <= 20; i = i + 2) {
    document.write(`${i}k<br>`);
    if(i < 20 ){
        document.write(",");
    }
}
document.write("</p>");