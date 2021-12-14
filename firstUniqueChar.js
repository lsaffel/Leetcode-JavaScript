/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 1) {
        // return that character's index
        return 0;
    }


    // create a hash table of 0s with 26 elements for each letter of the alphabet
    let counters = new Array(26).fill(0);

    let charI;
    let charINum;
    let charAVal = parseInt("a");


    let aChar = "a";
    let valueA = aChar.charCodeAt(0);
    let valueCharI;
    let nonRepeatingCharIndex;
    let firstNonRepeatCharNum;
    let number;


    //for each char in the array left to right
    //    increment that character's value in the hash table

    for (let i = 0; i < s.length; i++) {

        // find the value of that character, compared to LOWER CASE a
        valueCharI = s.charCodeAt(i) - valueA;

        counters[valueCharI] += 1;
    }

    console.log("counters array is: ", counters);

    /* add this code in next 
       for each char in s left to right
    check that character's hash table element
    if it's non-repeating, then return that character
    */


    for (let j = 0; j < s.length; j++) {
        if (counters[j] == 1) {
            // j is the index of the character that is non-repeating, so find the first occurrence of that character

            // add the value of the character a to that index
            firstNonRepeatCharNum = valueA + j;

            // this code is missing / incomplete
            switch (firstNonRepeatCharNum) {
                case 0:
                    return
            }


            // go through the string and find the first occurrence of that character
            for (let n = 0; n < s.length; n++) {
                if 
            }
        }

    }

    // fell out of that loop, so none of the characters are repeating. Therefore, return -1
    return -1;
};




/* Another way:

create an array with all of the characters in order

for each character in the string
    take first character
compare it to the rest of the characters
if it doesn't match the rest of the characters
    return that character
*/