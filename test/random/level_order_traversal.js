class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert (array){
        if(array.length === 0) return;
        //if root is null
        let i=0;
        if(!this.root){
            if(array[0]===null)return;
            else{
                let node = new Node(array[0]);
                this.root= node;
                i++;
                if(i===array.length) return;
            }
        }

        //insert elements
        const queue = [this.root];
        while(queue.length){
            let current= queue.shift();
            if(!current.left){
                if(array[i]!=null){
                    let node = new Node(array[i]);
                    current.left=node;
                }
                i++;
                if(i === array.length) return this;
            }
            if(current.left) queue.push(current.left);
            if(!current.right){
                if(array[i]!=null){
                    let node = new Node(array[i]);
                    current.right=node;
                }
                i++;
                if(i === array.length) return this;
            }
            if(current.right) queue.push(current.right);
        }
    }

   
}

const levelOrderTraversal = function( root)
{
    if(!root) return [];
    const output = [];
    const queue = [root]; // linked list
     while(queue.length)
     {
        let len = queue.length;
        let count = 0;
        const currentLevelValue = [];
        while(count<len)
        {
            const curr= queue.shift();
            currentLevelValue.push(curr.value);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
            count++;
        }
        output.push(currentLevelValue);
     }

    return output;
}

const rightView = function( root)
{
    if(!root) return [];
    const right = [];
    const queue = [root]; // linked list
     while(queue.length)
     {
        let len = queue.length;
        let count = 0;
        while(count<len)
        {
            count++
            const curr= queue.shift();
            if(count === length) right.push(curr.value);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
            count++;
        }
     }

    return right;
}



const LeftView = function(root)
{
    if(!root) return [];
    const left = [];
    const queue = [root]; // linked list
     while(queue.length)
     {
        let len = queue.length;
        let count = 0;
        while(count<len)
        {
            count++
            const curr= queue.shift();
            if(count === 1) left.push(curr.value);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
            count++;
        }
     }

    return left;
}


const invertedBinaryTree_Iterative_Approach = function(root)
{
    if(root=== null) return;
    const queue=[root]; // for support

    while(queue.length){
        //dequeue
        const current=queue.shift();
        //swap left, right tree on level
        let temp = current.right;
        current.right=current.left;
        current.left= temp;
        // if left child enqueue
        if(current.left) queue.push(current.left);
        // if right child enqueue .
        if(current.right) queue.push(current.right);

    }

    return root;
}


const InvertedBinaryTree_Recursive_Approch = function(root){
    if(root === null) return;
    const temp = root.right;
    root.left = root.right;
    root.right= temp;
    InvertedBinaryTree_Recursive_Approch(root.left);
    InvertedBinaryTree_Recursive_Approch(root.right);

    return root;
}   

const DiameterBinaryTree = function(root){
     if(!root) return 0;
     let maxDiameter = 0;

     const dfs = function(node){
        if(!node) return -1;
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);
        let diameter = leftHeight+rightHeight+1+1;
        maxDiameter = Math.max(diameter.maxDiameter);
        return Math.max(leftHeight,rightHeight)+1;

     }

     dfs(root);
     return maxDiameter;

}

const builfBSTfromSortedArray = function(nums, left=0, right=nums.length){
    // base case
    if(left>right) return null;

    let middle = Math.floor((left+right)/2);
    const node = new Node(nums[middle]);

    node.left= builfBSTfromSortedArray(nums, left, middle-1);
    node.right= builfBSTfromSortedArray(nums, middle+1,right);

    return node;

}
builfBSTfromSortedArray([[1,2,3,4,5,6,7,8,9]]);
// [1,2,3,4,5,6,7,8,9]  build tree



const tree = new BinaryTree();
ltree.insert([1,2,3,4,5]);
tree.insert([6,7,8]);