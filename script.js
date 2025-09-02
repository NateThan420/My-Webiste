document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the values from the input fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Define a simple, hardcoded set of valid credentials
        const validUsername = 'admin';
        const validPassword = 'password123';

        // Check if the entered credentials match
        if (username === validUsername && password === validPassword) {
            // Successful login: redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            // Failed login: show an alert
            alert('Invalid username or password. Please try again.');
        }
    });
});
