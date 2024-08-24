class Solution {
    // DFS function
    static dfs(node, vis, adj, ls) {
        // Marking current node as visited
        vis[node] = true;
        ls.push(node);

        // Getting neighbor nodes
        for (let it of adj[node]) {
            if (!vis[it]) {
                Solution.dfs(it, vis, adj, ls);
            }
        }
    }

    // Function to return a list containing the DFS traversal of the graph
    dfsOfGraph(V, adj) {
        // Array to keep track of visited vertices
        let vis = new Array(V).fill(false);
        vis[0] = true;
        let ls = [];
        Solution.dfs(0, vis, adj, ls);
        return ls;
    }
}

// Main function to test the solution
function main() {
    let adj = Array.from({ length: 5 }, () => []);

    adj[0].push(2);
    adj[2].push(0);
    adj[0].push(1);
    adj[1].push(0);
    adj[0].push(3);
    adj[3].push(0);
    adj[2].push(4);
    adj[4].push(2);
    console.log(adj);

    let sl = new Solution();
    let ans = sl.dfsOfGraph(5, adj);
    console.log(ans.join(' '));
}

// Run the main function
main();
