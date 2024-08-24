// topological soreting for cycle detection

function canFinish(numCourses, prerequisites) {
    // Create an adjacency list to represent the graph
    let adj = Array.from({ length: numCourses }, () => []);
    
    // Fill the adjacency list with prerequisites
    for (let [course, prereq] of prerequisites) {
        adj[prereq].push(course);
    }

    // Array to track the in-degree (number of prerequisites) for each course
    let indegree = new Array(numCourses).fill(0);
    
    // Calculate in-degree for each course
    for (let i = 0; i < numCourses; i++) {
        for (let neighbor of adj[i]) {
            indegree[neighbor]++;
        }
    }

    // Queue for courses with no prerequisites
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0; // Count of courses that can be taken

    // Process courses with no prerequisites
    while (queue.length > 0) {
        let course = queue.shift();
        count++;

        for (let neighbor of adj[course]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If all courses have been taken, return true; otherwise, return false
    return count === numCourses;
}

// Example usage:
console.log(canFinish(2, [[1, 0]])); // Output: true
console.log(canFinish(2, [[1, 0], [0, 1]])); // Output: false
