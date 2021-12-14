/***
 * Given a non-empty array of integers nums, every element appears 
 * twice except for one. Find that single one. You must implement 
 * a solution with a linear runtime complexity and use only 
 * constant extra space.
 * 1 1 2 2 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort();        // sort the array
    let i = 0;
    let numsLen = nums.length;
    while (i < numsLen - 2) {      // while i is before the 2nd last element
        if (nums[i] != nums[i + 1]) {   // Check if the pair matches or not.
            return nums[i];         // If pair doesn't match, return the 
            // first number in the pair
        }
        i += 2;         // point to next pair
    }
    return nums[i];     // Pointing at last element, and it's the odd one,  so return it
};