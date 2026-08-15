const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-newsletter]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const button = form.querySelector('button');
    const email = form.querySelector('input[type="email"]');
    if (!email?.value) return;
    const previous = button.textContent;
    button.textContent = 'You’re on the list ✦';
    button.disabled = true;
    email.disabled = true;
    setTimeout(() => {
      button.textContent = previous;
      button.disabled = false;
      email.disabled = false;
      email.value = '';
    }, 2600);
  });
});
