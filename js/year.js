// Get the current date
const currentDate = new Date();

// Define the birthdate as August 7th of the current year
const birthdate = new Date(currentDate.getFullYear(), 7 - 1, 7);

// Calculate the age
let age = currentDate.getFullYear() - 2007;

// Check if the current date is before the birthdate
if (currentDate < birthdate) {
  age--;
}

// Find the div element with id "Age" and update its content with the age
const ageDiv = document.getElementById("Age");
ageDiv.textContent = age.toString(); // Display the age as a string
