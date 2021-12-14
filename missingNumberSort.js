/*** 
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * This solution sorts the array, so that's likely O(n log n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    // sort the array of numbers
    nums.sort(function (a, b) {
        return a - b
    })

    // go through the array one by one until missing element is found

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i;
        }
    }

    return nums.length;
};