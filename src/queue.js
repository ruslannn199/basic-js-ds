const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor(){
		this.head = null;
		this.prevNode = null;
		this.values = [];
	}

  getUnderlyingList() {
    this.values.forEach(elem => {
			let currentNode = {
				value: elem,
				next: null
			}
			!this.head ? this.head = currentNode : this.prevNode.next = currentNode;
			this.prevNode = currentNode;
		})
		return this.head;
  }

  enqueue(value) {
    this.values.push(value);
  }

  dequeue() {
		return this.values.shift();
  }
}

module.exports = {
  Queue
};
