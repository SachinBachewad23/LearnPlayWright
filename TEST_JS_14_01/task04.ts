//TASK4:
//Implement interfaces in classes

import { test1 } from "./Task_14_april";

export interface TESTCASE
{
    testname: string;
    getStatus(): string;
    duration: number;
    getreport(): void;
    
}

export class test implements TESTCASE
{
    testname: string;
    duration: number;
    constructor(testname: string, duration: number)
    {
        this.testname = testname;
        this.duration = duration;
    }
    
    getStatus(): string
    {
        return "Status for : "+this.testname+" is : "+ "PASS";
    }
    
    getreport(): void
    {
        console.log("TestName --> "+this.testname+", duration : "+this.duration);
    }
}
console.log(test1.getStatus());
test1.getreport();
