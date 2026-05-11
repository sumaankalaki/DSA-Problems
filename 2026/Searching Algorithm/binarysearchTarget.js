const binarySearchTarget = function(nums, target){
    let left = 0;
    let right = nums.length-1;
    let middle;
    while(left <= right){
        middle = Math.floor((left+right)/2);
        if(target===nums[middle]) return middle;
        if(target<nums[middle]){
            right = middle-1;
        } else{
            left = middle+1;
        }
    }

    return -1;
}

//Recursion

const binarySearchRecursive = function(nums, target){

    function helper(nums,target, left, right){
        if(left>right) return -1;
       const  mid = Math.floor((left+right)/2);
        if(target===nums[mid]){
             return mid;
        } else if(target < nums[mid]){
           helper(nums,target, left, mid-1);
        } else{
            helper(nums,target, mid+1, right);
        }
    }

    return helper(nums,target, 0, nums.length-1);
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 4));