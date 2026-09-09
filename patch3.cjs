const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('--blue-deep: #0A2A47;', '--blue-deep: #1E3A8A;');
html = html.replace('--blue-dark: #0F3A63;', '--blue-dark: #1D4ED8;');
html = html.replace('--blue-brand: #1B5FA8;', '--blue-brand: #2563EB;');
html = html.replace('--blue-medium: #2F86C6;', '--blue-medium: #3B82F6;');
html = html.replace('--blue-light: #5CC2E6;', '--blue-light: #60A5FA;');
html = html.replace('--blue-verylight: #EAF4FB;', '--blue-verylight: #EFF6FF;');
html = html.replace('--white-cool: #F5F8FA;', '--white-cool: #F8FAFC;');
html = html.replace('--gray: #5B6B7A;', '--gray: #475569;');
html = html.replace('--gray-dark: #2C3E50;', '--gray-dark: #334155;');
html = html.replace('--gray-light: #94A3B1;', '--gray-light: #94A3B8;');
html = html.replace('--border: #D8E2EC;', '--border: #E2E8F0;');
html = html.replace('--border-dark: #B5C6D8;', '--border-dark: #CBD5E1;');

fs.writeFileSync('index.html', html);
