//Adobas-Jr_Victorino_CC104_W6_Exercise.js

'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  // Initialize the stack storage.
  constructor() {
    this.items = [];
  }

  // Add an action to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the most recent action.
  pop() {
    return this.items.pop();
  }

  // Read the top action without removing it.
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check whether the stack has no actions.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of stored actions.
  size() {
    return this.items.length;
  }

  // Display actions from oldest to newest.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Record the three actions in order.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Undo the latest action and display the remaining history.
console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());



// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  // Initialize the queue storage.
  constructor() {
    this.items = [];
  }

  // Add a request at the back of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the request at the front.
  dequeue() {
    return this.items.shift();
  }

  // Read the front request without removing it.
  front() {
    return this.items[0];
  }

  // Check whether the queue has no requests.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of waiting requests.
  size() {
    return this.items.length;
  }

  // Display requests from front to back.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests in their arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the next request without removing it.
console.log('Next Request:', waitingRequests.front());

// Process the first two requests in arrival order.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining requests and the queue size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  // Initialize connected-node storage and the item count.
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Insert by priority, keeping equal-priority requests in arrival order.
  enqueue(request, priority) {
    const item = { request, priority };
    const node = { element: item, next: null };

    if (this.head === null || priority < this.head.element.priority) {
      node.next = this.head;
      this.head = node; 
    } else {
      let current = this.head;

      // Move past all requests with higher or equal priority.
      while (current.next !== null && current.next.element.priority <= priority) {
        current = current.next;
      }

      node.next = current.next;
      current.next = node;
    }

    this.length++;
  }

  // Remove and return the first item, or undefined when empty.
  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    const item = this.head.element;
    this.head = this.head.next;
    this.length--;
    return item;
  }

  // Return the number of queued requests.
  size() {
    return this.length;
  }

  // Display each request and its priority in processing order.
  print() {
    let current = this.head;

    while (current !== null) {
      console.log(`${current.element.request}, Priority ${current.element.priority}`);
      current = current.next;
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests in their arrival order.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Display the complete queue in priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request, which has the highest priority.
const processedRequest = urgentRequests.dequeue();
console.log(`Processed Priority Request: ${processedRequest.request}, Priority ${processedRequest.priority}`);

// Display the requests that are still waiting.
console.log('Remaining Priority Requests:');
urgentRequests.print();



// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // Store the element.
    this.element = element;
    
    //  Set next to null.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    //  Set length to zero.
    this.length = 0;
    //  Set head to null.
    this.head = null;
  }

  append(element) {
    // Add a node at the end.
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  } 

  insert(position, element) {
    if (!Number.isInteger(position) || position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  removeAt(position) {
    if (!Number.isInteger(position) || position < 0 || position >= this.length) {
      return undefined;
    }

    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      current = previous.next;
      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  indexOf(element) {
    let current = this.head;
    let position = 0;
    while (current !== null) {
      if (current.element === element) {
        return position;
      }
      current = current.next;
      position++;
    }
    return -1;
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    const elements = [];
    let current = this.head;
    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }
    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required completed requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert a request at the beginning and another at the end.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');
completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);

// Display the complete list and locate Ticket #402.
console.log('Complete List:', completedRequests.toString());
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf('Ticket #402 - Printer Connected')
);

// Remove one request by position and another by its exact value.
console.log('Removed at Position 1:', completedRequests.removeAt(1));
console.log(
  'Removed by Value:',
  completedRequests.remove('Ticket #403 - Antivirus Updated')
);

// Display the remaining records and their count.
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());
