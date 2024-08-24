class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value); // Pushes the value to the stack top
    }

    top() {
        return this.stack[this.stack.length - 1]; // Returns the element at the top of the stack
    }

    pop() {
        return this.stack.pop(); // Removes and returns the top element of the stack
    }

    isEmpty() {
        return this.stack.length === 0; // Checks if the stack is empty
    }
}

function main() {
    const s = new Stack(); // Creating a stack

    s.push(1); // Pushing 1 to the stack top
    s.push(2); // Pushing 2 to the stack top
    s.push(3); // Pushing 3 to the stack top
    s.push(4); // Pushing 4 to the stack top
    s.push(5); // Pushing 5 to the stack top
   console.log(s);
    // Printing the stack
     while (!s.isEmpty()) {
         console.log("top",s.top() + " "); // Outputting the top element
         s.pop(); // Removing the top element
    }
    // // The above loop prints "5 4 3 2 1"
}

main(); 