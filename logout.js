document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', () => {
        // Redirect the user to the login page
        window.location.href = 'index.html';
    });
});