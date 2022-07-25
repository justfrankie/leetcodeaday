// Stack has LIFO (last in first out) order
class Stack {
  constructor(){
      this.storage = new Array;
  }
  push (item) {this.storage.push(item) }
  pop () { return this.storage.pop()}
  top () { return this.storage[this.storage.length-1]}
  isEmpty  () { return !this.storage.length ? true : false}
  size () { return this.storage.length}
}

const stack = new Stack();

// stack.push("tiger") stack.storage() will return [tiger]
stack.push("tiger")
console.log(`${JSON.stringify(stack.storage)} === ["tiger"]`)

// stack.push("panda") stack.storage() will return [tiger, panda]
stack.push("panda")
console.log(`${JSON.stringify(stack.storage)} === ["tiger", "panda"]`)

// stack.top() will return panda
stack.top()
console.log(`${JSON.stringify(stack.top())} === "panda"`)

// stack.size() will return 2
stack.size()
console.log(`${stack.size()} === 2`)

// stack.pop() stack.storage() will return ["tiger"]
stack.pop()
console.log(`${JSON.stringify(stack.storage)} === ["tiger"]`)

// stack.pop() stack.storage() will return []
stack.pop()
console.log(`${JSON.stringify(stack.storage)} === []`)

// stack.isEmpty() will return true
stack.isEmpty()
console.log(`${stack.isEmpty()} === true`)
