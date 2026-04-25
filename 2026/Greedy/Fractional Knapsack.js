/*
Greedy: Always pick the item with the highest profit per kg first. If it doesn't fully fit, take a fraction of it.
Value per kg (ratio) = profit / weight

Example:
[70, 10] → 70/10 = 7.0 per kg
[90, 20] → 90/20 = 4.5 per kg  
[150,30] → 150/30= 5.0 per kg

Sorted by ratio (desc): 7.0 → 5.0 → 4.5

🔍 Step-by-Step Dry Run
Example 1: arr = [[70,10],[90,20],[150,30]], W = 25
Step 1: Calculate ratios & sort descending
┌─────────┬────────┬────────┬───────┐
│  Item   │ Profit │ Weight │ Ratio │
├─────────┼────────┼────────┼───────┤
│ [70,10] │   70   │   10   │  7.0  │ ← highest
│ [150,30]│  150   │   30   │  5.0  │
│ [90,20] │   90   │   20   │  4.5  │
└─────────┴────────┴────────┴───────┘

Step 2: Greedy fill (W = 25)

Item [70,10]: weight=10 <= remaining=25
  → Take FULL item
  → profit += 70
  → remaining = 25 - 10 = 15

Item [150,30]: weight=30 > remaining=15
  → Take FRACTION = 15/30 = 0.5
  → profit += 150 * 0.5 = 75
  → remaining = 0  ← knapsack full!

Total profit = 70 + 75 = 145 ✅

Example 2: arr = [[70,10],[90,20],[150,30]], W = 45
Same sorted order: [70,10] → [150,30] → [90,20]

Item [70,10]: weight=10 <= remaining=45
  → Take FULL item
  → profit += 70
  → remaining = 35

Item [150,30]: weight=30 <= remaining=35
  → Take FULL item
  → profit += 150
  → remaining = 5

Item [90,20]: weight=20 > remaining=5
  → Take FRACTION = 5/20 = 0.25
  → profit += 90 * 0.25 = 22.5
  → remaining = 0

Total profit = 70 + 150 + 22.5 = 242.5 ✅
*/

function fractionalKnapsack(arr, W) {
    // Step 1: Calculate ratio and sort by profit/weight descending
    arr.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1]));

    let totalProfit = 0;
    let remaining = W;

    // Step 2: Greedy — pick items one by one
    for (let [profit, weight] of arr) {

        // Knapsack is full
        if (remaining === 0) break;

        if (weight <= remaining) {
            // Take the FULL item
            totalProfit += profit;
            remaining -= weight;
        } else {
            // Take FRACTION of item
            let fraction = remaining / weight;
            totalProfit += profit * fraction;
            remaining = 0; // knapsack full after this
        }
    }

    return totalProfit;
}

// ─── Test Cases ───────────────────────────────────────
console.log(fractionalKnapsack([[70,10],[90,20],[150,30]], 25)); // 145
console.log(fractionalKnapsack([[70,10],[90,20],[150,30]], 45)); // 242.5
