const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.fullRoot = null;
	}

  root() {
    return this.fullRoot;
  }

  add(data) {
    const node = new Node(data);

		if (!this.fullRoot) {
			this.fullRoot = node;
		}

		let current = this.fullRoot;

		while (true) {
			if (data === current.data) {
				return undefined;
			}

			if (data < current.data) {
				if (!current.left) {
					current.left = node;
					return this;
				}

				current = current.left;
			}

			else {
				if (!current.right) {
					current.right = node;
					return this;
				}

				current = current.right;
			}
		}
  }

  has(data) {
    if (!this.fullRoot) {
			return false;
		}

		let current = this.fullRoot;

		while (current) {
			if (data < current.data) {
				current = current.left;
			}
			else if (data > current.data) {
				current = current.right;
			}
			else {
				return true;
			}
		}

		return false;
  }

  find(data) {
    if (!this.fullRoot) {
			return null;
		}

		let current = this.fullRoot;
		let found = false;

		while (current && !found) {
			if (data < current.data) {
				current = current.left;
			}
			else if (data > current.data) {
				current = current.right;
			}
			else {
				found = true;
			}
		}

		if (!found) {
			return null;
		}

		return current;
  }

  remove(data) {
    const removeNode = function(node, data) {
			if (!node) {
				return null;
			}

			if (data === node.data) {
				if(!node.left && !node.right) {
					return null;
				}
	
				if (!node.left) {
					return node.right;
				}
	
				if (!node.right) {
					return node.left;
				}
	
				let tempNode = node.right;
	
				while(tempNode.left) {
					tempNode = tempNode.left;
				}
	
				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);
				return node;
			}

			else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			}

			else {
				node.right = removeNode(node.right, data);
				return node;
			}
		}

		this.fullRoot = removeNode(this.fullRoot, data);
  }

  min() {
    if (this.fullRoot === null) return null;

		let current = this.fullRoot;

		while(current.left !== null) {
			current = current.left;
		}

		return current.data;
  }

  max() {
    if (this.fullRoot === null) return null;

		let current = this.fullRoot;

		while (current.right !== null) {
			current = current.right;
		}

		return current.data;
  }
}

module.exports = {
  BinarySearchTree
};