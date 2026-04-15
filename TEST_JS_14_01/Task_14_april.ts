

//TASk 1:
Define interfaces for user data

interface user;
{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

let user1: user = {
    id: 1,
    name: "Sachin bachewad",
    email: "sachinbachewad9492@gmail.com",
    isActive: true
}

let user2: user = {
    id: 2,
    name: "Samarth Bachewad",
    email: "samubachewad@gmail.com",
    isActive: false
}

console.log("User1: "+user1.id+" : "+ user1.name +" --> "+ user1.email+ "isActive?" + user1.isActive);

console.log("user2: "+user2.id+" : "+ user2.name +" --> "+ user2.email+ "isActive?" + user2.isActive); //
export let test1: TESTCASE = new test("Login", 3200);




