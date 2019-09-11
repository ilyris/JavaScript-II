// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.



  let counter = 0;
  const anotherFunction = () =>{
    counter++;
    console.log('Second function ' + counter);
  }

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let counter2 = 0;
  const counterFunction = () => {
    if(counter2 > 10) {
      counter2 = 1;
    }
    return counter2++;
  }
  return counterFunction;
};
const myCounter = counterMaker();

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter3 = 0;
  const counterFunction2 = () => {
    return {
      increment: function() {
        counter3++;
        return counter3;
      },
      decrement: function() {
        counter3--;
        return counter3;
      }
    };
  };
  return counterFunction2();
};

myCounter3 = counterFactory();
