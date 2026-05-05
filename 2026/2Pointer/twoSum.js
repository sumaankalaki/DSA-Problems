// Given sorted Array , find indices of 2 numbers which will add up to target.
// [1,2,3,5,7,9,11,14] target= 11;

function twoSum(arr, target){
let left = 0;
let right = arr.length-1;
if (!arr || arr.length < 2) return [];

while(left<right){
    let currSum = arr[left]+arr[right];

    if(currSum===target){
        return [left + 1, right + 1]; // ✅ convert to 1-based index
    }
    else if(currSum>target){
        right--;
    } else {
        left++;
    }
}
return [];
}

twoSum([1,2,3,5,7,9,11,14], 11);