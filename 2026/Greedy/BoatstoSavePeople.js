/**
 * You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
 */

function numRescueBoats(people, limit) {
    // Sort people by weight
    people.sort((a, b) => a - b);
    
    let boats = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        // Try to pair lightest person with heaviest person
        if (people[left] + people[right] <= limit) {
            // Both can fit in one boat
            left++;  // Move left pointer (lightest person boarded)
        }
        // Whether they fit together or not, the heaviest person boards
        right--;  // Move right pointer (heaviest person boarded)
        boats++;  // One boat used
    }
    
    return boats;
}