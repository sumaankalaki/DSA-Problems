//https://leetcode.com/problems/largest-number/description/

/**
 * Largest Number Problem
 * 
 * Given a list of non-negative integers, arrange them such that they form 
 * the largest number. Return it as a string.
 * 
 * Example:
 *   Input: [3, 30, 34, 5, 9]
 *   Output: "9534330"
 */

// ============================================================================
// SOLUTION 1: Standard Comparator Function (Most Common)
// ============================================================================

/**
 * Solution using custom comparator
 * 
 * Time Complexity: O(n * k * log n) where k is average digits
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Array of non-negative integers
 * @return {string} - Largest number as string
 */
function largestNumber(nums) {
    // Step 1: Convert all numbers to strings
    const numsStr = nums.map(num => String(num));
    
    // Step 2: Custom sort - compare concatenations
    // If a+b > b+a, then 'a' should come before 'b' (descending)
    numsStr.sort((a, b) => {
        const concat1 = a + b;  // a followed by b
        const concat2 = b + a;  // b followed by a
        
        // Compare as strings (lexicographically)
        if (concat1 > concat2) return -1;  // a comes first
        if (concat1 < concat2) return 1;   // b comes first
        return 0;                          // equal
    });
    
    // Step 3: Join all strings
    const result = numsStr.join('');
    
    // Step 4: Handle edge case - if leading digit is '0', all were zeros
    return result[0] === '0' ? '0' : result;
}


// ============================================================================
// SOLUTION 2: Concise Version Using Ternary Operator
// ============================================================================

function largestNumber_concise(nums) {
    const result = nums
        .map(String)
        .sort((a, b) => (b + a) > (a + b) ? 1 : -1)
        .join('');
    
    return result[0] === '0' ? '0' : result;
}


// ============================================================================
// SOLUTION 3: Using Localecompare for Better Readability
// ============================================================================

function largestNumber_localeCompare(nums) {
    const numsStr = nums.map(String);
    
    numsStr.sort((a, b) => {
        // localeCompare returns negative if a < b, 0 if equal, positive if a > b
        // We want descending order, so we negate the result
        return -(a + b).localeCompare(b + a);
    });
    
    const result = numsStr.join('');
    return result[0] === '0' ? '0' : result;
}


// ============================================================================
// DEMONSTRATION & TRACE
// ============================================================================

/**
 * Detailed trace of the algorithm
 * Shows step-by-step how the comparisons work
 */
function demonstrateAlgorithm() {
    console.log('='.repeat(80));
    console.log('DEMONSTRATION: Arranging [3, 30, 34, 5, 9]');
    console.log('='.repeat(80));
    
    const nums = [3, 30, 34, 5, 9];
    const numsStr = nums.map(String);
    
    console.log('\nStep 1: Convert to Strings');
    console.log('   Input:  ', nums);
    console.log('   Strings:', numsStr);
    
    console.log('\nStep 2: Compare Pairs (sample comparisons)');
    console.log('-'.repeat(80));
    
    const comparisons = [
        ['3', '30'],
        ['3', '34'],
        ['5', '9'],
        ['34', '5'],
        ['30', '34']
    ];
    
    for (const [a, b] of comparisons) {
        const concat1 = a + b;
        const concat2 = b + a;
        const winner = concat1 > concat2 ? a : b;
        console.log(`  ${a} vs ${b}:  "${concat1}" vs "${concat2}"  →  "${winner}" comes first`);
    }
    
    console.log('\nStep 3: Sort Based on Comparisons');
    const sorted = numsStr.sort((a, b) => {
        return (b + a) > (a + b) ? 1 : -1;
    });
    console.log('   Sorted order:', sorted);
    
    console.log('\nStep 4: Join and Return');
    const result = sorted.join('');
    console.log('   Result:', result);
    console.log('   ✓ Expected: 9534330');
}


// ============================================================================
// TEST SUITE
// ============================================================================

/**
 * Comprehensive test cases
 */
function runTests() {
    const testCases = [
        {
            name: 'Simple case',
            input: [10, 2],
            expected: '210'
        },
        {
            name: 'Complex case - ordering matters',
            input: [3, 30, 34, 5, 9],
            expected: '9534330'
        },
        {
            name: 'Single zero',
            input: [0],
            expected: '0'
        },
        {
            name: 'Multiple zeros',
            input: [0, 0],
            expected: '0'
        },
        {
            name: 'Tricky - 121 vs 12',
            input: [121, 12],
            expected: '12121'
        },
        {
            name: 'Single number',
            input: [42],
            expected: '42'
        },
        {
            name: 'Repeated digits',
            input: [1, 11, 111],
            expected: '111111'
        },
        {
            name: 'Large numbers',
            input: [54, 546, 548, 60],
            expected: '60548546548'
        }
    ];
    
    console.log('\n' + '='.repeat(80));
    console.log('RUNNING TEST SUITE');
    console.log('='.repeat(80));
    
    const solutions = [
        { name: 'Solution 1: Standard Comparator', func: largestNumber },
        { name: 'Solution 2: Concise', func: largestNumber_concise },
        { name: 'Solution 3: LocaleCompare', func: largestNumber_localeCompare }
    ];
    
    for (const { name, func } of solutions) {
        console.log(`\n${name}`);
        console.log('-'.repeat(80));
        
        let passCount = 0;
        for (const { name: testName, input, expected } of testCases) {
            const result = func(input);
            const passed = result === expected;
            passCount += passed ? 1 : 0;
            
            console.log(`${passed ? '✓' : '✗'} ${testName}`);
            if (!passed) {
                console.log(`    Input:    [${input}]`);
                console.log(`    Expected: "${expected}"`);
                console.log(`    Got:      "${result}"`);
            }
        }
        console.log(`\nPassed: ${passCount}/${testCases.length}`);
    }
}


