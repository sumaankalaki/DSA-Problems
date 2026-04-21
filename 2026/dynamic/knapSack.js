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



//MomoZization

function knapSackMemo(W, wt, val, n){
    //n rows and W+1 columns
    const dp = Array.from({length:n},()=>Array(W+1).fill(-1));
    function helper(index, remWeight){
        //baseCase
        if(index>=n||remWeight === 0){
            return 0;
        }
        if(dp[index][remWeight]!==-1){
            return dp[index][remWeight];
        }
        //recursive case
        let exclude = helper(index+1, remWeight);
        let include = 0;

        if(wt[index]<=remWeight){
            include = val[index]+ helper(index+1, remWeight-wt[index]);
        }
        dp[index][remWeight] = Math.max(exclude,include);
        return dp[index][remWeight];
    }
   return helper(0,W);

}

console.log(knapSackMemo(8,[ 8,3,5],[2,3,8], 3));


//bottom up - space optiomization
function knapSackbottom(W, wt, val, n){
    //n rows and W+1 columns
    const dp = Array.from({length:n+1},()=>Array(W+1).fill(0));
    for(let i=1;i<=n; i++){
        for(let j=1;j<=W;j++){
            const exclude = dp[i-1][j];
            let include = 0;

            if(wt[i-1]<=j){
               include = val[i - 1] + dp[i - 1][j - wt[i - 1]]; 
            }
            dp[i][j]=Math.max(exclude,include);
        }
    }
  return dp[n][W];

}

console.log(knapSackbottom(8,[ 8,3,5],[2,3,8], 3));
