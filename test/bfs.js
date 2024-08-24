//RECURSIVE BFS

class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        let bfs = [];
        let vis = new Array(V).fill(false);
        let q = [];

        q.push(0);
        vis[0] = true;

        while (q.length > 0) {
            let node = q.shift();
            bfs.push(node);

            // Get all adjacent vertices of the dequeued vertex s
            // If an adjacent has not been visited, then mark it
            // visited and enqueue it
            for (let it of adj[node]) {
                if (!vis[it]) {
                    vis[it] = true;
                    q.push(it);
                }
            }
        }

        return bfs;
    }
}

// Example usage
let adj = [];
for (let i = 0; i < 5; i++) {
    adj.push([]);
}
adj[0].push(1);
adj[1].push(0);
adj[0].push(4);
adj[4].push(0);
adj[1].push(2);
adj[2].push(1);
adj[1].push(3);
adj[3].push(1);
console.log(adj);

let sl = new Solution();
let ans = sl.bfsOfGraph(5, adj);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
}
