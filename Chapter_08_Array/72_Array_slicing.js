let arr = [1, 2, 3, 4, 5, 6];
let sliceArray = arr.slice(1,4);
console.log(sliceArray);

console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(0));

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);
c = a.concat(b,[5,6]);
console.log(c);

//spread (modern way) - only for concatenation 
let d = [...a, ...b];
console.log(d);

//join 
let s = ["pass", "fail", "skip"].join(' = ');
console.log(s);


