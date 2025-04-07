// filepath: c:\Users\Minsung\Downloads\LeadScout\sidebar.js
// JavaScript to toggle the sidebar and button lines
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Toggle sidebar visibility
    menuToggle.classList.toggle('vertical'); // Toggle button line orientation
});

// Log out function
function logout() {
    localStorage.removeItem('user'); // Remove user data from localStorage
    window.location.href = 'logout.html'; // Redirect to logout confirmation page
}
