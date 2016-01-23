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


var module = this['quad'];


var stack = new module.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
trace(stack.pop());


var queue = new module.Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

trace(queue.dequeue());
trace(queue.dequeue());


var data1 = new module.LinkedList(10);
var data2 = new module.LinkedList(20);
var data3 = new module.LinkedList(30);

data1.insert(data2);
data2.insert(data3);


trace(data2._data);

data2._data = 1000;

trace(data2._data);









