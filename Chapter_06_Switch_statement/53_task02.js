let year = 1904;
if (year%400===0 )
{
    console.log("It's a Leap Year");
}
else if (year%100===0)
{
    console.log("It's not a Leap Year");
}
else if(year%4===0 ){
    console.log("It's a Leap Year");
}
else{
    console.log("Not a Leap Year");
}