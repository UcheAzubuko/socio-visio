const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  // CHANGE THE THEME OF THE WEBSITE
  document.body.classList.toggle('light');
});