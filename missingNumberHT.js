/*** 
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * This version uses a hash table. This is faster than sorting the array, but uses a second array of memory space
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // create a new blank array containing 0s

    // This creates a new second array of length 1 longer than the array nums
    let counters = new Array(nums.length + 1).fill(0);

    /* altnernate method, in case .fill doesn't work. .fill method (above) appears to be faster
        let counters = new Array(nums.length + 1);
        for (let i = 0; i < (nums.length + 1); ++i) counters[i] = 0;       // fills it with zeros
    */

    // go through the counters array one by one, adding one to each value in the nums array
    // This records that that number is present in the array
    for (let j = 0; j < nums.length; j++) {
        counters[nums[j]] += 1;
    }


    // go through second array one by one, using i
    // If any of the values is 0, then that number is missing, so return i

    for (let i = 0; i < counters.length; i++) {
        // if the value is 0, return i
        if (counters[i] == 0) {
            return i;
        }

    }

    // fell out of that loop, so it must be the last number that is missing
    return nums.length

};