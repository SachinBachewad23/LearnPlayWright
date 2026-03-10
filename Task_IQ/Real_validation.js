// Exercise 1 : API Response Validation
// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503];
let uniqueResponses = [... new Set(responses)];
console.log("Unique responses",uniqueResponses);

for(const response of responses){
    if(response >=200 && response <=299){
        console.log(`${response} is for successful`);
    }
    else{
        console.log(`${response} is a first unsuccess code`);
        break;
    }
}