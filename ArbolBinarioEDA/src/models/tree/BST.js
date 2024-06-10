import Node from "./Node.js";

class BST {
    constructor() {
        this.root = null;
    }

    add(product) {
        if (this.root === null) {
            this.root = new Node(product);
            return this.root !== null;
        } else {
            return this.insertNode(this.root, product);
        }
    }

    insertNode(node, product) {
        if (product.quantity === node.value.quantity) {
            return false;
        }

        if (product.quantity < node.value.quantity) {
            if (node.left === null) {
                node.left = new Node(product);
                return node.left !== null;
            } else {
                return this.insertNode(node.left, product);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(product);
                return node.right !== null;
            } else {
                return this.insertNode(node.right, product);
            }
        }
    }

    search(quantity) {
        return this.searchNode(this.root, quantity);
    }

    searchNode(node, quantity) {
        if (node === null) {
            return null;
        }
        if (node.value.quantity === quantity) {
            return node.value;
        } else if (quantity < node.value.quantity) {
            return this.searchNode(node.left, quantity);
        } else {
            return this.searchNode(node.right, quantity);
        }
    }

    min() {
        if (this.root === null) {
            return null;
        }
        return this.minNode(this.root).value;
    }

    minNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.minNode(node.left);
        }
    }

    max() {
        if (this.root === null) {
            return null;
        }
        return this.maxNode(this.root).value;
    }

    maxNode(node) {
        if (node.right === null) {
            return node;
        } else {
            return this.maxNode(node.right);
        }
    }

    inOrderTraversal(callback) {
        this.inOrderTraversalNode(this.root, callback);
    }

    inOrderTraversalNode(node, callback) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.value);
            this.inOrderTraversalNode(node.right, callback);
        }
    }
}

export default BST;
