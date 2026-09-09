const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
`.flip-inner { display: grid; width: 100%; transform-style: preserve-3d; transition: transform .6s var(--ease); }`,
`.flip-inner { display: grid; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform .6s var(--ease); }`
);

fs.writeFileSync('index.html', html);
console.log('Patched flip-inner height');
