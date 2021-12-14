/***
 * Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort();        // sorts the array
    let lastElement = nums.length - 1;      // length = 4, lastElement = 3, lastElement - 1 = 2
    for (let i = 0; i < lastElement; i++) {
        if (nums[i] == nums[i + 1]) {        // compare i to i+1
            return true;            // they are the same, so there is a duplicate
        }
    }
    return false;               // fell out of the loop, so there are no duplicates. Return false

};