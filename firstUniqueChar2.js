/***
 * this does not quite work. It works for some cases, but not others.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 1) {
        // return that character's index
        return 0;
    }


    /* 
    
    for each character in the string
        take first character
    compare it to the rest of the characters
    if it doesn't match the rest of the characters
        return that character
    */

    let first = 0;
    let second = 1;

    // (s[first] == s[second])

    /* while second is within the array && first and second are different
        increment second
    
    if second is now past the end of the array, return first
    else increment first and set second to first + 1
    */

    let lastChar = s.length - 1;

    while (first < lastChar) {
        while (second <= lastChar && s[first] != s[second]) {
            second++;
        }
        if (second > lastChar) {
            return first;
        } else {
            first++;
            second = first + 1;
        }
    }

    // fell out of the loops, so return -1;
    return -1;

};