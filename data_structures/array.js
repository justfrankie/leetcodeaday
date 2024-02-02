// Define a simple Array class to work with
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    delete this.data[Object.keys(this.data).length - 1];
    return this.data;
  }

  shift() {
    let deleted;
    if (Object.keys(this.data).length > 1) {
      deleted = this.data[Object.keys(this.data)[0]];
      delete this.data[Object.keys(this.data)[0]];
    }
    return deleted;
  }

  unshift(items) {
    let newData = {}; // Initialize newData as an empty object

    if (Object.values(arguments).length > 1) {
      Object.values(arguments).forEach(
        (argument, index) => (newData[index] = argument)
      );
    } else {
      newData = { 0: items };
    }
    let oldObjCount = 0;
    for (
      let i = Object.keys(newData).length;
      oldObjCount < Object.keys(this.data).length;
      i++
    ) {
      newData[i] = Object.values(this.data)[oldObjCount];
      oldObjCount++;
    }
    return newData;
  }

  map(callback) {
    let returned = {};

    for (let i = 0; i < Object.values(this.data).length; i++) {
      returned[i] = callback(this.data[i]);
    }

    return returned;
  }

  concat(arr) {
    arr.forEach((item) => (this.data[Object.keys(this.data).length] = item));
    return this.data;
  }

  slice(beginning, end) {
    const newArray = new MyArray();
    let startIndex = beginning || 0;
    let endIndex = end || Object.values(this.data).length;

    for (let i = startIndex; i < endIndex; i++) {
      newArray.push(this.data[i]);
    }

    return newArray;
  }
  // Other array methods can be added here as needed
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
