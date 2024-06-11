// JavaScript for header behavior

// Get the header element
const header = document.querySelector('header');

// Get the hero section element
const heroSection = document.querySelector('.hero-section');

// Get the height of the header
const headerHeight = header.offsetHeight;

// Function to toggle header visibility
function toggleHeaderVisibility() {
  if (window.scrollY > headerHeight) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
}

// Add event listener for scrolling
window.addEventListener('scroll', toggleHeaderVisibility);

// Function to handle hero section hover
function handleHeroHover(event) {
  if (event.type === 'mouseover') {
    header.classList.remove('hide');
  } else if (event.type === 'mouseout') {
    toggleHeaderVisibility();
  }
}

// Add event listeners for hero section hover
heroSection.addEventListener('mouseover', handleHeroHover);
heroSection.addEventListener('mouseout', handleHeroHover);
