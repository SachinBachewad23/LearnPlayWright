// =============================
// MINI TEST SUITE RUNNER
// =============================

// Test Cases Input
const testCases = [
  { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
  { name: "Loose match works", actual: "5", expected: 5, type: "looseEqual" },
  { name: "Type check number", actual: 100, expected: "number", type: "typeCheck" },
  { name: "Truthy check", actual: "hello", expected: true, type: "truthy" },
  { name: "Less than threshold", actual: 450, expected: 500, type: "lessThan" }
];

// Global Counters (var)
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// Utility function to execute comparison logic
function runComparison(test) {
  switch (test.type) {
    case "strictEqual":
      return test.actual === test.expected;

    case "looseEqual":
      return test.actual == test.expected;

    case "typeCheck":
      return typeof test.actual === test.expected;

    case "truthy":
      return (test.actual ? true : false) === test.expected;

    case "lessThan":
      return test.actual < test.expected;

    default:
      throw new Error(`Unknown comparison type: ${test.type}`);
  }
}

// ============ RUN TESTS (for loop) ============
console.log("============= EXECUTING TEST SUITE =============");

for (let i = 0; i < testCases.length; i++) {
  let test = testCases[i];
  let resultMsg = "";
  let passed = false;

  try {
    passed = runComparison(test);

    if (passed) {
      passCount++;
      resultMsg = `PASS (${test.actual} === ${test.expected})`;
    } else {
      failCount++;
      resultMsg = `FAIL (${test.actual} !== ${test.expected})`;
    }

  } catch (e) {
    errorCount++;
    resultMsg = `ERROR (${e.message})`;
  }

  const tcNum = String(i + 1).padStart(2, "0");
  const icon = passed ? "✅" : (resultMsg.startsWith("ERROR") ? "⚠️" : "❌");

  console.log(`${icon} TC-${tcNum}: ${test.name} → ${resultMsg}`);
}

// ============ CONSECTIVE PASSES (while loop) ============
let index = 0;
let consecutivePasses = 0;

while (index < testCases.length) {
  try {
    if (runComparison(testCases[index])) {
      consecutivePasses++;
      index++;
    } else {
      break;
    }
  } catch {
    break;
  }
}

// ============ FIND FIRST FAILURE (do...while loop) ============
let failIndex = -1;
let j = 0;

do {
  if (!runComparison(testCases[j])) {
    failIndex = j;
    break;
  }
  j++;
} while (j < testCases.length);

// ============ SUMMARY REPORT ============
const total = testCases.length;
const passRate = ((passCount / total) * 100).toFixed(2);
const overallStatus = passCount === total ? "✅ PASSED" : "❌ FAILED";

// Nullish coalescing example
const firstFailTC = failIndex >= 0 ? testCases[failIndex].name : "None";

console.log("\n============= TEST SUITE SUMMARY =============");

console.log(`Total Tests: ${total}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Consecutive Passes From Start: ${consecutivePasses}`);
console.log(`First Failure: ${firstFailTC ?? "N/A"}`);
console.log(`Overall: ${overallStatus}`);

console.log("===============================================");