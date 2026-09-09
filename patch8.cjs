const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace .service-card-v2 CSS
const oldCSS = `.service-card-v2:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-5px);
}
.service-card-v2 .sc-title {
  font-size: 22px;
  color: var(--blue-deep);
  font-weight: 700;
  padding-bottom: 16px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  border-bottom: 2px solid var(--blue-brand);
  display: inline-block;
  width: 100%;
}
.service-card-v2 .sc-desc {
  font-size: 15px;
  color: var(--gray);
  line-height: 1.8;
  z-index: 2;
  position: relative;
}
.service-card-v2 .sc-watermark {
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 160px;
  height: 160px;
  color: var(--blue-verylight);
  z-index: 1;
  opacity: 0.6;
}
.service-card-v2 .sc-watermark svg {
  width: 100%;
  height: 100%;
}
.service-card-v2 .sc-action {
  margin-top: auto;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--white-cool);
  width: fit-content;
  font-size: 14.5px;
  color: var(--blue-deep);
  font-weight: 600;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.service-card-v2:hover .sc-action {
  color: var(--blue-brand);
  border-color: var(--blue-brand);
}
.service-card-v2.highlight {
  background: var(--blue-deep);
  color: #ffffff;
  border-color: var(--blue-deep);
}
.service-card-v2.highlight .sc-title {
  color: #ffffff;
  border-bottom-color: transparent;
}
.service-card-v2.highlight .sc-desc {
  color: rgba(255,255,255,0.9);
}
.service-card-v2.highlight .sc-watermark {
  color: rgba(255,255,255,0.05);
}
.service-card-v2.highlight .sc-action {
  color: #ffffff;
  border-bottom-color: #ffffff;
}`;

const newCSS = `.service-card-v2 {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.service-card-v2 .sc-title {
  font-size: 22px;
  color: var(--blue-deep);
  font-weight: 700;
  padding-bottom: 16px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  border-bottom: 2px solid var(--blue-brand);
  display: inline-block;
  width: 100%;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.service-card-v2 .sc-desc {
  font-size: 15px;
  color: var(--gray);
  line-height: 1.8;
  z-index: 2;
  position: relative;
  transition: color 0.3s ease;
}
.service-card-v2 .sc-watermark {
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 160px;
  height: 160px;
  color: var(--blue-verylight);
  z-index: 1;
  opacity: 0.6;
  transition: color 0.3s ease;
}
.service-card-v2 .sc-watermark svg {
  width: 100%;
  height: 100%;
}
.service-card-v2 .sc-action {
  margin-top: auto;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--white-cool);
  width: fit-content;
  font-size: 14.5px;
  color: var(--blue-deep);
  font-weight: 600;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.service-card-v2:hover {
  background: var(--blue-brand);
  border-color: var(--blue-brand);
  box-shadow: var(--shadow-md);
  transform: translateY(-5px);
}
.service-card-v2:hover .sc-title {
  color: #ffffff;
  border-bottom-color: transparent;
}
.service-card-v2:hover .sc-desc {
  color: rgba(255,255,255,0.9);
}
.service-card-v2:hover .sc-watermark {
  color: rgba(255,255,255,0.1);
}
.service-card-v2:hover .sc-action {
  color: #ffffff;
  border-bottom-color: #ffffff;
}`;

html = html.replace(oldCSS, newCSS);

// Remove the `isFirst ? 'highlight' : ''` logic from JS
html = html.replace(
`    const isFirst = index === 0;
    return \`
    <div class="service-card-v2 \${isFirst ? 'highlight' : ''}" onclick="goCategory('\${key}')">`,
`    return \`
    <div class="service-card-v2" onclick="goCategory('\${key}')">`
);

fs.writeFileSync('index.html', html);
console.log('Patched service cards V2');
