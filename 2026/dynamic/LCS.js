// longest common subsequence
/*
text1 = "abcde"
text2 = "ace"

👉 LCS = "ace"
👉 Length = 3
*/


//RECURSION SOLUTION

let longestCommonSubsequence = function (text1, text2){

    let n = text1.length;
    let m = text2.length;

    function helper(index1, index2){
    // base case
        if(index1>=n || index2>=m){
            return 0;
        }

        if(index1===index2){
            return 1+ helper(index1+1, index2+1);
        }
        return Math.max(
            helper(index1+1, index2),
            helper(index1, index2+1)
        );


    }
     return helper(0,0);
}
// Run one by one to understand
console.log("longestCommonSubsequence",longestCommonSubsequence("abcdef","acef")); //4
// console.log(longestCommonSubsequence("abcde","ace"));  // 3


//MEMOZAZATION
let longestCommonSubsequenceMemo = function (text1, text2){
    let n = text1.length;
    let m = text2.length;

    const dp = Array.from({ length: n }, () => Array(m).fill(-1));

    function helper(index1, index2){
        // base case
        if(index1 >= n || index2 >= m){
            return 0;
        }
        if(dp[index1][index2] !== -1){
            return dp[index1][index2];
        }
        // ✅ FIX: compare characters, not indices
        if(text1[index1] === text2[index2]){
            dp[index1][index2] = 1 + helper(index1 + 1, index2 + 1);
        } else {
            dp[index1][index2] = Math.max(
                helper(index1 + 1, index2),
                helper(index1, index2 + 1)
            );
        }
        return dp[index1][index2];
    }
    return helper(0, 0);
}
// test
console.log("longestCommonSubsequenceMemo",longestCommonSubsequenceMemo("abcde", "ace")); // 3



// Tabulation// bottom up

var longestCommonSubsequenceTabu =  function (text1, text2){

        const n = text1.length;
        const m = text2.length;
        const dp = Array.from({length:n+1}, ()=>Array(m+1).fill(0));

        for(let i=1; i<=n; i++){
            for(let j=1; j<=m; j++){
                if(text1[i-1]===text2[j-1]){
                    dp[i][j] =1+dp[i-1][j-1]
                }else{
                    dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
                }
            }
        }
        return dp[n][m];
}
console.log("longestCommonSubsequenceTabu",longestCommonSubsequenceTabu("abcde", "ace"));


// Space optimized

var longestCommonSubsequenceSpaceOptmized =  function (text1, text2){
        const n = text1.length;
        const m = text2.length;
        let prev = Array(m+1).fill(0);
        let curr = Array(n+1).fill(0);

        for(let i=1; i<=n; i++){
            for(let j=1; j<=m; j++){
                if(text1[i-1]===text2[j-1]){
                    curr[j]= 1+prev[j-1];
                }else{
                    curr[j] = Math.max(curr[j-1],prev[j]);
                }
            }
            prev= [...curr];
        }
        return curr[m];
}
console.log("longestCommonSubsequenceSpaceOptmized",longestCommonSubsequenceSpaceOptmized("abcde", "ace"));