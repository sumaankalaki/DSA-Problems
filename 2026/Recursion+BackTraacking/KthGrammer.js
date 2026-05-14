//https://leetcode.com/problems/k-th-symbol-in-grammar/description/


var KthGrammer = function(n, k){
    if(n===1){
        return 0;
    }
    let len = Math.pow(2, n-1);
    let mid = len/2;  // 👈 add let
    if(k <= mid){
        return KthGrammer(n-1, k);
    } else {
        return 1 - KthGrammer(n-1, k-mid);  // 👈 k-mid not k-1
    }
}
console.log(KthGrammer(4, 8));
