// Load the Stytch SDK
const stytch = new Stytch(STYTCH_PUBLIC_API_KEY, STYTCH_SECRET_API_KEY);

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
