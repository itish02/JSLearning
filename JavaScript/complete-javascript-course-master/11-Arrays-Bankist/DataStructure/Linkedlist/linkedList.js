// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertAtStart(data) {
//         let newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     insertAtEnd(data) {
//         let newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return this.head;
//         }

//         let curr = this.head;
//         while (curr.next) {
//             curr = curr.next;
//         }
//         curr.next = newNode;
//         return this.head;
//     }

//     insertAt(data, i) {
//         let newNode = new Node(data);
//         let counter = 0,
//             curr, prev;
//         if (i === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//             return this.head;
//         }
//         curr = this.head;
//         while (counter < i) {
//             prev = curr;
//             curr = curr.next;
//             counter++
//         }
//         prev.next = newNode;
//         newNode.next = curr;
//         return curr;
//     }

//     deleteAtStart() {
//         this.head = this.head.next;
//         return this.head;
//     }

//     deleteAtEnd() {
//         if (!this.head.next) {
//             this.head = null;
//             return this.head
//         }
//         let curr = this.head,
//             prev;
//         while (curr.next) {
//             prev = curr;
//             curr = curr.next;
//         }
//         prev.next = null;
//         return this.head;
//     }

//     deleteAt(i) {
//         if (i === 0) {
//             this.head = this.head.next;
//             return this.head;
//         }
//         let counter = 0,
//             curr = this.head,
//             prev;
//         while (counter < i) {
//             prev = curr;
//             curr = curr.next;
//             counter++;
//         }
//         prev.next = curr.next;
//         return this.head;
//     }
// }

// let l1 = new linkedList();
// let l2 = new linkedList();
// // l1.insertAtStart(1);
// // l1.insertAtStart(2);
// // l1.insertAtStart(3);

// l1.insertAtEnd(1);
// l1.insertAtEnd(2);
// l1.insertAtEnd(5);
// l1.insertAtEnd(8);

// // l1.insertAt(3, 2);

// l2.insertAtEnd(2);
// l2.insertAtEnd(6);
// l2.insertAtEnd(1);
// l2.insertAtEnd(7);

// // // l1.deleteAtStart();
// // l1.deleteAt(2);
// // l1.deleteAt(3);

function Node(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// addTwoNumbers = (l1, l2) => {
//     let head = new Node(0);
//     let node = head;
//     let carry = 0;
//     while (l1 || l2) {

//         l1val = l1 ? l1.val : 0;
//         l2val = l2 ? l2.val : 0;
//         let sum = l1val + l2val + carry;
//         carry = 0;

//         if (sum > 9) {
//             sum = sum % 10;
//             carry = 1;
//         }

//         node.next = new Node(sum);
//         node = node.next;

//         if (l1) {
//             l1 = l1.next;
//         }

//         if (l2) {
//             l2 = l2.next;
//         }

//         if (carry) {
//             node.next = new Node(carry);
//         }
//     }
//     return head.next;
// }

// let l1 = new Node(2);
// l1.next = new Node(3);
// l1.next.next = new Node(7);
// let l2 = new Node(5);
// l2.next = new Node(8);
// l2.next.next = new Node(3);

// const newList = addTwoNumbers(l1, l2);

// console.log(l1, l2, newList);

const mergeTwoLists = function(l1, l2) {
    let dummyHead = new Node();

    let prev = dummyHead;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else if (l2.val < l1.val) {
            prev.next = l2;
            l2 = l2.next;
        }

        prev = prev.next;
    }

    if (l1 != null) prev.next = l1;
    else prev.next = l2;

    return dummyHead.next;
};

addTwoNumbers = (l1, l2) => {
    let dummy = new Node();
    let node = dummy;
    let sum;
    let carry = 0;
    while (l1 || l2) {
        l1val = l1 ? l1.val : 0;
        l2val = l2 ? l2.val : 0;
        sum = l1val + l2val + carry;
        carry = 0;
        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        }
        node.next = new Node(sum);
        node = node.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }

        if (carry) {
            node.next = new Node(carry);
        }
    }
    return dummy.next;
}

deleteFromEnd = (list, n) => {
    let dummy = new Node(0, list);
    let fast = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    let slow = dummy;
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

let l1 = new Node(2);
l1.next = new Node(5);
l1.next.next = new Node(6);
// l1.next.next.next = new Node(9);
let l2 = new Node(5);
l2.next = new Node(8);
l2.next.next = new Node(3);

const List = mergeTwoLists(l1, l2);
const newList = deleteFromEnd(List, 2);


// let input = "listen, silent";
// let words = input.split(", ");

// for (let i = 0; i < words.length; i++) {

//     let word = words[i];
//     let alphabetical = word.split("").sort().join("");

//     for (let j = 0; j < words.length; j++) {

//         if (i === j) {
//             continue;
//         }

//         let other = words[j];
//         if (alphabetical === other.split("").sort().join("")) {
//             console.log(word + " - " + other + " (" + i + ", " + j + ")");
//         }
//     }
// }


// console.log(anagrams('listen', 'silenk'));

// const str = "Hello my name is Itish";

// const word = str.toLowerCase().split('').sort();
// console.log(word);

// let string = 'Hi how are you';
// let strA = string.replace(/[^\w]/g, '').toLowerCase();
// for (str of strA) {
//     console.log(str);