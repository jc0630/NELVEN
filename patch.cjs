const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add border-radius to components
html = html.replace('.btn {', '.btn {\n  border-radius: var(--radius-sm);');
html = html.replace('.nav-link.cta-nav {', '.nav-link.cta-nav {\n  border-radius: var(--radius-sm);');
html = html.replace('.dropdown-menu {', '.dropdown-menu {\n  border-radius: var(--radius-md); overflow: hidden;');
html = html.replace('.dropdown-sub {', '.dropdown-sub {\n  border-radius: var(--radius-md); overflow: hidden;');
html = html.replace('.img-box {', '.img-box {\n  border-radius: var(--radius-md);');
html = html.replace('.img-badge {', '.img-badge {\n  border-radius: var(--radius-sm);');
html = html.replace('.service-card-v2 {', '.service-card-v2 {\n  border-radius: var(--radius-lg);');
html = html.replace('.flip-face {', '.flip-face {\n  border-radius: var(--radius-lg);');
html = html.replace('.arrow-card {', '.arrow-card {\n  border-radius: var(--radius-lg);');
html = html.replace('.product-card {', '.product-card {\n  border-radius: var(--radius-lg);');
html = html.replace('.tag {', '.tag {\n  border-radius: var(--radius-sm);');
html = html.replace('.capability-item {', '.capability-item {\n  border-radius: var(--radius-md);');
html = html.replace('.highlight-box {', '.highlight-box {\n  border-radius: var(--radius-lg);');
html = html.replace('.process-step {', '.process-step {\n  border-radius: var(--radius-md);');
html = html.replace('.process-step .step-num {', '.process-step .step-num {\n  border-radius: 50%;');
html = html.replace('.co-img-wrap img {', '.co-img-wrap img {\n  border-radius: var(--radius-lg);');
html = html.replace('.client-face {', '.client-face {\n  border-radius: var(--radius-lg);');
html = html.replace('.contact-info-block {', '.contact-info-block {\n  border-radius: var(--radius-lg);');
html = html.replace('.map-embed {', '.map-embed {\n  border-radius: var(--radius-lg); overflow: hidden;');
html = html.replace('.form-card {', '.form-card {\n  border-radius: var(--radius-lg);');
html = html.replace('.field input, .field select, .field textarea {', '.field input, .field select, .field textarea {\n  border-radius: var(--radius-sm);');
html = html.replace('.logo-tile {', '.logo-tile {\n  border-radius: var(--radius-md);');
html = html.replace('.line-float {', '.line-float {\n  border-radius: 50%;');
html = html.replace('.line-toast {', '.line-toast {\n  border-radius: var(--radius-md);');

// Page entry animation
html = html.replace('.page { display: none; opacity: 0; transform: translateY(15px); transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }', 
`.page { display: none; }
.page.active { display: block; }
.page .page-animate { opacity: 0; transform: translateY(20px); transition: opacity 0.8s var(--ease-spring), transform 0.8s var(--ease-spring); }
.page.active.visible .page-animate { opacity: 1; transform: translateY(0); }
/* Staggering */
.page.active.visible .hero { transition-delay: 0s; }
.page.active.visible section.block:nth-child(2) { transition-delay: 0.1s; }
.page.active.visible section.block:nth-child(3) { transition-delay: 0.2s; }
.page.active.visible section.block:nth-child(4) { transition-delay: 0.3s; }
`);
// Remove old .page.active and .page.active.visible
html = html.replace('.page.active { display: block; }\n.page.active.visible { opacity: 1; transform: translateY(0); }', '');

fs.writeFileSync('index.html', html);
