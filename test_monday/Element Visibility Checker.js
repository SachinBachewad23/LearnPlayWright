// Element Visibility Checker

// Input: toggle these values to test different states
const isPresent = true;
const isDisplayed = true;
const isEnabled = false;

// Determine Status using strict equality and logical operators
let status;
let action;

// READY: all true
if (isPresent === true && isDisplayed === true && isEnabled === true) {
  status = "READY";
  action = "Element is ready. Proceed with interaction.";
}
// DISABLED: present + displayed but not enabled
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  status = "DISABLED";
  action = "Element is visible but disabled. Wait for enable state or check preconditions.";
}
// HIDDEN: present but not displayed
else if (isPresent === true && isDisplayed === false) {
  status = "HIDDEN";
  action = "Element is present in DOM but hidden. Wait for visibility or verify UI conditions.";
}
// NOT FOUND: not present
else if (isPresent === false) {
  status = "NOT FOUND";
  action = "Element not found. Check locator, page load, or navigation.";
} else {
  // Fallback (shouldn't occur with strict booleans)
  status = "UNKNOWN";
  action = "Unexpected state. Validate inputs and DOM conditions.";
}

// Determine Severity using a ternary operator
// CRITICAL if not present; WARNING if not displayed or not enabled; OK otherwise
const severity =
  isPresent === false
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
    ? "WARNING"
    : "OK";

// Print result
console.log(`Status: ${status} Severity: ${severity} Action: ${action}`);