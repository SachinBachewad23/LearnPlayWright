function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}...`);
  
  try {
    // Execute the callback and store the result
    const result = actionFn();
    return { 
      stepName, 
      passed: true, 
      message: result 
    };
  } catch (error) {
    // Catch errors and return the failure status
    return { 
      stepName, 
      passed: false, 
      message: error.message 
    };
  }
}

// Example Usage:
const pass = runStep("open dashboard", () => "Page loaded");
const fail = runStep("click button", () => { throw new Error("Element not found"); });

console.log(pass);
console.log(fail);
