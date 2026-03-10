// Exercise 2 — Spot the Bug
// What is wrong with this code? Fix it.



let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort(); //[1200, 320, 450, 85, 99]
console.log("Fastest:", sorted[0]); //1200

// Not a bug but in the code problem is about sorting. It is comparing first digit of all the number.
// Hence, generate wrong output. 