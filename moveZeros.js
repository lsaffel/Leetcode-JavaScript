/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Leetcode problems - easy
https://leetcode.com/problems/move-zeroes/
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

var moveZeroes = function (nums) {
    let a = 0;
    let b = 0;     // point a and b at first element

    // let numZeros = 0;

    let numsLen = nums.length;
    let lastElement = numsLen - 1;


    // count the zeros < don't need to do this now ??

    while (b <= lastElement) {
        while (b < lastElement && nums[b] == 0) {
            b++;
        }
        // put b where a is
        nums[a] = nums[b];
        a++;
        b++;
    }

    // done the loop, so set all from a onward to 0

    for (let i = a; i <= lastElement; i++) {
        nums[i] = 0;
    }

};