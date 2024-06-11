// This code is optional and can be used to display a confirmation message before logging out.

const logoutButton = document.querySelector('.button');

logoutButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to log out?')) {
    // Clear any session data or cookies here
    window.location.href = 'index.html'; // Redirect to the home page
  }
});
