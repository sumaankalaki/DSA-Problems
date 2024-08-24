/*

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


// when you want to send index
var twosum = function(nums, target){
    let Hashset = new Set();
    let len= nums.length;
    for(let i=0; i< len;i++){
        let cur = nums[i];
        let hashval = target- cur;
        if(Hashset.has(hashval))
        {
            return [ nums.indexOf(hashval), i];
        }else{
            Hashset.add(hashval);
        }
    }
    return [];  

}

//send value;
var twosum = function( nums, target){
    nums.sort((a,b)=>a-b); 
    let l= 0,r= nums.length-1;
    while(l<r){
        let currsum = nums[l]+nums[r];
        if(currsum === target){
            return[ nums[l], nums[r]];
        }
        else if(currsum<target){
            l++;
        } else{
            r++;
        }
    }
    return [];
}