/*

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/
var Maximussubarry = function( nums){
    let sum =0;
    let maxi = Number.MIN_SAFE_INTEGER;

    for( let i=0;i< nums.length; i++)
    {
        sum += nums[i];
        maxi = Math.max(maxi, sum);
        if(sum<0)
        {
            sum=0;
        }
    }
    return maxi;

}



//
/*
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4 return index;
*/

var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};
