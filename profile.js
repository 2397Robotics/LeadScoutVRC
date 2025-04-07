// JavaScript to handle profile icon behavior
const profileIcon = document.createElement('div');
profileIcon.classList.add('profile-icon');
profileIcon.innerHTML = `<img id="profile-picture" src="anonymous.png" alt="Profile Picture">`;
document.body.appendChild(profileIcon);

const profilePicture = document.getElementById('profile-picture');

// Check if the user is logged in
const storedUser = JSON.parse(localStorage.getItem('user'));
if (storedUser && storedUser.email) {
    // User is logged in, set profile picture to a user image
    profilePicture.src = 'user-profile.png'; // Replace with the actual user profile picture URL
    profileIcon.addEventListener('click', () => {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    });
} else {
    // User is not logged in, set profile picture to anonymous
    profilePicture.src = 'anonymous.png'; // Replace with the anonymous profile picture URL
    profileIcon.addEventListener('click', () => {
        window.location.href = 'login.html'; // Redirect to login page
    });
}
