/*
Approach 1:

An undirected graph is a tree if it has the following properties. 

There is no cycle. 
The graph is connected.

*/


// A JavaScript Program to check whether 
// a graph is a tree or not

// This class represents an undirected graph 
// using adjacency list representation
var V = 0; // No. of vertices
var adj = []; // Adjacency List

// Function to initialize the graph with `v` vertices
function initialize(v) {
    V = v;
    adj = Array.from({ length: v }, () => []);
}

// Function to add an edge into the graph
function addEdge(v, w) {
    adj[v].push(w);
    adj[w].push(v);
}

// A recursive function that uses visited[] 
// and parent to detect cycle in subgraph 
// reachable from vertex v.
function isCyclicUtil(v, visited, parent) {
    // Mark the current node as visited
    visited[v] = true;

    // Recur for all the vertices adjacent to this vertex
    for (let i of adj[v]) {
        // If an adjacent is not visited, then recur for that adjacent
        if (!visited[i]) {
            if (isCyclicUtil(i, visited, v)) {
                return true;
            }
        }
        // If an adjacent is visited and not parent of current vertex,
        // then there is a cycle.
        else if (i !== parent) {
            return true;
        }
    }
    return false;
}

// Returns true if the graph is a tree, else false.
function isTree() {
    // Mark all the vertices as not visited
    var visited = Array(V).fill(false);

    // The call to isCyclicUtil serves multiple purposes. It returns true if 
    // the graph reachable from vertex 0 is cyclic. It also marks all vertices reachable from 0.
    if (isCyclicUtil(0, visited, -1)) {
        return false;
    }

    // If we find a vertex which is not reachable from 0 (not marked by isCyclicUtil), 
    // then we return false
    for (var u = 0; u < V; u++) {
        if (!visited[u]) {
            return false;
        }
    }

    return true;
}

// Driver Code
// Create a graph and check if it is a tree
initialize(5);
addEdge(1, 0);
addEdge(0, 2);
addEdge(0, 3);
addEdge(3, 4);
if (isTree()) {
    document.write("Graph is Tree<br>");
} else {
    document.write("Graph is not Tree<br>");
}

initialize(5);
addEdge(1, 0);
addEdge(0, 2);
addEdge(2, 1);
addEdge(0, 3);
addEdge(3, 4);
if (isTree()) {
    document.write("Graph is Tree<br>");
} else {
    document.write("Graph is not Tree<br>");
}

