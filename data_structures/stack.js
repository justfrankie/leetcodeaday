// Stack has LIFO (last in first out) order

class Stack {
  constructor(){
      this.storage = []
  }
  push (item) {this.storage.push(item);  }
  pop () { return this.storage.pop()}
  top () { return this.storage[this.storage.length-1]}
  isEmpty  () { return !!this.storage.length}
  size () { return this.storage.length}
}

const assertEquals = (expected, actual) => {
  console.log("Expected " + expected + " === " + actual);
  console.log(expected == actual);
}

const stack = new Stack();
stack.push("tiger")
// stack.push("tiger") stack.storage() will return [tiger]
assertEquals(["tiger"], stack.storage)

// stack.push("panda") stack.storage() will return [tiger, panda]
stack.push("panda")
assertEquals(["tiger", "panda"], stack.storage)
// stack.top() will return panda
// stack.size() will return 2
// stack.pop() stack.storage() will return [tiger]
// stack.pop() stack.storage() will return []
// stack.isEmpty() will return true
