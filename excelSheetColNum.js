/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    // the value of A is 1. The value of Z is 26.
    let totalNum = 0;
    let lastColumn = (length of columnTitle) - 1
    for i = 1 to last column - 1
    find value of column i      // = string[i-1]
    multiply that by 26
    totalNum = totalNum + that value

    find the value of the last column letter
    totalNum = totalNum + that value
    return totalNum;

};

// code so far - not complete