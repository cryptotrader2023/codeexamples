class LinkedListNode {
    data: number;
    next: LinkedListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: LinkedListNode | null;

    constructor() {
        this.head = null;
    }

    append(data: number): void {
        const newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    findNodeByData(targetData: number): LinkedListNode | null {
        let current = this.head;
        while (current) {
            if (current.data === targetData) {
                return current;
            }
            current = current.next;
        }
        return null; // Node with targetData not found
    }

    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const integerArray: number[] = [1, 2, 3, 4, 5];
const linkedList = new LinkedList();

for (const num of integerArray) {
    linkedList.append(num);
}

console.log("Linked List elements:");
linkedList.printList();

const targetData = 3;
const foundNode = linkedList.findNodeByData(targetData);

if (foundNode) {
    console.log(`Node with data ${targetData} found.`);
} else {
    console.log(`Node with data ${targetData} not found.`);
}
