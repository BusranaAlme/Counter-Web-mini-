// Initialize counter value
let counterValue = 0;

// Get DOM elements
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// Update the counter display
function updateCounter() {
  counterDisplay.textContent = `Counter = ${counterValue}`;
}

// Add event listener for increment button
incrementButton.addEventListener("click", () => {
  counterValue++; // Increment the counter
  updateCounter(); // Update display
});

// Add event listener for decrement button
decrementButton.addEventListener("click", () => {
  counterValue--; // Decrement the counter
  updateCounter(); // Update display
});
