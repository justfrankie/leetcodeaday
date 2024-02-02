// Define a simple Array class to work with
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    // returns the data object
  }

  pop() {
    // returns the data object
  }

  shift() {
    // returns the deleted item
  }

  unshift(items) {
    // returns a new data object containing unshifted items
  }

  map(callback) {
    // returns a new data object containing mapped items
  }

  concat(arr) {
    // returns the existing modified data object
  }

  slice(beginning, end) {
    // returns a new data object containing sliced items
  }
}
// Refactored testPushMethod
function testPushMethod() {
  const myArray = new MyArray();

  console.log("Pushing 'apple'. New length:", myArray.push("apple"));
  console.log(
    "Expect data[0] to equal 'apple':",
    myArray.data[0] === "apple" ? "Pass" : "Fail"
  );

  console.log("Pushing 'orange'. New length:", myArray.push("orange"));
  console.log(
    "Expect data[1] to equal 'orange':",
    myArray.data[1] === "orange" ? "Pass" : "Fail"
  );

  console.log("Pushing 'pear'. New length:", myArray.push("pear"));
  console.log(
    "Expect data[2] to equal 'pear':",
    myArray.data[2] === "pear" ? "Pass" : "Fail"
  );
}

// Refactored testPopMethod
function testPopMethod() {
  const myArray = new MyArray();

  console.log("Pushing 'apple'. New length:", myArray.push("apple"));
  console.log("Pushing 'oranges'. New length:", myArray.push("oranges"));

  console.log("Popping. Removed element:", myArray.pop());
  console.log(
    "Expect data[1] to be undefined:",
    myArray.data[1] === undefined ? "Pass" : "Fail"
  );
}

function testShift() {
  const myArray = new MyArray();

  console.log("Pushing 'apple'. New length:", myArray.push("apple"));
  console.log("Pushing 'oranges'. New length:", myArray.push("oranges"));

  const deleted = myArray.shift();
  console.log(
    "Expect shifted item to be apple:",
    deleted == "apple" ? "Pass" : "Fail"
  );
}

function testUnshift() {
  const myArray = new MyArray();

  console.log("Pushing 'apple'. New length:", myArray.push("apple"));
  console.log("Unshifting 'oranges'. New length:", myArray.unshift("oranges"));
  console.log(
    "Unshifting 'pear' and 'guava' and 'cats' . New length:",
    myArray.unshift("pear", "guava", "cats")
  );
}

function testMap() {
  const myArray = new MyArray();

  console.log("Pushing 1. New length:", myArray.push(1));
  console.log("Pushing 4. New length:", myArray.push(4));
  console.log("Pushing 9. New length:", myArray.push(9));
  console.log("Pushing 16. New length:", myArray.push(16));

  const mapped = myArray.map((x) => x * 2);
  console.log(
    "Expect map values to have:",
    mapped["0"] == 2,
    mapped["1"] == 8,
    mapped["2"] == 18,
    mapped["3"] == 32
  );
}

function testConcat() {
  const myArray = new MyArray();

  myArray.data = { 0: "a", 1: "b" };
  myArray.concat(["C", "D", "E"]);
  console.log(
    "Should output: {'0': 'a', '1': 'b', '2': 'C', '3': 'D', '4': 'E'}",
    myArray.data
  );
}

function testSlice() {
  const myArray = new MyArray();

  myArray.data = { 0: "a", 1: "b", 2: "c", 3: "d" };
  console.log("Should output: {'0': 'b', '1': 'c'}", myArray.slice(1, 3));
  console.log("Should output: {'0': 'c', '1': 'd'}", myArray.slice(2));
}

// Run the test functions
testPushMethod();
testPopMethod();
testShift();
testUnshift();
testMap();
testConcat();
testSlice();
