/*
Question 2: Tribonacci: The Tribonacci sequence Tn is defined as follows:
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.
 */

var fib_bottomUp_TRIBO = function (num){
    let dp = new Array(num+1).fill(0);
    dp[0] = 0;
    dp[1] = 0;
    if(num>0){
        dp[2] = 1;
    }
    for(let i= 3; i<=num ;i++){
        dp[i]= dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[num];
}

console.log(fib_bottomUp_TRIBO(6));
//  0, 0, 1, 1, 2, 4, 7, 13, 24, 44