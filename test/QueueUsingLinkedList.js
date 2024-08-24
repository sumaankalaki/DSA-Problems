class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // Add an element to the end of the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.front === null) {
            return "Underflow";
        }
        const temp = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.length--;
        return temp.data;
    }

    // Return the front element without removing it
    frontElement() {
        if (this.front === null) {
            return "No elements in Queue";
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === null;
    }

    // Return the size of the queue
    size() {
        return this.length;
    }

    // Print the elements in the queue
    printQueue() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(' ');
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
console.log(queue.frontElement()); // Output: 20

console.log("Queue size:");
console.log(queue.size()); // Output: 2

console.log("Is queue empty?");
console.log(queue.isEmpty()); // Output: false
