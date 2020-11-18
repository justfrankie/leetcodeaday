class Stack {
   constructor(){
       this.storage = {}
        this.index = 0;
        this.push = function(item){
            this.storage[this.index] = item;     
         }
         //this.pop
         //this.size
         //this.peek
   }
   
}


let newStack = new Stack();
newStack.push("hello")
console.log(newStack)