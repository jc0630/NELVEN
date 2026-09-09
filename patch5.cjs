const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('.btn-primary { background: var(--blue-brand); color: #ffffff; border-color: var(--blue-brand); }', 
'.btn-primary { background: var(--blue-brand); color: #ffffff; border-color: var(--blue-brand); box-shadow: 0 4px 12px rgba(37,99,235,0.2); }');
html = html.replace('.btn-primary:hover { background: var(--blue-dark); border-color: var(--blue-dark); }',
'.btn-primary:hover { background: var(--blue-dark); border-color: var(--blue-dark); box-shadow: 0 6px 16px rgba(29,78,216,0.3); transform: translateY(-2px); }');

html = html.replace('.btn-outline { border-color: var(--blue-brand); color: var(--blue-brand); background: #ffffff; }',
'.btn-outline { border-color: var(--blue-brand); color: var(--blue-brand); background: #ffffff; box-shadow: 0 2px 8px rgba(37,99,235,0.05); }');
html = html.replace('.btn-outline:hover { background: var(--blue-verylight); border-color: var(--blue-dark); color: var(--blue-dark); }',
'.btn-outline:hover { background: var(--blue-verylight); border-color: var(--blue-dark); color: var(--blue-dark); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(37,99,235,0.1); }');

fs.writeFileSync('index.html', html);
