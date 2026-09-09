const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('.logo img {\n  height: 38px; width: auto; object-fit: contain; border-radius: 2px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);\n  transition: transform .2s ease, box-shadow .2s ease;\n}',
'.logo img {\n  height: 44px; width: auto; object-fit: contain;\n  transition: transform .2s ease;\n}');
html = html.replace('.logo:hover img {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);\n}',
'.logo:hover img {\n  transform: translateY(-1px) scale(1.02);\n}');

fs.writeFileSync('index.html', html);
