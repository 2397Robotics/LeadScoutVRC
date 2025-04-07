// JavaScript to toggle the sidebar and button lines
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Toggle sidebar visibility
    menuToggle.classList.toggle('vertical'); // Toggle button line orientation
});
