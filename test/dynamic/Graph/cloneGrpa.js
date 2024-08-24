function cloneGraph(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(node) {
        if (visited.has(node)) {
            return visited.get(node);
        }

        const cloneNode = new Node(node.value);
        visited.set(node, cloneNode);

        for (let neighbor of node.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }

        return cloneNode;
    }

    return dfs(node);
}
