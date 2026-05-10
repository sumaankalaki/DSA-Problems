// 1. Recursive
var postorderTraversal = function(root) {
    const result = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        result.push(node.val);  // visit LAST
    }
    dfs(root);
    return result;
};

// 2. Iterative
var postorderTraversal = function(root) {
    if (!root) return [];
    const result = [], stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.left) stack.push(node.left);    // left first
        if (node.right) stack.push(node.right);  // right second (popped first)
    }

    return result.reverse();  // reverse at the end
};

// 3. Morris
var postorderTraversal = function(root) {
    const result = [];
    let curr = root;

    while (curr) {
        if (!curr.right) {
            result.push(curr.val);
            curr = curr.left;
        } else {
            let prev = curr.right;
            while (prev.left && prev.left !== curr) {
                prev = prev.left;
            }
            if (!prev.left) {
                result.push(curr.val);
                prev.left = curr;
                curr = curr.right;
            } else {
                prev.left = null;
                curr = curr.left;
            }
        }
    }

    return result.reverse();
};