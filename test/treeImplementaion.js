class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    // Pre-order traversal: Root, Children
    preOrder(node, callback) {
        if (node !== null) {
            callback(node.data);
            for (let child of node.children) {
                this.preOrder(child, callback);
            }
        }
    }

    // Post-order traversal: Children, Root
    postOrder(node, callback) {
        if (node !== null) {
            for (let child of node.children) {
                this.postOrder(child, callback);
            }
            callback(node.data);
        }
    }

    // Level-order traversal: Breadth-First
    levelOrder(callback) {
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node.data);
            for (let child of node.children) {
                queue.push(child);
            }
        }
    }

    // Get the root node
    getRootNode() {
        return this.root;
    }
}

// Example usage:
const tree = new Tree();
tree.root = new Node(1);

const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

tree.root.addChild(node2);
tree.root.addChild(node3);
tree.root.addChild(node4);

const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node2.addChild(node5);
node2.addChild(node6);

node4.addChild(node7);

const root = tree.getRootNode();

console.log("Pre-order traversal:");
tree.preOrder(root, console.log); // Output: 1 2 5 6 3 4 7

console.log("Post-order traversal:");
tree.postOrder(root, console.log); // Output: 5 6 2 3 7 4 1

console.log("Level-order traversal:");
tree.levelOrder(console.log); // Output: 1 2 3 4 5 6 7
