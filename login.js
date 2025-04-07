// JavaScript for form validation and user login
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
        alert('No user found. Please sign up first.');
        return;
    }

    // Validate email and password
    if (storedUser.email === email && storedUser.password === password) {
        alert('Login successful! Welcome back to LeadScout.');
        loginForm.reset(); // Clear the form
        // Redirect to a dashboard or home page (if applicable)
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
