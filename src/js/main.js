// Add event listener to nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Add active class to clicked link
    link.classList.add('active');
    // Remove active class from other links
    navLinks.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
  });
});
