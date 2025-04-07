// JavaScript for form validation and storing user data
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const teamNumber = document.getElementById('team-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!teamNumber || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    if (isNaN(teamNumber)) {
        alert('Team number must be a valid number.');
        return;
    }

    // Store user data in localStorage
    const userData = {
        teamNumber,
        email,
        password
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Signup successful! You can now log in.');
    signupForm.reset(); // Clear the form
    window.location.href = 'login.html'; // Redirect to login page
});
