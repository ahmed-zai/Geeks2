// Global variable to store bold items
let allBoldItems;

// Function to collect all bold <strong> elements in the paragraph
function getBoldItems() {
  allBoldItems = document.querySelectorAll('#myParagraph strong');
}

// Function to highlight bold items in blue
function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = 'blue';
  });
}

// Function to return bold items to black
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = 'black';
  });
}

// Initialize bold items
getBoldItems();

// Add event listeners for mouseover and mouseout
const paragraph = document.getElementById('myParagraph');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
