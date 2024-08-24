class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(item) {
        const newNode = new Node(item);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal: Left, Root, Right
    inOrder(node, callback) {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.data);
            this.inOrder(node.right, callback);
        }
    }

    // Pre-order traversal: Root, Left, Right
    preOrder(node, callback) {
        if (node !== null) {
            callback(node.data);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    // Post-order traversal: Left, Right, Root
    postOrder(node, callback) {
        if (node !== null) {
            this.postOrder(node.left, callback);
            this.postOrder(node.right, callback);
            callback(node.data);
        }
    }

    getRootNode() {
        return this.root;
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);

const root = tree.getRootNode();

console.log("In-order traversal:");
tree.inOrder(root, console.log); // Output: 5 7 9 10 13 15 17 22 25 27

console.log("Pre-order traversal:");
tree.preOrder(root, console.log); // Output: 15 10 7 5 9 13 25 22 17 27

console.log("Post-order traversal:");
tree.postOrder(root, console.log); // Output: 5 9 7 13 10 17 22 27 25 15
