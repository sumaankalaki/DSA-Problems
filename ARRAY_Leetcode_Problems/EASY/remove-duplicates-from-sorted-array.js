// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/*
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/*
1.Using Hash Set – Works for Unsorted Also – O(n) Time and O(n) Space
2.Efficient Approach (O(n) time and O(1) Space)
 */

var removeDuplicates = function(nums) {
    let idx =1;
    for(let i =1;i <nums.length;i++){
        if(nums[i] != nums[i-1]){
            nums[idx++]=nums[i];
        }
    }
    return idx;
};