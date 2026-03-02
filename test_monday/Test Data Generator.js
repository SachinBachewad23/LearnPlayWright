// Test Data Generator

var userCount = 8; // global counter using var

const roles = ["admin", "editor", "viewer", "tester", "manager"]; // fixed values

for (let i = 1; i <= userCount; i++) {
    let id = `USR-${String(i).padStart(4, "0")}`;  // USR-0001 format
    let name = `TestUser_${i}`;
    let email = `testuser${i}@testingacademy.com`;

    // cycle through roles
    let role = roles[(i - 1) % roles.length];

    // every 3rd user inactive
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    console.log(`${id} | ${name} | ${email} | ${role} | ${status}`);
}