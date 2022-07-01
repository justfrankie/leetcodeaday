/*
Combine two ledger Arrays

Given two chronologically-ordered arrays ledger: [[0, 1, ...n]], legacyBillingLedger: [0, 1, ...m], 
and a limit variable that indicates the count limit of the returned array.

Note that the first array ledger must come first before legacyBillingLedger. 
Note that there should only be the amount of limit or less that gets returned
*/


let ledgerGet = (limit) => {
  let combinedLedgers = [];
  let result = [[1, 2, 3, 4, 5]];
   
  combinedLedgers = combinedLedgers.concat(result[0].slice(0, limit));
   
  let legacyBillingLedger = [14, 15, 16, 17, 18, 19, 20];
   
  if (combinedLedgers.length < limit) {
    combinedLedgers = combinedLedgers.concat(
     legacyBillingLedger.map((legacy) => {
       return legacy;
     }).slice(0, limit - combinedLedgers.length)
   );
  }
  return(combinedLedgers);
}

console.log("limit = 2: ", ledgerGet(2), "should be [1, 2]")
console.log("limit = 5: ", ledgerGet(5), "should be [1, 2, 3, 14, 15]")
console.log("limit = 15: ", ledgerGet(15), "should be [1, 2, 3, 14, 15, 16, 17, 18, 19, 20]")
console.log("limit = 9: ", ledgerGet(9), "should be [1, 2, 3, 14, 15, 16, 17, 18, 19]")
console.log("limit = 0: ", ledgerGet(0), "should be []")
console.log("limit = null: ", ledgerGet(null), "should be []")
