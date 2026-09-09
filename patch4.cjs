const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove hardcoded visible
html = html.replace('<section class="page active visible" id="page-home">', '<section class="page active" id="page-home">');

// Add to initial load
html = html.replace('// Initial trigger for load', `// Initial trigger for load
const hash = window.location.hash.replace('#', '');
if (!hash) {
  setTimeout(() => {
    const p = document.getElementById('page-home');
    if (p) p.classList.add('visible');
  }, 50);
}`);

fs.writeFileSync('index.html', html);
