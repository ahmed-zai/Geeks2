// Select the form and inputs
const form = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const volumeInput = document.getElementById('volume');

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const radius = parseFloat(radiusInput.value);

  // Check if radius is a valid number
  if (isNaN(radius) || radius < 0) {
    alert('Please enter a valid positive number for the radius.');
    return;
  }

  // Calculate the volume of a sphere: V = (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Set the result to the volume input (rounded to 2 decimals)
  volumeInput.value = volume.toFixed(2);
});
