/***
 * Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i if non of the above conditions are true.

    My note - i is "i", not i.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    // create an empty array
    var stringArray = [];

    for (i = 1; i <= n; i++) {
        if (i % 15 == 0) {  //i is divisible by 15
            stringArray.push("FizzBuzz");    // add "FizzBuzz" to the array
        } else if (i % 3 == 0) {       // i is divisible by 3
            stringArray.push("Fizz");   // add "Fizz" to the array
        } else if (i % 5 == 0) {      // i is divisible by 5
            stringArray.push("Buzz");   // add "Buzz" to the array
        } else
            // convert i to a string and add that string to the array
            stringArray.push(i.toString());
    }
    return stringArray;

};


/**
 * @param {number} n
 * @return {string[]}
 */
/* same code, but with some console.log statements for debugging
var fizzBuzz = function (n) {
    var stringArray = [];
    var stringNum;

    // console.log("n is:", n);
    for (i = 1; i <= n; i++) {
        if (i % 15 == 0) {          // if n is divisible by 15
            // console.log("divisible by 15");
            stringArray.push("FizzBuzz");     //add FizzBuzz to the array
        } else if (i % 3 == 0) {         // if n is divisible by 3
            // console.log("divisible by 3");
            stringArray.push("Fizz");       // add "Fizz" to the array

        } else if (i % 5 == 0) {         // if n is divisible by 5
            // console.log("divisible by 5");
            stringArray.push("Buzz");       // add "Fizz" to the array

        } else {
            // console.log("i = ", i, "and i is not divisible by 3 or 5 or 15");
            // convert i to a string and push the string onto the array
            stringArray.push(i.toString());        // add i to the array
        }
    }

    // console.log(stringArray);
    return stringArray;     // is this the right way?
};
*/