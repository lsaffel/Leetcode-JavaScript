/***
 * Valid Anagram. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // create an array of 26, indexed 0 to 25. This array represents all letters in the alphabet from a to z
    // initialize the array to all zeros
    let sChars = new Array(26); for (let i = 0; i < 26; ++i) sChars[i] = 0;

    sLen = s.length;
    tLen = t.length;
    let value;
    let aChar = "a";
    let valueA = aChar.charCodeAt(0);

    if (sLen != tLen) {
        return false;
    }

    // for each character in the string s, increment that character's value in the array
    // for each character in the string t, decrement that character's value in the array

    for (let i = 0; i < sLen; i++) {
        // find the value of that character, compared to a
        // for the first string, increment the value of that character in the array
        // for the second string, t, decrement the value of that character in the array

        value = s.charCodeAt(i) - valueA;
        sChars[value]++;
        value = t.charCodeAt(i) - valueA;
        sChars[value]--;
    }

    // go through the array. If any of the elements are not zero, then the strings are not a valid anagram
    for (let j = 0; j < 26; j++) {
        if (sChars[j] != 0) {
            return false;
        }
    }

    // if we fell out of the above loop, then the strings are anagrams of each other, so return true
    return true;
};