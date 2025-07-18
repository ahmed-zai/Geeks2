document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const formData = {
    firstName: firstName,
    lastName: lastName
  };

  const jsonOutput = JSON.stringify(formData, null, 2); // Pretty print
  document.getElementById("output").textContent = jsonOutput;
});
