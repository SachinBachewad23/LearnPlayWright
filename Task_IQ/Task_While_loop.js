// Print "Playwright" 5 times

let count = 1;
console.log("Printing Playwright 5 times");
while(count<=5){
    console.log("Playwright");
    count++;
}

// Print numbers from 1 to 10
console.log("numbers from 1 to 10:");
let num = 1;
while(num<=10){
    console.log(num);
    num++;
}

// Print even numbers from 1 to 20
console.log("printing even numbers from 1 to 20");
let a = 1;
while(a<=20){
    if(a%2 === 0){
        console.log(a);
       
    }
    a++
} 

//Calculate sum of first 10 natural numbers
let sum = 0;
let j = 1;
while(j<=10){
    sum += j;
    j++;
}
console.log("Sum of first 10 natural number:",sum);


// Print the multiplication table of 7
let num1 = 7;
let k =1;
while(k<=10){
    console.log(num1, "*", k ,":", num1*k);
    k++;
}