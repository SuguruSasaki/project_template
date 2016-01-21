/**
 *
 * @param message
 * @param expr
 * @returns {boolean}
 */
function assert(message, expr){
    if(!expr){
        throw new Error(message);
    }
    assert.count++;
    return true;
}



var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
trace(stack.pop());


var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

trace(queue.dequeue());
trace(queue.dequeue());
trace(queue.dequeue());
trace(queue.dequeue());










