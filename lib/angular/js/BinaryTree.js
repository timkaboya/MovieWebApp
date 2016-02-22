/**
 * @namespace
 * @returns {TreeNode} TreeNode
 */

function TreeNode(data) {
    this.data = data;
    this.left;
    this.right;
}
;
/**
 * @namespace
 * @author Concorde Habineza
 * @classdesc This is a unordered binary tree
 * @return {BinaryTree BinaryTree ADT
 */
function BinaryTree() {
    this.root = null;
    this.height = 0;
}
;
/**
 * @description The method insert an item into the the binary tree. the position of the item is chosen randomly
 * @public
 * @param {Note Type} item A node to append to the binary tree
 */
BinaryTree.prototype.insert = function(item) {
    var itemNode = new TreeNode(item);
    if (this.root == null) {
        this.root = itemNode;
        this.root.left = this.root.right = null;
    }
    else {
        var rand;
        var parentNode;
        var currentNode = this.root;
        while (!(currentNode == null)) {
            rand = Math.floor((Math.random() * 10) + 1);
            parentNode = currentNode;
            currentNode = (rand >= 5) ? currentNode.left : currentNode.right;
        }
        if (rand >= 5) {
            parentNode.left = itemNode;
        }
        else {
            parentNode.right = itemNode;
        }
    }
};

/**
 * @constructor
 * @description Method initializes an empty tree
 */
BinaryTree.prototype.clear = function() {
    this.root = null;
    this.height = 0;
};


/**
 * @description function getParent operations rightSublings
 * @param {TreeNode Type} node a node for which we want to find its parent
 * @returns : null if the node is the root or the node doest exist or the parent node of the given node
 */
BinaryTree.prototype.getParent = function(node) {
    if (node === this.root()) {
        return null;
    }
    else if (node === this.root.left || node === this.root.right) {
        return this.root;
    }
    else {
        var temp = this.root.left;
        if (temp !== null) {
            return temp.getParent(node);
        }
        temp = this.root.right;
        if (temp !== null) {
            return temp.getParent(node);
        }
    }
};

/**
 * @description function getParent operations rightSublings
 * @param {node data} target Value that needs to be found in the Tree
 * @return {Boolean} False if the tree is empty of a leaf or true of the node in the tree
 */
BinaryTree.prototype.find = function(target) {
    if (!this.root === null) {
        return false;
    }
    else {
        if (this.root.data === target) {
            return  true;
        } else {
            if (this.root.right.find(target))
                return true;
            else
                return this.root.left.find(target);
        }
    }
};


BinaryTree.prototype.makeNull = function() {
};
BinaryTree.prototype.leftMostChild = function() {
};
BinaryTree.prototype.rightMostChild = function() {
};

/**
 * @description function pre- order travesal operation which prints first the parent node then the left child node and finally the right child node
 * @param {TreeNode} node input node, usually a the root node of the tree
 * @returns : null if the node is the root or the node doest exist or the parent node of the given node
 */
BinaryTree.prototype.preOrderPrint = function(node) {
    if (!(node == null)) {
        document.write(node.data.tokenize());
        this.preOrderPrint(node.left);
        this.preOrderPrint(node.right);
    }
    return;
};

/**
 * param {TreeNode} node A tree node that needs to be printed
 * @description function inorder tree travesal operation which prints first the left child node then the parent node and finally the right child node
 * @return Null if the node is the root or the node doest exist or the parent node of the given node
 */
BinaryTree.prototype.inOrderPrint = function(node) {
    if (!(node == null)){
        this.inOrderPrint(node.left);
        document.write(node.data.tokenize());
        this.inOrderPrint(node.right);
    }
    return;
};

/**
 * @description function postorder tree travesal operation which prints first the right  child node then the right child node and finally the parent node.
 * @param {TreeNode} node A tree Node that needs to be printed
 * @return {TreeNode} if the node is the root or the node doest exist or the parent node of the given node
 */
BinaryTree.prototype.postOrderPrint = function(node) {
    if (!(node == null)) {
        this.postOrderPrint(node.right);
        this.postOrderPrint(node.left);
        document.write(node.data.tokenize());
    }
    return;
};
