// 1. Recursive
var inorderTraversal = function(root) {
    const result = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
};

// 2. Iterative (recommended)
var inorderTraversal = function(root) {
    const result = [], stack = [];
    let curr = root;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
};

// 3. Morris (O(1) space)
var inorderTraversal = function(root) {
    const result = [];
    let curr = root;

    while (curr) {
        if (!curr.left) {
            result.push(curr.val);
            curr = curr.right;
        } else {
            let prev = curr.left;
            while (prev.right && prev.right !== curr) {
                prev = prev.right;
            }
            if (!prev.right) {
                prev.right = curr;      // create thread
                curr = curr.left;
            } else {
                prev.right = null;      // remove thread
                result.push(curr.val);
                curr = curr.right;
            }
        }
    }

    return result;
};