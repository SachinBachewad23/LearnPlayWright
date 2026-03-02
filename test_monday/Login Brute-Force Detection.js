// Login Brute-Force Detection

const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

var failedAttempts = 0; // global counter

const attempts = ["wrong", "wrong", "wrong", "correct"]; // sample input

let index = 0;

do {
    let attempt = attempts[index];  // loop variable

    if (failedAttempts >= MAX_ATTEMPTS) {
        console.log(`Attempt ${index + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    } else {
        if (attempt === "correct" &&
            VALID_EMAIL === "admin@testingacademy.com" &&
            VALID_PASSWORD === "Test@1234") {

            console.log(`Attempt ${index + 1}: ✅ SUCCESS - Logged in`);
            break; // login successful → stop processing
        } else {
            failedAttempts++;

            console.log(`Attempt ${index + 1}: ❌ FAILED - Strike ${failedAttempts}/${MAX_ATTEMPTS}`);

            if (failedAttempts === MAX_ATTEMPTS) {
                console.log(`🚨 ACCOUNT LOCKED`);
            }
        }
    }

    index++;
} while (index < attempts.length);