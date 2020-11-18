function findRepeat(numbers) {
    if (numbers.length < 2) {
      throw new Error('Finding duplicate requires at least two numbers');
    }
  
    const n = numbers.length - 1;
    const sumWithoutDuplicate = (n * n + n) / 2;
    const actualSum = numbers.reduce((acc, cur) => acc +  cur, 0);
  
    return actualSum - sumWithoutDuplicate;
  }

  let assertEquals = (actual, expected, message) => {
    // if (actual.length !== expected.length ) return false;
      if (parseInt(actual) !== parseInt(expected)) {
        console.log(`X - FAILED Actual: ${actual} Expected: ${expected}!`);
        return;
      } else {
        console.log(`PASSED! ${message} PASSED! `);
        return;
      }
  };
  
  assertEquals(findRepeat([1, 2, 2, 3, 4]), 2, "Should return 2");
  assertEquals(findRepeat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), 10, "Should return 10");
  