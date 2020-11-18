class Stack {
    constructor() {
        this.storage = {}
    }

    push(item){
       this.storage[item] = item
    }

}


let newStack = new Stack();
newStack.push("hello")