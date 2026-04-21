//Memoization  / Top-Down Approach
// tc = O(n), sc = O(n)
function fibonacci(num) {
    let memo = {
        0: 0,
        1: 1
    };
    function calFib(n) {
        if (memo[n] !== undefined) {
            return memo[n];
        }
        memo[n] = calFib(n - 1) + calFib(n - 2);
        return memo[n];
    }
    return calFib(num);
}

console.log(fibonacci(6)); // Output: 5
//index/ 0, 1, 2, 3, 4, 5, 6, 7,  8,  9
//value/ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
