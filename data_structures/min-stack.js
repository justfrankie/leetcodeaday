/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.min = Number.MAX_SAFE_INTEGER; // initiates max value as starting value
    this.stack = []; // stack data structure
  }
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x <= this.min) {
      this.stack.push(this.min)
      this.min = x
    }
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    if (popped === this.min) {
        this.min = this.stack.pop();
    }
    return popped
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
