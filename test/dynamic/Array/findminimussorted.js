/*Find Minimum in Rotated Sorted Array
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
*/
var findMin = function(nums) {
 let l=0; r=nums.length;
 let ans = Infinity;
  while( l<r)
  {
    if (nums[l] <= nums[r]) {
        ans = Math.min(ans, nums[l]);
        break;
    }

    let mid = math.floor((l+r)/2);
    if(nums[l]<nums[mid])
    {
        res= Math.min(res, nums[l]);
        low= mid+1;
    }else{
        res = Math.min(ans, nums[mid]);
        high = mid - 1;
    }
  }
  return ans;
}