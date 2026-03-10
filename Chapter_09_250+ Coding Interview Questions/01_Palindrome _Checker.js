function isPalindrome(input) {
  // Normalize: keep only letters and numbers, make lowercase
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');

  if (cleaned === reversed) {
    return true;
  } else {
    return false;
  }
}

// Examples
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome("No 'x' in Nixon"));                 // true



