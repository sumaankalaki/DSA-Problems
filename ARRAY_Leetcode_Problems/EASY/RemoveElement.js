// https://leetcode.com/problems/remove-element/
/*
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */


var removeElement = function(nums, val) {
    let counter= 0;
    nums.forEach((ele, indx)=>{
        if(ele != val){
            nums[counter]= ele;
            counter++;
        }
    })
    return counter;
};