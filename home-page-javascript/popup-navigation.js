
const menuIcon = document.querySelector('.menu-icon-container');
const menuPopup = document.getElementById('menu-popup');
const closeBtn = document.querySelector('.close-btn');

menuIcon.addEventListener('click', () => {
  menuPopup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  menuPopup.classList.add('hidden');
});

// Optional: close when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === menuPopup) {
    menuPopup.classList.add('hidden');
  }
});

