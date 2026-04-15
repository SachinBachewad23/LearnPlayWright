//TASK3: 
//Extend interfaces for inheritance (eg: page object model)

interface BasePage
{
    url: string;
    title: string;
}

interface loginPage extends BasePage
{
    usernameSelector: string;
    passwordSelector: string;
    LoginButton: string;
}

interface freeTrialPage extends BasePage
{
    usernameSelector: string;
    submitButton: string;
}

let LP: loginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    LoginButton: "#login-btn"
}

let FP: freeTrialPage = {
    url: "/FreeTrial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButton: "#submit"
}

console.log("LoginPage : "+LP.url);
console.log("LoginPage : "+LP.title);
console.log("LoginPage : "+LP.usernameSelector);
console.log("LoginPage : "+LP.passwordSelector);
console.log("LoginPage : "+LP.LoginButton);
console.log("------------------------");
console.log("LoginPage : "+FP.url);
console.log("LoginPage : "+FP.title);
console.log("LoginPage : "+FP.usernameSelector);
console.log("LoginPage : "+FP.submitButton);

