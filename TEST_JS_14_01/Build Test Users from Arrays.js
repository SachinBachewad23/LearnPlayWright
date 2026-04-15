function buildTestUsers(names, roles) {
  return names.map((name, index) => {
    // Convert name to lowercase and replace spaces with underscores
    const username = name.toLowerCase().replace(/\s+/g, '_');
    
    return {
      username: username,
      email: `${username}@playwrightbatch.com`,
      role: roles[index]
    };
  });
}

// Example usage:
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = buildTestUsers(names, roles);
console.log(users);
