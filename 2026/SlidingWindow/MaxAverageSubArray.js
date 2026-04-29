//https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // Calculate the sum of the first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    // Slide the window through the array
    for (let i = k; i < nums.length; i++) {
        // Remove the leftmost element of previous window
        // Add the new element to the window
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum / k;
};

/**
 * Example: nums = [1,12,-5,-6,50,3], k = 4

Initial window [1, 12, -5, -6]: sum = 2
Slide right [12, -5, -6, 50]:

Remove 1, add 50
sum = 2 - 1 + 50 = 51 ✓ (max so far)


Slide right [-5, -6, 50, 3]:

Remove 12, add 3
sum = 51 - 12 + 3 = 42



Maximum sum = 51, Average = 51/4 = 12.75

*/
//Alternative: More Concise Version
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = sum;
    
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum / k;
};

//Another Approach: Single Loop
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let maxSum = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        // When window reaches size k
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, sum);
            // Remove the leftmost element for next iteration
            sum -= nums[i - k + 1];
        }
    }
    
    return maxSum / k;
};

/*
Complexity Analysis

Time Complexity: O(n)

We traverse the array once
Each operation (add/subtract) is O(1)


Space Complexity: O(1)

Only using a few variables for tracking sums



Key Points

Sliding Window Technique: Instead of recalculating the sum for each subarray from scratch (O(n×k)), we slide the window and adjust the sum by removing the leftmost element and adding the new rightmost element (O(n))
Optimization: We keep track of the maximum sum instead of maximum average to avoid repeated division operations
Edge Cases: Works correctly when k = 1 or k = nums.length

 */