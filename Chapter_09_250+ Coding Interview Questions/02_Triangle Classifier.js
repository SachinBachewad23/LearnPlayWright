function classifyTriangle(a, b, c) {
  // First, check if the sides form a valid triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a valid triangle";
  }

  // Classify the triangle
  if (a === b && b === c) {
    return "Equilateral triangle";
  } else if (a === b || b === c || a === c) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  }
}

// Test cases
console.log(classifyTriangle(5, 5, 5));   // Equilateral
console.log(classifyTriangle(5, 5, 3));   // Isosceles
console.log(classifyTriangle(4, 5, 6));   // Scalene
console.log(classifyTriangle(1, 2, 3));   // Not a valid triangle
