// 1. Recursive
var preorderTraversal = function(root) {
    const result = [];
    function dfs(node) {
        if (!node) return;
        result.push(node.val);  // visit FIRST
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result;
};

// 2. Iterative
var preorderTraversal = function(root) {
    if (!root) return [];
    const result = [], stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);  // right first
        if (node.left) stack.push(node.left);     // left second (popped first)
    }

    return result;
};

// 3. Morris
var preorderTraversal = function(root) {
    const result = [];
    let curr = root;

    while (curr) {
        if (!curr.left) {
            result.push(curr.val);  // visit before moving right
            curr = curr.right;
        } else {
            let prev = curr.left;
            while (prev.right && prev.right !== curr) {
                prev = prev.right;
            }
            if (!prev.right) {
                result.push(curr.val);  // visit before threading left
                prev.right = curr;
                curr = curr.left;
            } else {
                prev.right = null;
                curr = curr.right;
            }
        }
    }

    return result;
};