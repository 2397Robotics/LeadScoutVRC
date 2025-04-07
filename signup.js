// JavaScript for form validation and sending user data to the server
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
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

    // Prepare user data
    const userData = {
        teamNumber,
        email,
        password
    };

    try {
        // Send user data to the server
        const response = await fetch('https://2397robotics.com/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Signup successful! You can now log in.');
            signupForm.reset(); // Clear the form
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            const error = await response.json();
            alert(`Signup failed: ${error.message}`);
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again later.');
    }
});
