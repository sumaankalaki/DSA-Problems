/*
Question 1: Min cost Climbing Stairs:
You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.
Eg = [ 1,2,3]
output = 2
 */

//Recursive Approach
var mostCostClimbingStairs =  function (cost){
    let n = cost.length;
    function  helper(index){
        if(index>=n-1) return 0;
        let one = cost[index]+helper(index+1);
        let two = cost[index]+ helper(index+2);
        return Math.min(one,two);
    }
    return Math.min(helper(0), helper(1))

};

console.log(mostCostClimbingStairs([1,2,3,4]));


//Top-Down- Memoization
var mostCostClimbingStairsMemoization =  function (cost){
    let n = cost.length;
    let memo = Array(n).fill(-1);
    function  helper(index){
        if(index>=n) return 0;

        if(memo[index]!==-1) return  memo[index];
        let one = cost[index]+helper(index+1);
        let two = cost[index]+ helper(index+2);
        memo[index] = Math.min(one,two);
        return Math.min(one,two);
    }
    return Math.min(helper(0), helper(1))

};
mostCostClimbingStairsMemoization([1,2,3,2,1,2]);


//Tabulation- bottomup

var minCostClimbingStairs = function ( cost){
    let n = cost.length;
    let dp = Array(n+1).fill(0);

    dp[0]=0;
    dp[1]=0;
    for(let i=2; i<=n; i++){
        let costTocomeFromOneStepBack = cost[i-1] + dp[i-1];
        let costTocomeFromTwoStepBack = cost[i-2] + dp[i-2];
        dp[i] = Math.min(costTocomeFromOneStepBack, costTocomeFromTwoStepBack)
    }
    return dp[n];
}

