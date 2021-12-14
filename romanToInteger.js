/**
 * Given a roman numeral, convert it to an integer.
 */


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let lastCharNum = s.length - 1;
    // console.log("lastCharNum = ", lastCharNum);
    let total = 0;

    for (let i = 0; i <= lastCharNum; i++) {
        switch (s[i]) {
            case "V":
                total += 5;
                break;
            case "L":
                total += 50;
                break;
            case "D":
                total += 500;
                break;
            case "M":
                total += 1000;
                break;
            // characters that may be a subtraction before next character ------------
            case "I":
                if (i == lastCharNum) {
                    total += 1;
                } else {
                    switch (s[i + 1]) {
                        case "V":
                            total += 4;
                            i++;
                            break;
                        case "X":
                            total += 9;
                            i++;
                            break;
                        default:
                            total += 1;
                            break;
                    }
                }
                break;
            // characters that may be a subtraction before next character ------------
            case "X":
                if (i == lastCharNum) {
                    total += 10;
                } else {
                    switch (s[i + 1]) {
                        case "L":
                            total += 40;
                            i++;
                            break;
                        case "C":
                            total += 90;
                            i++;
                            break;
                        default:
                            total += 10;
                            break;
                    }
                }
                break;

            // characters that may be a subtraction before next character ------------
            case "C":
                if (i == lastCharNum) {
                    total += 100;
                } else {
                    switch (s[i + 1]) {
                        case "D":
                            total += 400;
                            i++;
                            break;
                        case "M":
                            total += 900;
                            i++;
                            break;
                        default:
                            total += 100;
                            break;
                    }
                }
        }
    }
    return total;
};