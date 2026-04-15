function normalizeError(rawMessage) {
  // Trim edges, lowercase, and replace multiple spaces with one
  const normalized = rawMessage.trim().toLowerCase().replace(/\s+/g, ' ');

  let category = "GENERAL";
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  }

  console.log(`Normalized: ${normalized} Category: ${category}`);
}

// Example Usage:
normalizeError("   Locator   not found after   TIMEOUT  ");

