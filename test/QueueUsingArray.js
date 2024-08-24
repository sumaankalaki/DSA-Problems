class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Return the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Print the elements in the queue
    printQueue() {
        return this.items.join(' ');
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Initial queue:");
console.log(queue.printQueue()); // Output: 10 20 30

console.log("Dequeue an element:");
console.log(queue.dequeue()); // Output: 10
console.log(queue.printQueue()); // Output: 20 30

console.log("Front element:");
console.log(queue.front()); // Output: 20

console.log("Queue size:");
console.log(queue.size()); // Output: 2

console.log("Is queue empty?");
console.log(queue.isEmpty()); // Output: false
