// ===== Sticky Header on Scroll =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
});

// ===== Smooth Scroll for Nav Links =====
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== Mobile Navigation Toggle =====
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;';
document.querySelector('header .container').appendChild(navToggle);
navToggle.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});

// ===== Optional: Dark/Light Mode Toggle =====
const themeToggle = document.createElement('button');
themeToggle.innerText = '🌙';
themeToggle.classList.add('theme-toggle');
document.querySelector('header .container').appendChild(themeToggle);
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
