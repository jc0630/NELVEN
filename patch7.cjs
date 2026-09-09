const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Radius
html = html.replace(
`  /* Lively & Professional Radius Design */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;`,
`  /* Precision Tech Radius Design (Zero Radius) */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;`
);

// 2. Heading Colors
html = html.replace(
`h1, h2, h3, h4, h5 {
  font-family: "IBM Plex Sans", "Noto Sans TC", "Segoe UI", Arial, sans-serif;
  margin: 0;
  font-weight: 700;
  letter-spacing: .01em;
}
h1 { color: var(--blue-deep); }
h2 { color: var(--blue-brand); }
h3 { color: var(--blue-dark); }
h4 { color: var(--blue-dark); }`,
`h1, h2, h3, h4, h5 {
  font-family: "IBM Plex Sans", "Noto Sans TC", "Segoe UI", Arial, sans-serif;
  margin: 0;
  font-weight: 700;
  letter-spacing: .01em;
  color: var(--blue-deep);
}`
);

// 3. Header CSS
html = html.replace(
`.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(10, 42, 71, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255,255,255,0.12);
  transition: background-color .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease);
}`,
`.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background-color .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease);
}`
);

// 4. Banner Overlay
html = html.replace(
`  background-image: linear-gradient(135deg, rgba(30,58,138,0.92) 0%, rgba(29,78,216,0.85) 50%, rgba(37,99,235,0.78) 100%), url('/assets/images/hero_banner_hazmat_1788937129400.jpg');`,
`  background-image: linear-gradient(135deg, rgba(15,44,89,0.7) 0%, rgba(10,30,60,0.6) 100%), url('/assets/images/hero_banner_hazmat_1788937129400.jpg');`
);

// 5. Flip Cards
html = html.replace(
`/* Flip Cards */
.flip-card { height: 320px; cursor: pointer; perspective: 1400px; }
.flip-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform .6s var(--ease); }
@media (hover: hover) {
  .flip-card:hover .flip-inner { transform: rotateY(180deg); }
}
.flip-card.flipped .flip-inner { transform: rotateY(180deg); }
.flip-face {
  border-radius: var(--radius-lg);
  position: absolute; inset: 0; backface-visibility: hidden; padding: 28px;
  display: flex; flex-direction: column; border: 1px solid var(--border); background: #ffffff; box-shadow: var(--shadow-sm); border-radius: 0;
}`,
`/* Flip Cards */
.flip-card { cursor: pointer; perspective: 1400px; }
.flip-inner { display: grid; width: 100%; transform-style: preserve-3d; transition: transform .6s var(--ease); }
@media (hover: hover) {
  .flip-card:hover .flip-inner { transform: rotateY(180deg); }
}
.flip-card.flipped .flip-inner { transform: rotateY(180deg); }
.flip-face {
  grid-area: 1 / 1;
  backface-visibility: hidden; padding: 28px;
  display: flex; flex-direction: column; border: 1px solid var(--border); background: #ffffff; box-shadow: var(--shadow-sm); border-radius: 0;
}`
);

fs.writeFileSync('index.html', html);
console.log('Patched phase 1');
