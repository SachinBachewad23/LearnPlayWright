function generateSummary(results) {
  const summary = results.reduce((acc, step) => {
    // Increment counts based on status
    acc[step.status]++;
    // Sum the total duration
    acc.totalDuration += step.durationMs;
    // Track names of failed steps
    if (step.status === "failed") {
      acc.failedNames.push(step.name);
    }
    return acc;
  }, { passed: 0, failed: 0, skipped: 0, totalDuration: 0, failedNames: [] });

  console.log(
    `Total Steps: ${results.length} ` +
    `Passed: ${summary.passed} ` +
    `Failed: ${summary.failed} ` +
    `Skipped: ${summary.skipped} ` +
    `Total Duration: ${summary.totalDuration}ms ` +
    `Failed Steps: ${summary.failedNames.join(", ")}`
  );
}

// Example Usage:
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

generateSummary(results);
