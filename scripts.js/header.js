// Select elements
const header = document.querySelector('header');
const featuredProject = document.querySelector('.all_featured_Project');

// Calculate trigger point
let triggerPoint = featuredProject.offsetTop - header.offsetHeight;

// Recalculate trigger point on resize
window.addEventListener('resize', () => {
  triggerPoint = featuredProject.offsetTop - header.offsetHeight;
});

// Add scroll listener
window.addEventListener('scroll', () => {
  if (window.scrollY >= triggerPoint) {
    header.classList.add('normal');
  } else {
    header.classList.remove('normal');
  }
});



