
const addJobBtn = document.getElementById('addJobBtn');
const popupForm = document.getElementById('popupForm');
const overlay = document.getElementById('overlay');
const closeFormBtn = document.getElementById('closeFormBtn');
const backBtn = document.getElementById('backBtn');

addJobBtn.addEventListener('click', () => {
    popupForm.style.display = 'flex';


    // Lock scrolling by adding a class or inline style
    document.body.style.overflow = 'hidden';

    // Show popupForm form and overlay
    overlay.style.display = 'fixed';
    popupForm.style.display = 'block';
});

// Add an event listener to unlock scrolling when clicking outside the popupForm form
overlay.addEventListener('click', () => {
    // Unlock scrolling
    document.body.style.overflow = '';

    // Hide popupForm form and overlay
    overlay.style.display = 'none';
    popupForm.style.display = 'none';
});

closeFormBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});

backBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

document.getElementById('jobForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Job added successfully!');
    popupForm.style.display = 'none';
});






