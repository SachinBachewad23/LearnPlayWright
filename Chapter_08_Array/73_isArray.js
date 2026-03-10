// to check arrays

let results = Array.isArray([1, 2, 3]);
console.log(results);

let arr = [200, 201, 50, 400, 400, 300];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
let result = Array.isArray(uniqueArr);
console.log(result);


//every 
let  r = uniqueArr.every(s => s > 70);
console.log(r);
r = uniqueArr.some(s => s > 70);
console.log(r);
