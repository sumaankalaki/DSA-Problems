
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
*/



function solve(arr) {
    let n = arr.length;
    let prev = arr[0];
    let prev2 = 0;

    for (let i = 1; i < n; i++) {
        let pick = arr[i];
        if (i > 1) {
            pick += prev2;
        }
        let nonPick = 0 + prev;

        let cur_i = Math.max(pick, nonPick);
        prev2 = prev;
        prev = cur_i;
    }
    return prev;
}

function robStreet(n, arr) {
    let arr1 = [];
    let arr2 = [];

    if (n === 1) {
        return arr[0];
    }

    for (let i = 0; i < n; i++) {
        if (i !== 0) arr1.push(arr[i]);
        if (i !== n - 1) arr2.push(arr[i]);
    }

    let ans1 = solve(arr1);
    let ans2 = solve(arr2);

    return Math.max(ans1, ans2);
}

// Test the function
let arr = [1, 5, 1, 2, 6];
let n = arr.length;
console.log(robStreet(n, arr));
