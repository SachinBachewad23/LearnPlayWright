function getExecutionPlan(allBrowsers, blockedBrowsers) {
  // Filter for browsers not in the blocked list
  const runnable = allBrowsers.filter(b => !blockedBrowsers.includes(b));
  
  // Filter for browsers that are in the blocked list
  const blocked = allBrowsers.filter(b => blockedBrowsers.includes(b));

  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return { runnable, blocked, plan };
}

// Example Usage:
const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

console.log(getExecutionPlan(allBrowsers, blockedBrowsers));
