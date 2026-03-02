// Test Environment Config

const envName = "staging"; // change to dev | staging | qa | production | prod

let baseURL, apiKey, timeout, description;

switch (envName.toLowerCase()) {
    case "dev":
        baseURL = "https://dev-api.testingacademy.com";
        apiKey = "dev_key_xxxx-xxxx";
        timeout = 5000;
        description = "Development - Internal testing sandbox";
        break;

    case "staging":
        baseURL = "https://staging-api.testingacademy.com";
        apiKey = "stg_key_xxxx-xxxx";
        timeout = 8000;
        description = "Staging - Pre-production mirror";
        break;

    case "qa":
        baseURL = "https://qa-api.testingacademy.com";
        apiKey = "qa_key_xxxx-xxxx";
        timeout = 7000;
        description = "QA - Automated/integration testing environment";
        break;

    case "production":
    case "prod":
        baseURL = "https://api.testingacademy.com";
        apiKey = "prod_key_xxxx-xxxx";
        timeout = 10000;
        description = "Production - Live customer environment";
        break;

    default:
        baseURL = "N/A";
        apiKey = "N/A";
        timeout = 0;
        description = "Unknown environment. Check configuration.";
}

// Print environment config
console.log(
`Environment: ${envName.toUpperCase()}
Base URL: ${baseURL}
API Key: ${apiKey}
Timeout: ${timeout}ms
Description: ${description}`
);