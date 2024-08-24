class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return mergeHelper(lists, 0, lists.length - 1);
}

function mergeHelper(lists, left, right) {
    if (left === right) {
        return lists[left];
    }

    const mid = Math.floor((left + right) / 2);
    const leftList = mergeHelper(lists, left, mid);
    const rightList = mergeHelper(lists, mid + 1, right);
    return mergeTwoLists(leftList, rightList);
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// Example usage:
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let mergedList = mergeKLists([l1, l2, l3]);

// Function to print the merged list
function printList(node) {
    while (node) {
        process.stdout.write(node.val + " -> ");
        node = node.next;
    }
    console.log("null");
}

printList(mergedList);
