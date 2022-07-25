/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

const makeChange = (sum) => {
  // early exit;
  if (sum < 2) return 1;
  
  const currency = [1, 2, 5, 10, 20, 50, 100, 200]
  const currencyMap = {
    1: 1,
    2: 2,
    5: 4,
    10: 7,
    20: 13,
    50: 26,
    100: 51,
    200: 101
  }
// keep track of number of solutions
  let solutions = 0;
// keep track of tempSum
  let tempSum = 0;
  
  // go from larges to smallest,
for (let i = currency.length-1; i >= 0; i--) {
  const curr = currency[i]
    while (tempSum + curr <= sum) { // try curr largest first
      // if it's higher than sum
        // go down to the lower number
      tempSum = tempSum + curr;
      solutions =  solutions + currencyMap[curr]

      if (tempSum === sum) return solutions;
    }
}
  // return number of attempts
  return solutions;
}


// there's 1 way of making 1 pence
const test1 = makeChange(1);
console.log(`${test1} === 1 ways`)

// there's 2 way of making 2 pence
const test2 = makeChange(2);
console.log(`${test2} === 2 ways`)

// there's 4 way of making 5 pence
const test3 = makeChange(5);
console.log(`${test3} === 4 ways`)

// there's 7 way of making 10 pence
const test4 = makeChange(10);
console.log(`${test4} === 7 ways`)

// there's 13 way of making 20 pence
const test5 = makeChange(20);
console.log(`${test5} === 13 ways`)

// there's 26 way of making 50 pence
const test6 = makeChange(50);
console.log(`${test6} === 26 ways`)

// there's 51 way of making 100 pence
const test7 = makeChange(100);
console.log(`${test7} === 51 ways`)

// there's 101 way of making 200 pence
const test8 = makeChange(200);
console.log(`${test8} === 101 ways`)

// there's 151 way of making 300 pence
const test9 = makeChange(300);
console.log(`${test9} === 151 ways`);

// there's 505 way of making 1000 pence
const test10 = makeChange(1000);
console.log(`${test10} === 505 ways`);
