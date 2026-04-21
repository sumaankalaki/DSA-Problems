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
console.log(longestCommonSubsequence("abcdef","acef")); //4
// console.log(longestCommonSubsequence("abcde","ace"));  // 3
