// Bug Severity Classifier

let frequency = "always";   // change for testing
let impact = "blocker";     // change for testing

let severity = "";

// Nested if-else based on classification matrix
if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0 - Critical: Stop release immediately";
    } else if (impact === "major") {
        severity = "P1 - High: Must fix before release";
    } else if (impact === "minor") {
        severity = "P2 - Medium: Fix soon but not blocking";
    }

} else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1 - High: Must fix before release";
    } else if (impact === "major") {
        severity = "P2 - Medium: Fix soon";
    } else if (impact === "minor") {
        severity = "P3 - Low: Fix when possible";
    }

} else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2 - Medium: Monitor + fix";
    } else if (impact === "major") {
        severity = "P3 - Low: Non-blocking";
    } else if (impact === "minor") {
        severity = "P4 - Very Low: Cosmetic";
    }
}

console.log(
`Bug Title: Checkout page crashes on applying coupon
Frequency: ${frequency}
Impact: ${impact}
Severity: ${severity}`
);