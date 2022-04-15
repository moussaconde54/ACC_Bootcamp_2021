// Write a JavaScript function that reverses a number.
// For example, x = 32243;
// Expected Output : 34223
let n = 32243
function reverse_a_number(n){
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));



// Write a JavaScript function that reverses a number. 
// For example, x = 322.43;
// Expected Output : 342.23


// Write a JavaScript function which accepts an argument and returns the type.


// Write a JavaScript program to construct the following pattern, using a nested for loop
// *  
// * *  
// * * *  
// * * * *  
// * * * * *

function CreateAsterisk(n){
    var asterisk = "";
    for (let i = 1; i < n+1; i++){
        asterisk = asterisk + " *"
        console.log(asterisk)
    }
}

let i = 32243
function reverseNumber(i){
    i = String(i); // Convert number into string 
    // return i.split().reverse().join();
}
console.log(reverseNumber(i))

let x = 32243
function reverseNumber(x){
    return x.toString() // i used the toString() to convert x number to a string
    .split('') // used the String split() method to split a string into an array of substrings
    .reverse() // used the Array reverse() method to reverse the order of the elements in an array
    .join(''); // used the Array join() method to convert the elements of an array into a string
}
console.log(reverseNumber(x));