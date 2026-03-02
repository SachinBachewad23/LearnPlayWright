// Response Time SLA Analyzer

const responseTimes = [120, 230, 450, 510, 180, 620]; // input array (ms)
const SLA_LIMIT = 500; // threshold in ms

let i = 0;
let total = responseTimes.length;

if (total === 0) {
  console.log("No requests to analyze.");
} else {
  // Initialize min and max with the first element
  let min = responseTimes[0];
  let max = responseTimes[0];
  let sum = 0;
  let breaches = 0;

  // Analyze using a while loop
  while (i < total) {
    const rt = responseTimes[i];

    // Track min/max using comparison operators
    if (rt < min) min = rt;
    if (rt > max) max = rt;

    sum += rt;

    // SLA breach if response time > SLA_LIMIT
    if (rt > SLA_LIMIT) {
      breaches++;
    }

    i++;
  }

  const avg = sum / total;
  const breachPercent = ((breaches / total) * 100).toFixed(2);
  const status = breaches > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";

  // Print report
  console.log(`Total Requests: ${total} Min Response: ${min}ms Max Response: ${max}ms SLA Breaches: ${breaches} (${breachPercent}%) Overall Status: ${status}`);
}