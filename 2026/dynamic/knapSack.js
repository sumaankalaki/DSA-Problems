//

function knapSack(W, wt, val, n){
    function helper(index, remWeight){
        //baseCase
        if(index>=n||remWeight === 0){
            return 0;
        }
        //recursive case
        let exclude = helper(index+1, remWeight);
        let include = 0;

        if(wt[index]<=remWeight){
            include = val[index]+ helper(index+1, remWeight-wt[index]);
        }
        return Math.max(include, exclude);
    }
   return helper(0,W);

}

console.log(knapSack(8,[ 8,3,5],[2,3,8], 3));

/*
Explanation (simple)
Capacity = 8
Items:
weight 8 → value 2
weight 3 → value 3
weight 5 → value 8

Best combination:
3 + 5 = 8 weight
3 + 8 = 11 value ✅
*/