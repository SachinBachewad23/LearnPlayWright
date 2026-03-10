let original = [1, 2, 3];

// shallow copy 
let copy1 = [...original]; 
console.log(copy1);
let copy2 = original.slice();
console.log(copy2);
let copy3 = Array.from(original);
console.log(copy3);
let copy4 = original.concat();
console.log(copy4); 

original.push(99);
console.log(copy1);
console.log(original);

// Deep copy 
copy1=original;
copy1.push(100);
console.log(copy1);
console.log(original);