// ============================================================================
// VISUAL EXPLANATION
// ============================================================================

function explainComparison() {
    console.log('\n' + '='.repeat(80));
    console.log('WHY CUSTOM COMPARATOR IS NEEDED');
    console.log('='.repeat(80));
    
    console.log('\nNaive Approach: Sort Numbers in Descending Order');
    console.log('-'.repeat(80));
    const nums = [3, 30, 34, 5, 9];
    const naiveSort = [...nums].sort((a, b) => b - a);
    console.log('Input:           ', nums);
    console.log('Naive Sort:      ', naiveSort);
    console.log('Naive Result:    ', naiveSort.join(''));
    console.log('Expected Result: ', '9534330');
    console.log('❌ WRONG! The naive approach fails.');
    
    console.log('\nCorrect Approach: Compare Concatenations');
    console.log('-'.repeat(80));
    console.log('For any two numbers a and b:');
    console.log('  - Compare: (a+b) vs (b+a)');
    console.log('  - If (a+b) > (b+a), then a should come before b');
    console.log('');
    console.log('Example with 3 and 34:');
    console.log('  - a+b = "3" + "34" = "334"');
    console.log('  - b+a = "34" + "3" = "343"');
    console.log('  - "334" < "343", so 34 should come before 3');
    console.log('');
    console.log('✓ CORRECT!');
}


// ============================================================================
// COMPLEXITY ANALYSIS
// ============================================================================

function explainComplexity() {
    console.log('\n' + '='.repeat(80));
    console.log('COMPLEXITY ANALYSIS');
    console.log('='.repeat(80));
    
    console.log('\nTime Complexity: O(n * k * log n)');
    console.log('-'.repeat(80));
    console.log('  Where:');
    console.log('    n = number of elements');
    console.log('    k = average number of digits per number');
    console.log('');
    console.log('  Breakdown:');
    console.log('    - map(String):     O(n * k)');
    console.log('    - sort():          O(n * log n) comparisons');
    console.log('    - per comparison:  O(k) for string concatenation');
    console.log('    - join():          O(n * k)');
    console.log('');
    console.log('  Total: O(n * k) + O(n * log n * k) + O(n * k) = O(n * k * log n)');
    
    console.log('\nSpace Complexity: O(n)');
    console.log('-'.repeat(80));
    console.log('  - String array:      O(n)');
    console.log('  - Sort overhead:     O(log n) for recursion stack');
    console.log('  - Result string:     O(n * k)');
    console.log('  - Total:             O(n * k)');
}


// ============================================================================
// EDGE CASES EXPLANATION
// ============================================================================

function explainEdgeCases() {
    console.log('\n' + '='.repeat(80));
    console.log('EDGE CASES');
    console.log('='.repeat(80));
    
    console.log('\n1. All Zeros');
    console.log('-'.repeat(80));
    console.log('   Input:    [0, 0, 0]');
    console.log('   Result:   "000" (before handling)');
    console.log('   Expected: "0"');
    console.log('   Fix:      Check if result[0] === "0"');
    console.log('   Why:      Leading zeros are not valid representations');
    
    console.log('\n2. Single Element');
    console.log('-'.repeat(80));
    console.log('   Input:    [42]');
    console.log('   Result:   "42"');
    console.log('   Expected: "42"');
    console.log('   Status:   ✓ Handled automatically');
    
    console.log('\n3. Different Length Numbers');
    console.log('-'.repeat(80));
    console.log('   Input:    [3, 30, 34]');
    console.log('   Our method handles this by comparing strings,');
    console.log('   which works correctly regardless of length.');
}


// ============================================================================
// RUN ALL DEMONSTRATIONS
// ============================================================================

function main() {
    demonstrateAlgorithm();
    explainComparison();
    explainComplexity();
    explainEdgeCases();
    runTests();
    
    console.log('\n' + '='.repeat(80));
    console.log('✓ All demonstrations complete!');
    console.log('='.repeat(80));
}

// Run if executed directly
if (require.main === module) {
    main();
}

// Export for use as module
module.exports = {
    largestNumber,
    largestNumber_concise,
    largestNumber_localeCompare,
    runTests,
    demonstrateAlgorithm
};