/*
xample 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

points = [[10,16],[2,8],[1,6],[7,12]]

X-axis visualization:
       1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16
       |──────────────|                              [1,6]
          |─────────────────|                        [2,8]
                               |──────────────|      [7,12]
                                        |────────────────|  [10,16]

       ↑              ↑
    shoot x=6      shoot x=11

x=6  bursts → [1,6] ✅  [2,8] ✅
x=11 bursts → [7,12] ✅  [10,16] ✅

Minimum = 2 arrows ✅


✅ Example 2: [[1,2],[3,4],[5,6],[7,8]] → Expected: 4
1──2   3──4   5──6   7──8
      ↑      ↑      ↑      ↑
   arrow  arrow  arrow  arrow

NO overlaps at all → every balloon needs its own arrow!
*/


function findMinArrowShots(points) {
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1;
    let arrowPos = points[0][1];

    for (let i = 1; i < points.length; i++) {
        let [start, end] = points[i];
        if (start > arrowPos) {
            arrows++;
            arrowPos = end;
        }
    }
    return arrows;
}

// ─── Test Cases ──────────────────────────────────────
const tests = [
    { points: [[10,16],[2,8],[1,6],[7,12]], expected: 2 },
    { points: [[1,2],[3,4],[5,6],[7,8]],   expected: 4 },
    { points: [[1,2],[2,3],[3,4],[4,5]],   expected: 2 },
    { points: [[1,2]],                      expected: 1 },
    { points: [[1,10],[2,5],[3,7],[6,9]],  expected: 1 },
];

tests.forEach(({ points, expected }, idx) => {
    const result = findMinArrowShots([...points.map(p => [...p])]);
    const pass = result === expected;
    console.log(
        `Test ${idx + 1}: ${JSON.stringify(points)}`,
        `→ ${result}`,
        pass ? "✅ PASS" : `❌ FAIL (expected ${expected})`
    );
});
