/**
 * @namespace
 * @classdesc Stack abstract daa type implementation. Elements are added to and removed from  the top of the structure and
 * @param {integer} size maximum number of items that might be on the stack
 * @return {Stack} Stack ADT
 * */
function Stack(size) {
    this.items = new Array(size);
    this.top = 0;
    this.count = 0;
};

/**
 * @param
 * @description It removes the topmost item from the stack and returns it
 * @throws {Stack Underflow} if  the stack is empty
 * @public
 * @returns {} last element on the stack
 */
Stack.prototype.pop = function() {
    if (this.count = 0) {
        throw new Error("Stack underFlow: The stack is empty");

    } else {
        this.top--;
        this.count--;
        return this.items[this.top + 1];
    }
};
/**
 * @param {item type} newItem
 * @description put the value val on top of the stack
 * @returns
 */
Stack.prototype.push = function(newItem) {
    if (this.count < this.items.length) {
        this.top++;
        this.count++;
        this.items[this.top] = newItem;
    }
    else {
        throw new Error("Stack overFlow: Stack has reached its maximum size!");
    }
};

/**
 * @param
 * @description remove the element on the top of the stack
 * @returns {} element on the top of the stack
 */
Stack.prototype.peek = function() {
    if( !this.isEmpty()){
        this.count--;
        this.top--;
    }else{
        throw new Error("Stack underFlow: Stack is empty!");
    }
};

/**
 * @param
 * @description counts the number of elements that are in the stack
 * @returns {integer} number of elements that are in the stack
 */
Stack.prototype.numElements = function() {
    return this.count;
};

/**
 * @param
 * @description It counts the maximum size of the stack
 * @returns {integer} Maximum size of the stack
 */
Stack.prototype.size = function() {
    return this.items.length;
};

/**
 * @param
 * @description It check whether the stack is empty or not
 * @returns {boolean} true || false
 */
Stack.prototype.isEmpty = function() {
    return (this.count === 0);
};

/*
 *
 var st = new Stack(100);
 document.write(st.empty().toString() + "<br>");
 for (i = 1; i < 4; i++) {
 st.push(i + " => bra bra");
 }
 document.write(st.numElements() + "<br>");
 for (i = 1; i < 4; i++) {
 document.write(st.pop() + "<br>");
 }
 */