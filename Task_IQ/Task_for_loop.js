//print hello 5 times

for(let i=0;i<5;i++){
    console.log("Hello");
}

//print the numbers from 1 to 10

for(let i =1;i<=10;i++){

    console.log(i);
}

// Print even numbers from 1 to 20
for(let j =1;j<=20;j++){
    if(j%2 === 0){
        console.log(j);
    }
}

//Print the sum of first 10 natural numbers

let sum =0;
for(let k=1;k<=10;k++){
    sum += k;
}
console.log("Sum:",sum);

//Print the multiplication table of 5

let num = 5;
for(let i =1; i<=10;i++){

    console.log(num ,"*" , i,":", num*i);
}