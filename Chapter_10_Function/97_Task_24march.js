// What is an object in JavaScript? 
// Answer: Objects in Javascript is key value pair. For example: const obj = {a: 1, b: 2, c: 3}; In this example a, b, c are keys and 1, 2, 3 are respective value of that key

// How do you access object properties?
// Answer: For example: const obj = {name: "Jenny"};
// Using method Object.getOwnPropertyDescriptor(obj, "name");

// Difference between dot and bracket notation
// Answer: const testResult = {testID: "TC01", testName: "Login", testStatus: "Pass"};
// console.log(testResult.testID); //dot notation 
// console.log(testResult['testName']); //bracket notation 

// How to add and delete properties?
// Answer: const testResult = {testID: "TC01", testName: "Login", testStatus: "Pass"};
// console.log(testResult.testID);
//delete
// delete testResult.testStatus;
// console.log(testResult);
//add
// testResult.testStatus= "failed";
// console.log(testResult);

// How to check if a property exists?
// Answer: 
// const user = {name: "Jenny", age: 30};
// console.log(Object.hasOwn(user,'name1')); 
//Object.hasOwn(object, "key") - check if the property exists or not. Return true if exist, false- otherwise

// What is Object.keys()?
// Answer: Object.keys() gives key from the object 
// For example: 
// const user = {name: "jenny", age: 30};
// console.log(Object.keys(user));

// What is Object.values()?
// Answer: Object.values() gives value from the object 
// For example: 
// const user = {name: "jenny", age: 30};
// console.log(Object.values(user));

// What is Object.entries()?
// Answer: It gives key:value pair 
// const user = {name: "jenny", age: 30};
// console.log(Object.entries(user));
//output: [ [ 'name', 'jenny' ], [ 'age', 30 ] ]

// How to loop through an object?
// Answer: const user = {name: "Jenny", age: 30};
// for(const key in user){
    // console.log(`${key}: ${user[key]}`);
// }