/*
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
*/



class Solution {
    findCombinations(ind, arr, target, ans, ds) {
        if (ind === arr.length) {
            if (target === 0) {
                ans.push([...ds]);
            }
            return;
        }

        if (arr[ind] <= target) {
            ds.push(arr[ind]);
            this.findCombinations(ind, arr, target - arr[ind], ans, ds);
            ds.pop();
        }
        this.findCombinations(ind + 1, arr, target, ans, ds);
    }

    combinationSum(candidates, target) {
        const ans = [];
        this.findCombinations(0, candidates, target, ans, []);
        return ans;
    }
}

// Main function to test the solution
function main() {
    const arr = [2, 3, 6, 7];
    const target = 7;
    const sol = new Solution();
    const result = sol.combinationSum(arr, target);
    
    console.log("Combinations are:");
    result.forEach(combination => {
        console.log(combination.join(" "));
    });
}

main();
