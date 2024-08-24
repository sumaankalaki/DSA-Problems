class Node{
    constructor(data){
        this.data=data;
        this.next= null;
    }
}

class LinkedList{
    constructor(){
        this.head= null;
    }

    append(data){
        const newNode = new Node(data);
        if(this.head == null)
        {
            this.head=newNode;
        } else{
            let current =  this.head;
            while(current.next){
                current=current.next;
            }
            current.next = newNode;
        }
    }

    preappend(data){
        const  newNode = new Node(data);
        newNode.next= this.head;
        this.head=newNode;
    }

    insertAt(index, data){
        if(index<0){
            return ;
        }
        const  newNode = new Node(data);
        if(index==0){
            newNode.next= this.head;
        this.head=newNode;
        return ;
        }

        let current= this.head;
        let count = 0;
        let previous = null;


         while(current && count< index){
            previous=current
            current=current.next;
            count++;
         }
         if(previous)
         {
            previous.next=newNode;
            newNode.next= current;
         }
    }

    removeAt(index){
        if(index<0 || this.head === null)
        {
            return null;
        }

        let current= this.head;

        if(index === 0)
        {
            this.head=current.next;
            return current.data;
        }
        let count = 0;
        let previous = null;

        while(current && count<index){
            previous= current;
            current= current.next;
            count ++ ;
        }
        if(current){
            previous.next = current.next;
            return current.data;
        }
        return  null;
    }

    // Traverse the list and execute a callback on each element
    traverse(callback){
        let current = this.head;
        while(current){
            callback(current.data);
            current=current.next;
        }
    }

    printList(){
        let current=this.head;
        let result=[];
        while(current)
        {
            result.push(current.data);
            current= current.newnext;
        }
        console.log(result.join('->'));
    }

}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.preappend(5);

console.log("Initial list:");
list.printList(); 

list.removeAt(3);
console.log("After removing element at index 3:");
list.printList(); 

console.log("Traversing the list:");
list.traverse(console.log);