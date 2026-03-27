console.log("............Q1.............");
// 1. What is the output?
//a) ReferenceError b) undefined c) "Hello, Alice!" d) TypeError
//Answer: c) "Hello, Alice!"
console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`; //Hello, Alice!
}

console.log("............Q2.............");
//2. What is the output?
// a) "ok" b) "error" c) undefined d) ReferenceError
//Answer: d) ReferenceError
//console.log(getStatus(200));
//const getStatus = (code) => code >= 200 ? "ok" : "error"; //Reference error

console.log("............Q3.............");
//3 What is the output?
//a) undefined b) 0 c) null d) TypeError
//Answer: b) 0
function analyze(scores = []) {
  return scores.filter(s => s >= 70).length; //0
}
console.log(analyze());

console.log("............Q4.............");
//4 What is the output?
// a) 1 b) 2 c) 3 d) 0
// Answer: c) 3
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter()); //3

console.log("............Q5.............");
// 5. Which is a pure function? 
// a) log b) add c) getTime d) push
// Answer: b) add
function log(msg) { console.log(msg); } // impure, as it has side effect of logging to console
function add(a, b) { return a + b; } // pure, as it always returns the same output for the same inputs and has no side effects
function getTime() { return Date.now(); } // impure, as it returns different output each time it's called
function push(arr, val) { arr.push(val); return arr; }// impure, as it modifies the input array

console.log("............Q6.............");
//6 What is the output?
//a) 1 b) undefined c) 4 d) TypeError
// Answer: c) 4
function test(...args) {
  return args.length;
}
console.log(test("login", "pass", 200, true));// 4

console.log("............Q7.............");
//7 What is the output?
// a) "staging" b) undefined c) null d) TypeError
// Answer: b) undefined
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env; // undefined, as arrow functions do not have their own 'this' context and will refer to the global object, which does not have an 'env' property
  }
};
console.log(obj.getEnv()); //undefined

console.log("............Q8.............");
//8. What does this return?
// a) [2, 4, 6] b) [3, 5, 7] c) [2, 3, 4] d) [4, 6, 8]
// Answer: b) [3, 5, 7]
function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne); // [3, 5, 7], as the first map doubles the numbers to [2, 4, 6] and the second map adds one to each of those results, giving [3, 5, 7]

console.log("............Q9.............");
//9. What is the output?
// a) TypeError b) "Running: Login" c) undefined d) "name => Running: name"
//answer: b) "Running: Login"
function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));// "Running: Login"

console.log("............Q10.............");
//10. What is the output?
//a) 20 b) 30 c) 40 d) 10
// Answer: b) 30
function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer()); // 30, as the outer function defines x as 10 and the inner function defines its own x as 20. When inner() is called, it returns 20, and then the outer function adds that to its own x (10) to get a total of 30.