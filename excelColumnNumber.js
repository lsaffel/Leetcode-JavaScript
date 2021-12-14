/**
 * Given a string columnTitle that represents the column title as appear in 
 * an Excel sheet, return its corresponding column number.
 */



/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let lenString = columnTitle.length;
    let value;
    let maxValue = 26;  // 26 characters?
    let number = 0;
    let aChar = "A";
    let valueA = aChar.charCodeAt(0);
    let columnMultiplier;

    // console.log("next one");

    for (let i = 0; i < lenString; i++) {
        //number = number + formula for that col position

        // find charVal at position i
        let char = columnTitle[i];      // this is a character, I think ?
        // find the value of that character, compared to UPPER CASE A
        value = columnTitle.charCodeAt(i) - valueA + 1;
        // console.log("i=", i, "value is: ", value);

        // number = number + ((maxValue to the power of (len - 1 - i) * charValue of that char))''
        columnMultiplier = Math.pow(maxValue, lenString - 1 - i);
        number = number + (columnMultiplier * value);
    }

    return number;

};

