/**
 * intervals = [[1,2],[2,3],[3,4],[1,3]]

After sorting by end time:
[[1,2], [2,3], [1,3], [3,4]]
        ↑ end=2  ↑ end=3  ↑ end=3  ↑ end=4

Walk through:

        prevEnd = -infinity, keep = 0

Step 1: [1,2] → start(1) >= prevEnd(-inf) ✅ Keep it
        prevEnd = 2, keep = 1

Step 2: [2,3] → start(2) >= prevEnd(2)   ✅ Keep it (touching = OK)
        prevEnd = 3, keep = 2

Step 3: [1,3] → start(1) >= prevEnd(3)?  ❌ Overlaps! Remove it
        keep stays = 2

Step 4: [3,4] → start(3) >= prevEnd(3)   ✅ Keep it
        prevEnd = 4, keep = 3

Total = 4, Kept = 3
Removals = 4 - 3 = 1 ✅
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // Step 1: Sort by END time (greedy choice)
    intervals.sort((a, b) => a[1] - b[1]);
    
    let keep = 0;
    let prevEnd = -Infinity;
    
    for (let [start, end] of intervals) {
        if (start >= prevEnd) {
            // No overlap → keep this interval
            keep++;
            prevEnd = end;
        }
        // else: overlap → skip (remove) it
    }
    
    return intervals.length - keep;
};

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));       // 2
console.log(eraseOverlapIntervals([[1,2],[2,3]]));             // 0


/**
 * 
 * 💡 Pattern Recognition
This same "sort by end time, greedy keep" pattern solves many interval problems:

Activity Selection Problem (classic greedy)
LC 452 — Minimum arrows to burst balloons
LC 646 — Maximum length of pair chain
LC 1353 — Maximum number of events attended
 */