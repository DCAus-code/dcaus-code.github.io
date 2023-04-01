// Load the Stytch SDK
const stytch = new Stytch(public-token-test-1d352d09-92da-456d-95d4-c28da91df2ce, secret-test-0LhZp71-Dxs5nVrBnJXkYFRIrjYjBGOacl8=);

// Get the login form elements
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");

// Add event listener to the login button
loginButton.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Get the email and password values from the form
  const email = emailInput.value;
  const password = passwordInput.value;
  
  // Call the Stytch login API with the email and password
  const response = await stytch.magicLink.loginOrCreate(email, password);
  
  // Check if the response was successful
  if (response.success) {
    // Redirect the user to the dashboard page
    window.location.href = "/dashboard.html";
  } else {
    // Display an error message
    alert(response.error.message);
  }
});
