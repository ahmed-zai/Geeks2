// Retrieve the form and log it
const form = document.querySelector('form');
console.log('Form:', form);

// Retrieve inputs by ID and log them
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log('First Name Input:', firstNameInput);
console.log('Last Name Input:', lastNameInput);

// Retrieve inputs by name and log them
const inputsByName = document.querySelectorAll('input[name]');
inputsByName.forEach(input => console.log('Input by name:', input));

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents the page from refreshing

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  // Check if inputs are not empty
  if (firstName === '' || lastName === '') {
    alert('Both fields are required!');
    return;
  }

  // Create list items and append them to the UL
  const ul = document.querySelector('.usersAnswer');
  ul.innerHTML = ''; // Clear previous results if needed

  const li1 = document.createElement('li');
  li1.textContent = firstName;
  ul.appendChild(li1);

  const li2 = document.createElement('li');
  li2.textContent = lastName;
  ul.appendChild(li2);
});
