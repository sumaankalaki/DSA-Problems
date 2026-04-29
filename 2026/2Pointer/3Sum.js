/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
*
Solution Strategy

1. Sort the array - This helps avoid duplicates and enables the two-pointer technique
2. Fix one element and use two pointers to find the other two elements
3. Skip duplicates to ensure unique triplets

Algorithm

Sort the array first
*   Iterate through the array with index i
*   For each i, use two pointers (left at i+1, right at end) to find pairs that sum to -nums[i]
*   Skip duplicate values to avoid duplicate triplets
*/
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // Early termination: if the smallest number is > 0, no triplet can sum to 0
        if (nums[i] > 0) break;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
};

/**
 * Complexity Analysis

Time Complexity: O(n²)

Sorting: O(n log n)
Main loop: O(n) × O(n) for two pointers = O(n²)
Overall: O(n²)


Space Complexity: O(1) or O(n)

O(1) if we don't count the output array
O(n) for the sorting algorithm (depending on implementation)
 */


//Most Efficient: 
///Here's a solution using a Set to avoid duplicates:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const set = new Set();
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                const triplet = [nums[i], nums[left], nums[right]];
                const key = triplet.join(',');
                
                if (!set.has(key)) {
                    set.add(key);
                    result.push(triplet);
                }
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
};

/*
Time: O(n²)
Space: O(n) for the set
Uses set to track already-found triplets via string key
*/
