const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (Name && email && password && dob && gender && course) {
    alert('Login successful!');
  } else {
    alert('Please fill in all fields!');
  }
});
