var fib_bottomUp = function (num){
    let dp = new Array(num+1).fill(0);
    dp[0] = 0;
    if(num>0){
        dp[1] = 1;
    }
    for(let i= 2; i<=num ;i++){
        dp[i]= dp[i-1] + dp[i-2];
    }
    return dp[num];
}

console.log(fib_bottomUp(6));
// 0,1,1,2,3,5,8