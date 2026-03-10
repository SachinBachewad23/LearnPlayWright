// Exercise 3 — Deep vs Shallow Copy (Tricky)
// What is the output and why? How would you fix it?
// javascript

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];   //here, it is deep copy (along with reference)
suite2[0].status = "fail";
console.log(suite1[0].status);

//here, it is deep copy (along with reference) so both are pointing to the same reference.