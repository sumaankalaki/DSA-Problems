//Given 2 string word1 and word2 retur the maximun number of operation required to convert word1 and word2

//Recursion Approach
var distanceRecursive = function(word1,  word2){
    let n = word1.length;
    let m =  word2.length;

    var number_of_operation = function(index1, index2){
        //base case
        if(index1>n-1 && index2>m-1){
            return 0;
        }
        if(index1 >n-1){
            return m-index2
        }
        if(index2 >m-1){
            return n-index1;
        }

        //RECURSIVE
        if(word1[index1]===word2[index2]){
           return number_of_operation(index1 + 1, index2 + 1);
        }
        var insert = 1 + number_of_operation(index1, index2 + 1);
        var delet = 1 + number_of_operation(index1 + 1, index2);
        var replace = 1 + number_of_operation(index1 + 1, index2 + 1);
        return Math.min(insert, delet, replace);
    }
    return number_of_operation(0,0);
}

console.log(distanceRecursive("abcedef", "acef"));
console.log(distanceRecursive("abc", "adc"));


// Memoization Approach
var distanceMemoization = function(word1,  word2){
    let n = word1.length;
    let m =  word2.length;
    let memo = new Array(n).fill(-1).map(()=>new Array(m).fill(-1));

    var number_of_operation = function(index1, index2){
        //base case
        if(index1>n-1 && index2>m-1){
            return 0;
        }
        if(index1 >n-1){
            return m-index2
        }
        if(index2 >m-1){
            return n-index1;
        }

        if(memo[index1][index2]!==-1){
            return memo[index1][index2];
        }

        //RECURSIVE
        if(word1[index1]===word2[index2]){
           return number_of_operation(index1 + 1, index2 + 1);
        }
        var insert = 1 + number_of_operation(index1, index2 + 1);
        var delet = 1 + number_of_operation(index1 + 1, index2);
        var replace = 1 + number_of_operation(index1 + 1, index2 + 1);
        memo[index1][index2] = Math.min(insert, delet, replace);
        return memo[index1][index2];
    }
    return number_of_operation(0,0);
}

console.log(distanceMemoization("abcedef", "acef"));
console.log(distanceMemoization("abc", "adc"));