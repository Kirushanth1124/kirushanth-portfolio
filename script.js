const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

const savedTheme = localStorage.getItem('kirushanth-theme');
if (savedTheme === 'light') body.classList.add('light');

function updateThemeIcon() {
  themeToggle.textContent = body.classList.contains('light') ? '☾' : '☀';
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('kirushanth-theme', body.classList.contains('light') ? 'light' : 'dark');
  updateThemeIcon();
});

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
