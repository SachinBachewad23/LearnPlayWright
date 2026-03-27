let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging"));
console.log(url.startsWith("https"));
console.log(url.endsWith("/dashboard"));


let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status1 = log.match(/Status: (\d+)/)[1];
console.log(status1);

let env = "staging"; let module = "auth"; let count = 7;
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId);

let testUrl = "https://app.com/search?query=login&page=2&sort=asc";
let params = Object.fromEntries(testUrl.split("?")[1].split("&").map(p => p.split("=")));
console.log(params);