const loginForm = document.querySelector('form');
const loginBtn = document.querySelector('button[type="submit"]');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');

  if (emailInput.value && passwordInput.value) {
    alert('Login successfull!');
    window.location.href='gallery.html'
  } else {
    alert('Please fill in both email and password!');
  }
});
