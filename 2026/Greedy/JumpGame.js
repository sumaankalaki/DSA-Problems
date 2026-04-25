/*
You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return `true` if you can reach the last index, or `false` otherwise. [ give all test with exaplins step by step code as well javasricpt

Greedy: Track the farthest position you can reach at any point. If current index ever exceeds that farthest reach → stuck → return false.

nums = [2, 3, 1, 1, 4]
idx  =  0  1  2  3  4

At index 0: can jump max 2 → reach index 0+2 = 2
At index 1: can jump max 3 → reach index 1+3 = 4 ← last index!
At index 2: can jump max 1 → reach index 2+1 = 3
...

maxReach keeps growing → can reach end ✅

nums = [3, 2, 1, 0, 4]
idx  =  0  1  2  3  4

At index 0: maxReach = 0+3 = 3
At index 1: maxReach = max(3, 1+2) = 3
At index 2: maxReach = max(3, 2+1) = 3
At index 3: maxReach = max(3, 3+0) = 3
At index 4: 4 > maxReach(3) → STUCK ❌
*/

function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) return true;
    }

    return true;
}

// ─── All Test Cases ───────────────────────────────────
const tests = [
    { nums: [2,3,1,1,4], expected: true  },
    { nums: [3,2,1,0,4], expected: false },
    { nums: [0],         expected: true  },
    { nums: [1,0],       expected: true  },
    { nums: [1,0,1],     expected: false },
    { nums: [5,0,0,0,0], expected: true  },
    { nums: [2,0,0],     expected: true  },
];

tests.forEach(({ nums, expected }, idx) => {
    const result = canJump(nums);
    const pass = result === expected;
    console.log(
        `Test ${idx + 1}: [${nums}]`,
        `→ ${result}`,
        pass ? "✅ PASS" : `❌ FAIL (expected ${expected})`
    );
});

/**
 * 
 ✅ Test 1: nums = [2,3,1,1,4] → Expected: true
 Initial: maxReach = 0
Last index = 4
┌───────┬───────┬──────────────────────────────┬──────────┐
│  i    │ nums  │ Calculation                  │ maxReach │
├───────┼───────┼──────────────────────────────┼──────────┤
│  0    │   2   │ max(0, 0+2) = 2              │    2     │
│  1    │   3   │ max(2, 1+3) = 4 >= 4 ✅ EXIT │    4     │
└───────┴───────┴──────────────────────────────┴──────────┘
return true ✅


❌ Test 2: nums = [3,2,1,0,4] → Expected: false
Initial: maxReach = 0
Last index = 4
┌───────┬───────┬──────────────────────────────┬──────────┐
│  i    │ nums  │ Calculation                  │ maxReach │
├───────┼───────┼──────────────────────────────┼──────────┤
│  0    │   3   │ max(0, 0+3) = 3              │    3     │
│  1    │   2   │ max(3, 1+2) = 3              │    3     │
│  2    │   1   │ max(3, 2+1) = 3              │    3     │
│  3    │   0   │ max(3, 3+0) = 3              │    3     │
│  4    │   4   │ i(4) > maxReach(3) → STUCK!  │    3     │
└───────┴───────┴──────────────────────────────┴──────────┘
return false ❌



✅ Test 3: nums = [0] → Expected: tru
Initial: maxReach = 0
Last index = 0
Only 1 element → already at last index!
┌───────┬───────┬──────────────────────────────┬──────────┐
│  i    │ nums  │ Calculation                  │ maxReach │
├───────┼───────┼──────────────────────────────┼──────────┤
│  0    │   0   │ max(0, 0+0) = 0 >= 0 ✅ EXIT │    0     │
└───────┴───────┴──────────────────────────────┴──────────┘
return true ✅


✅ Test 4: nums = [1,0] → Expected: true (jump from 0→1, done)
Initial: maxReach = 0
Last index = 1
┌───────┬───────┬──────────────────────────────┬──────────┐
│  i    │ nums  │ Calculation                  │ maxReach │
├───────┼───────┼──────────────────────────────┼──────────┤
│  0    │   1   │ max(0, 0+1) = 1 >= 1 ✅ EXIT │    1     │
└───────┴───────┴──────────────────────────────┴──────────┘
return true ✅
 */