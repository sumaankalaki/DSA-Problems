function twoSum(nums, target) {
    const seen = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        seen.set(nums[i], i);
    }

    return [];
}


function testTwoSum(nums, target, expected) {
    const result = twoSum(nums, target);
    const isCorrect = JSON.stringify(result) === JSON.stringify(expected);

    console.log("Input:", nums, "Target:", target);
    console.log("Output:", result, "Expected:", expected);
    console.log(isCorrect ? "✅ PASS" : "❌ FAIL");
    console.log("----------------------------");
}

// Test cases
testTwoSum([2, 7, 11, 15], 9, [0, 1]);
testTwoSum([3, 2, 4], 6, [1, 2]);
testTwoSum([3, 3], 6, [0, 1]);
testTwoSum([1, 5, 3, 7], 8, [0, 3]);
testTwoSum([10, -2, 4, 6], 8, [1, 3]);
testTwoSum([1, 2, 3], 10, []); // no solution