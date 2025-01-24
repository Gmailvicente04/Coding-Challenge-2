//Task 1: Working with Arrays
// Step 1: Declare an array and initialize it with at least five product names
let products = ["BMW", "Porsche", "Nissan", "Volvo", "Audi"];

// Step 2: Add a new product to the array
products.push("BMW");

// Step 3: Remove the last product from the array
products.pop();

// Step 4: Log the updated product list to the console
console.log("Updated product list:", products);


// Task 2: Accessing and Modifying Arrays
// Scenario: Student Scores

// Step 1: Declare an array with at least five numerical values
let scores = [80, 89, 75, 94, 83];

// Step 2: Update the second score in the array
scores[1] = 91;

// Step 3: Calculate the average of all scores
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Step 4: Log the updated array and the average score to the console
console.log("Updated scores:", scores);
console.log("Average score:", average);
