/* Leetcode easy problem: https://leetcode.com/problems/reverse-string/
    Write a function that reverses a string. The input string is given
     as an array of characters s.
*/

var reverseString = function (s) {
    let sLen = s.length;
    let first = 0;
    let second = sLen - 1;
    let tempChar;

    // while not at middle char of string OR second-first > 1
    while ((second - first) >= 1) {
        // if first == second, don't swap, else swap the characters
        if (first == second) {
            return;
        } else {
            // swap first and second characters
            tempChar = s[first];
            s[first] = s[second];
            s[second] = tempChar;
        }
        first++;
        second--;

    }

};