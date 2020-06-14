/* 1. Declare an empty array using JS literal notation to store
student names in future.
 */

var students = [];

/* 2. Declare an empty array using JS object notation to store
student names in future. */

var studentNames = new Array();

/* 3. Declare and initialize a strings array. */

var stringArray = ["a","s","d"];


/* 4. Declare and initialize a numbers array. */

var numberArray = [0,1,2];

/* 5. Declare and initialize a boolean array. */

var boolArray = [true,false];


/* 6. Declare and initialize a mixed array */

var mixArray = ["char", 0 , true];


/* 7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like: */

var qualification = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD" ];

    document.write(`<h1>QUALIFICATION</h1><br>`);
qualification.forEach((item,index)=>{
    document.write(`${index} - ${item}<br>`);
})
document.write("<br><br>");

/* 8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */

document.write(`/*---------------------------------------------*/<br><br>`);

var obtainedmarks = [];
var totalmarks = 500;
for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter Your Subjects");
    obtainedmarks[i] = +prompt(`Obtain Marks In ${students[i]}`);
}

document.write(`Score of ${students[0]} is : ${obtainedmarks[0]} And Percentage Is : ${obtainedmarks[0] / totalmarks * 100}<br>`);
document.write(`Score of ${students[1]} is : ${obtainedmarks[1]} And Percentage Is : ${obtainedmarks[1] / totalmarks * 100}<br>`);
document.write(`Score of ${students[2]} is : ${obtainedmarks[2]} And Percentage Is : ${obtainedmarks[2] / totalmarks * 100}<br><br>`);


/* 9. Initialize an array with color names. Display the array
elements in your browser. */ 

document.write(`/*---------------------------------------------*/<br><br>`);

var colors = ["RED","GREEN","BLUE","PURPLE"];
document.write("<p>INITIAL ARRAY VALUES</p><br>[");
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");

/* a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser. */

document.write("<p>INSERT NEW VALUE AT THE START</p><br>[");
var newColor = prompt("Insert A New Color At The Start");
colors.splice(0,1,newColor);
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");

/*b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.*/

document.write("<p>INSERT NEW VALUE AT THE END</p><br>[");
var newColor = prompt("Insert A New Color At The End");
colors.push(newColor);
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");

/* c. Add two more color to the beginning of the array.
Display the updated array in your browser. */

document.write("<p>INSERT TWO NEW VALUE AT THE STARt</p><br>[");
colors.splice(0,2,"Wheat, Maroon");
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");

/* d. Delete the first color in the array. Display the updated
array in your browser. */

document.write("<p>DELETING 1ST ITEM FROM ARRAY</p><br>[");
colors.shift();
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");

/* e. Delete the last color in the array. Display the updated
array in your browser. */

document.write("<p>Deleting LAST ITEM FROM ARRAY</p><br>[");
colors.splice(-1,1);
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");

/* f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser. */

document.write("<p>INSERT NEW VALUE AT SPECIFIC POSITION</p><br>[");
var newColor = prompt("INSERT NEW COLOR");
var arrayIndex = prompt(`AT WHICH INDEX YOU WANT TO INSERT ${newColor} COLOR`,);
colors.splice(arrayIndex,1,newColor);
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");
/* g-Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */

document.write("<p>REMOVE MULTIPLES VALUES FROM SPECIFIC POSITION</p><br>[");
var arrayIndex = prompt(`AT WHICH INDEX YOU WANT TO REMOVE COLORS`,);
var colorLimit = prompt("How Many Colors You Want To Remove In Numbers");
colors.splice(arrayIndex,colorLimit);
colors.forEach((item,index)=>{
    document.write(` ${item} `);
});
document.write("]<br><br>");


/* 10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort method. */ 

document.write(`/*---------------------------------------------*/<br><br>`);

var studentsMarks = [78,89,45,67];
document.write(`Scores OF Students: ${studentsMarks}<br><br>` );
studentsMarks.sort();
document.write(`Ordered Scores OF Students: ${studentsMarks}<br><br>` );

