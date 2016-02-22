/**
 * @namespace
 * @author Concorde Habineza
 * @classdesc
 * @param {variable} val
 * @returns {Node} Node
 * @constructor
 */
function Node(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
};
/**
 * @namespace
 * @author Concorde Habineza
 * @description has not been implemented yet
 *
 * @returns {LinkedList}
 */
function LinkedList() {
    this.head = new Node(null);
    this.tail = this.head;
    this.length = 0;
};

/*
 *@description It sets element el at a specific position pos, overwriting the previous element
 *@return {Boolean} true if position pos is found, and false otherwise
 */
LinkedList.prototype.set = function(el, pos) {

};

LinkedList.prototype.append = function(val) {
    //insert val at the end of the list
    var newNode = new Node(val);
    if(this.head === null){
        this.head = this.tail = newNode;

    }else{
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length ++;
    delete newNode;
};
LinkedList.prototype.printList = function(){
    var temp = this.head;
    while(temp !== null){
        document.write(temp.data);
        temp = temp.next;
    }
    temp =null;
    delete temp;
};
LinkedList.prototype.insert = function(el, pos) {
    if(pos ===0){

    }else if (pos === this.list_length){
        this.append(val);
    }
    else if( pos > 0 && pos < this.list_length){
        var temp = this.head;
        var new_node;
        for(i = 0 ; i< pos; i++){
            new_node = temp.next;
            new_node.prev = temp;
            temp = new_node;
        }
        var temp2 = new Node(val);
        temp2.prev = temp.prev;
        temp.next = temp;

    }
    //insert element el at position pos
};
LinkedList.prototype.remove = function(el) {
    //remove the first occurence of element el
};
LinkedList.prototype.removeAll = function() {
    this.head  = new Node(null);
    this.tail = this.head();
    this.length = 0;
};

LinkedList.prototype.removeAt = function(pos) {
    if(pos <= 0 || pos > this.length ){
        throw new Error(pos + " is an invalid position!\n");
        return null;
    }else {
        var currentNode = this.head;
        var count = 0;
        while (count < pos - 1) {
            currentNode = currentNode.next;
            count++;
        }
        var temp = currentNode.next;
        currentNode.next = temp.next;
        if(temp.next !== null){
            temp.next.prev = currentNode;
        }
    }
};

LinkedList.prototype.get = function(pos) {
    if(pos <= 0 || pos > this.list_length ){
        throw new Error(pos + " is an invalid position!\n");
        return null;
    }else{
        var currentNode =  this.head;
        var count = 0;
        while(currentNode.next === null && count){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
};

LinkedList.prototype.find = function(elem) {
    var found = false;
    var moreToSearch = true;
    var currentNode = this.head;
    while(!found && moreToSearch){
        if(currentNode.next === null){
            moreToSearch = false;
        }
        else if (currentNode.data === elem){
            found = true;
        }else{
            currentNode = currentNode.next;
            moreToSearch = (currentNode !== null);
        }
    }
};
LinkedList.prototype.swap = function(pos1, pos2) {
    var temp = this.get(pos1);
    var temp2 = this.get(pos2);
    if(pos1 > pos2){
        this.insert(temp, pos2);
        this.removeAt(pos2 + 1);
        this.insert(temp2, pos1);
        this.removeAt(pos1 + 1);
    }
    else if (pos1 < pos2){
        this.insert(temp2, pos1);
        this.removeAt(pos1 + 1);
        this.insert(temp, pos2);
        this.removeAt(pos2 + 1);
    }
    delete temp;
    delete temp2;
};