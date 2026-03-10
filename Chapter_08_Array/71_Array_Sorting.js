//sorting

let fruits = ["Banana", "Orange", "Cherry", "Apple"];
fruits.sort();
console.log(fruits);



//Sorting is don ealphabetical by default
// it compare first letter of all the elements 

let nums = [10, 1, 21, 2];
nums.sort(); //sorting by considering it as string, compare first digital only 
console.log(nums); 

nums.sort((a,b) => a - b);  //ascending order
console.log(nums);

nums.sort((a,b) => b - a); //decending order
console.log(nums);