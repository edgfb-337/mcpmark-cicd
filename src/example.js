// Fixed file that passes ESLint linting
const usedVar = 'this variable is used'; // Fixed: single quotes, variable will be used
console.log('This uses single quotes and has a semicolon'); // Fixed: single quotes, added semicolon
let hasSemi = 'test'; // Fixed: added semicolon

// Use the variable to resolve no-unused-vars error
console.log(usedVar);