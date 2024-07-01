function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(element => {
    const file = element.getAttribute('include-html');
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data;
          element.removeAttribute('include-html');
          includeHTML(); // Load nested includes
        })
        .catch(error => console.error('Error loading file:', error));
    }
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
