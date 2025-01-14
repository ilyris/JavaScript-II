// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

 function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

 const challenge1 = getLength(items, () => items.length);
function getLength(array,cb) {
  // getLength passes the length of the array into the callback.
  return cb(array.length);
}
console.log(challenge1);

// const challenege2 = last(items, () => items.pop());
// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr.pop());
// }
// console.log(challenege2);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
function callbackChallenege3(x,y) {
  return x + y;
}
const challenege3 = sumNums(2,3, callbackChallenege3);
console.log(challenege3);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
const challenge4 = multiplyNums(2, 5, (x,y) => x * y );
console.log(challenge4);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
return cb(item, list);
}
const challenge5 = contains('Gum', items, (item, list) => list.includes(item));

// function checkIfItemExists(value, array) {
//   return array.includes(value);
// }

console.log(challenge5);

// items.forEach((item) => {
//   console.log(item);
// });

/* STRETCH PROBLEM */


const duppedArray = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Pencil', 'Notebook', 'yo-yo', 'Gum']

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

// Using Set and the spread operator to push the values of the array in, but with the Set data type, only unique values can be used, hence why this is PERFECT for removing duplicates
// const purgedArray = removeDuplicates(duppedArray, (array) => {
//   // let uniqueArray = [...new Set(array)];
//   return uniqueArray;
// });

// Failed Attempt at trying to do this inline.
// const purgedArray = removeDuplicates(duppedArray, (array) => {
//   console.log(array);
//   array.filter( (products, index) => array.indexOf(products) === index);
// });

// Decided to create a new function instead of using the inline callback so my mind could follow a little bity more.
// Here I found that we can use indexOf when filtering to check the position of the array elements, if the element was a certain index, when it passes a duplicate it won't store it as it has already seen that it was in the array earlier.

function purgedArray(array) {
  let uniqueArray = array.filter( (products, index) => array.indexOf(products) == index );
  return uniqueArray;
}
const purgedArrayNew = removeDuplicates(duppedArray, purgedArray);
console.log(purgedArrayNew);
