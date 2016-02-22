/**
 * @namespace
 * @param {integer} N maximum number of data structure the queue can hold
 * @author Concorde Habineza
 * @description The queue is implemented using a circular array of maximum size N. The elements are added to the back and removed from the front.
 * @return {Queue} Queue abstract data type
 * */
function Queue(N) {
    N = N > 2 ? parseInt(N) : 3;
    this.array = new Array(N);
    this.back = 0;
    this.front = -1;
}

/**
 * @param
 * @description The method counts the number of elements that are currently in the queue
 * @returns {number} number of elements that are currently in the queue
 */
Queue.prototype.numElements = function() {
    if (this.front === this.back - 1) {
        return 0; /* Queue is empty */
    }
    else {
        return ((this.array.length - this.back) + this.front + 1) % (this.array.length);
    }
};

/**
 * @param {object} element object to add to the queue
 * @description The method appends the object element to the back of the queue
 * @return
 */
Queue.prototype.enqueue = function(element) {
    if (this.numElements() === this.array.length - 1) {
        throw new Error("Queue overflow: The Queue is full! ");
    }
    else {
        this.array[this.front + 1] = element;
        this.front = (this.front + 1) % this.array.length;
    }
};

/**
 * @param
 * @description The method removes the front element from the queue
 * @returns {queue element type} the first element to get in the queue
 */
Queue.prototype.dequeue = function() {
    if (this.empty()) {
        throw new Error("The Queue is empty! ");
    } else {
        var temp = this.array[this.back];
        this.back = (this.back + 1) % this.array.length;
        return temp;
    }
};

/**
 * @param
 * @description The method returns the first element to get in the queue
 * @returns {queue element} the first element to get in the queue
 */
Queue.prototype.peek = function() {
    return this.array[this.back];
};



/**
 * @param
 * @description It checks if the queue is empty
 * @returns {boolean} true if the queue is empty and false it is not empty
 */
Queue.prototype.empty = function() {
    return (this.front === -1);
};

/**
 * @param
 * @description The method returns the size of the queue
 * @return {Number} maximum size of the queue
 */
Queue.prototype.size = function() {
    return this.array.length;
};

/**
 * @param
 * @private
 * @description The method removes all elements from the queue. It initializes the queue to an empty state
 */
Queue.prototype.makeNull = function() {
    this.front = -1;
    this.back = 0;
    this.array = new Array(this.array.length);
};

/**
 * @param
 * @description This method prints the queue from the first element to the last element to get into the queue
 * @returns
 */
Queue.prototype.printQ = function() {
    //document.write("now printing the queue <br>");
    document.write("<table class='data'>\n\
        <tr>\n\
        <td> <span class='entity3'>timestamp </td>\n\
        <td><span class='entity3'>Humidity</span></td>\n\
        <td><span class='entity3'>Temperature</span></td>\n\
        <td><span class='entity3'>CO_r <br></span> </td> </tr>"
    );
    for (i = 0; i < this.numElements(); i++) {
        document.write(this.array[i].tokenize());
    }
    document.write("</table>");
};

/*
 //for testing purposes only
 var q = new Queue(100);
 q.peek();
 q.enqueue(12);
 //document.write(q.numElements() + " <== numElements<br>");
 q.enqueue(-123);
 q.printQ();
 /*
 document.write(q.numElements() + " <== numElements<br>");
 document.write(q.dequeue() + "<br>");
 document.write(q.numElements() + " <== numElements<br>");
 document.write(q.dequeue() + "<br>");
 document.write(q.numElements() + "<== numElements<br>");
 document.write(q.empty()+ "<br>");
 q.makeNull();
 document.write(q.empty()+ "<br>");*/
/*
 * TODO
 * implement the error class to include the queue overflow and underflow errors
 */