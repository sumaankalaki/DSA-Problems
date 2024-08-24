// Creating a stack
let stack = [];

// Pushing elements to the stack
stack.push(1); // This pushes 1 to the stack top
stack.push(2); // This pushes 2 to the stack top
stack.push(3); // This pushes 3 to the stack top
stack.push(4); // This pushes 4 to the stack top
stack.push(5); // This pushes 5 to the stack top
console.log(stack);
// Removing elements from the stack using pop function
while (stack.length > 0) {
    console.log("top:", stack[stack.length - 1]); // Print the top element
    stack.pop(); // Removes the top element from the stack
}
