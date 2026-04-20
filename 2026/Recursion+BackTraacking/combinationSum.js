// find target in given array
//[2,3,4,7] target = 7

var combinationSum = function(candidates, target){
let res  = [];

function helper(index, curr, currSum){
    if(currSum>target){
        return;
    }
    if(currSum===target){
        res.push([...curr]);
        return;
    }
    // recursive

    for(let j=index;j<candidates.length;j++){
        curr.push(candidates[j]);
        helper(j,curr,currSum+ candidates[j]);
        curr.pop();
    }
}
    helper(0,[],0);
    return res;
}

console.log(combinationSum([2,3,4,7], 7));