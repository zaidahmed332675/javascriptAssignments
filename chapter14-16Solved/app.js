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
document.write("<h4>INITIAL ARRAY VALUES</h4><br>");
document.write(`[${colors}] `);
document.write("<br><br>");

/* a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser. */


var newColor = prompt("INSERT A NEW COLOR AT THE START").toUpperCase();
document.write(`<h4>INSERT ${newColor} AT THE START</h4><br>`);
colors.splice(0,0,newColor);
document.write(`[${colors}] `);
document.write("<br><br>");

/*b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.*/

var newColor = prompt("INSERT A NEW COLOR AT THE END").toUpperCase();
document.write(`<h4>INSERT ${newColor} AT THE END</h4><br>`);
colors.push(newColor);
document.write(`[${colors}]`);
document.write("<br><br>");

/* c. Add two more color to the beginning of the array.
Display the updated array in your browser. */

document.write("<h4>INSERT WHEAT AND MAROON AT THE START</h4><br>");
colors.splice(0,0,"WHEAT","MAROON");
document.write(`[${colors}]`);
document.write("<br><br>");

/* d. Delete the first color in the array. Display the updated
array in your browser. */

document.write("<h4>DELETING 1ST ITEM FROM ARRAY</h4><br>");
colors.shift();
document.write(`[${colors}]`);
document.write("<br><br>");

/* e. Delete the last color in the array. Display the updated
array in your browser. */

document.write("<h4>DELETING LAST ITEM FROM ARRAY</h4><br>");
colors.splice(-1,1);
document.write(` [${colors}] `);
document.write("<br><br>");

/* f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser. */


var newColor = prompt("TYPE A COLOR NAME TO INSERT IT ON YOUR FAVOURITE POSITION").toUpperCase();
var arrayIndex = +prompt(`AT WHICH INDEX YOU WANT TO INSERT ${newColor} COLOR`);
document.write(`<h4>INSERT ${newColor} AT POSITION ${arrayIndex}</h4><br>`);
colors.splice(arrayIndex,0,newColor);
document.write(` [${colors}] `);
document.write("<br><br>");
/* g-Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */

var arrayIndex = +prompt(`AT WHICH INDEX YOU WANT TO REMOVE COLORS`);
var colorLimit = +prompt("HOW MANY COLORS YOU WANT TO REMOVE (TYPE NUMBER)");
document.write(`<h4>REMOVE ${colorLimit} COLORS FROM POSITION ${arrayIndex}</h4><br>`);
colors.splice(arrayIndex,colorLimit);
document.write(` [${colors}]`);
document.write("<br><br>");

/* 10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort method. */ 

document.write(`/*---------------------------------------------*/<br><br>`);

var studentsMarks = [78,89,45,67];
document.write(`Scores OF Students: ${studentsMarks}<br><br>` );
studentsMarks.sort();
document.write(`Ordered Scores OF Students: ${studentsMarks}<br><br>` );

/* 11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */

var cityArray = new Array("KARACHI","ISLAMABAD","LAHORE","PESHAWAR","QUETA");

document.write("Cities List: <br>");
document.write(cityArray);

var selectedCitites = cityArray.slice(1,4);

document.write("<br><br>Selected Citites List: <br>");
document.write(selectedCitites);

/* 12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */

document.write("<br><br>");

var arr = ["This","Is","My","Cat"];
document.write(`ARRAY : ${arr}<br><br>`);

var arrToString = arr.join();
document.write(`STRINGS : ${arrToString}<br><br>`);

/* 13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out) */

var spareParts = ["KEYBOARD","MOUSE","MONITOR","JOYSTICK","CPU","POWER CABLES"];

document.write(`<h4>DEVICES : ${spareParts}</h4>`);

document.write(`<h6>FIFO : FIRST IN FIRST OUT</h6>`);
spareParts.forEach((item,index)=>{    
    document.write(`<p><b>OUT : </b></p>${item}<br>`);
});

document.write(`<h4>DEVICES : ${spareParts}</h4>`);

document.write(`<h6>LIFO : LAST IN FIRST OUT</h6>`);
for (let i = spareParts.length - 1 ; i >= 0; i--) {
    document.write(`<p><b>OUT : </b></p> ${spareParts[i]}<br>`);
}

/* 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */

var phoneManufacturer = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"]

document.write(`
    <br><br>
    <select>
        <option>${phoneManufacturer[0]}</option>
        <option>${phoneManufacturer[1]}</option>
        <option>${phoneManufacturer[2]}</option>
        <option>${phoneManufacturer[3]}</option>
        <option>${phoneManufacturer[4]}</option>
        <option>${phoneManufacturer[5]}</option>
    </select>

`);