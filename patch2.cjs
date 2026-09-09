const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace .page-animate with .page > *
html = html.replace(/\.page \.page-animate/g, '.page > *');
html = html.replace(/\.page\.active\.visible \.page-animate/g, '.page.active.visible > *');

// Update delays
html = html.replace('.page.active.visible .hero { transition-delay: 0s; }', '.page.active.visible > *:nth-child(1) { transition-delay: 0s; }');
html = html.replace('.page.active.visible section.block:nth-child(2) { transition-delay: 0.1s; }', '.page.active.visible > *:nth-child(2) { transition-delay: 0.1s; }');
html = html.replace('.page.active.visible section.block:nth-child(3) { transition-delay: 0.2s; }', '.page.active.visible > *:nth-child(3) { transition-delay: 0.2s; }');
html = html.replace('.page.active.visible section.block:nth-child(4) { transition-delay: 0.3s; }', '.page.active.visible > *:nth-child(4) { transition-delay: 0.3s; }\n.page.active.visible > *:nth-child(5) { transition-delay: 0.4s; }\n.page.active.visible > *:nth-child(6) { transition-delay: 0.5s; }');

fs.writeFileSync('index.html', html);
