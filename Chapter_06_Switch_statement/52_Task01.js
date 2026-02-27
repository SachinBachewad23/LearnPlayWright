let a=6, b=5, c=8;

if(a===b && b===c){
    console.log("Triangle is equilateral");
}
else if (a===b || b===c || a===c){
    console.log("Triangle is isosceles");
}
else{
    console.log("Triangle is scalene");
}