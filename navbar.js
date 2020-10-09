fetch('navbar.html')
  .then(data => data.text())
  .then(html => document.getElementById('navbar-load').innerHTML = html);
