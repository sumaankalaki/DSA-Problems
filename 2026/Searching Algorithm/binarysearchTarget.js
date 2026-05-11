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