/* Leetcode problem - easy
 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 You are given an array prices where prices[i] is the price of a given stock on the ith day.

 Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/
var maxProfit = function (prices) {
    let a = 0;
    let b;
    let maxProf = 0;
    let lastElement = prices.length - 1;

    if (prices.length == 1) {
        return maxProf;
    }

    while (a < lastElement) {

        // move a forward until a = lastElement (i.e. a is last in array) 
        //    OR a has hit a low point (@a+1 > @a)
        // <code to do that here>
        while (a < lastElement && (prices[a + 1] <= prices[a])) {
            a++;
        }
        // console.log("trough is:", prices[a]);

        if (a == lastElement) {
            // this is the last element in the array, so there aren't more profits to be found
            return maxProf;
        }

        b = a + 1;
        // move b forward until b == lastElement OR b+1 <= b
        // <code to do that here>
        // console.log("b = ", b);
        while (b < lastElement && prices[b + 1] > prices[b]) {
            b++;
        }
        // console.log("b = ", b);
        // console.log("peak or last element is: ", prices[b]);
        maxProf = maxProf + prices[b] - prices[a];
        a = b + 1;

    }

    return maxProf;


};