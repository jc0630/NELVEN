const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add CSS for Article format
const articleCSS = `
/* =========================================================
   CASE STUDY ARTICLE VIEW (文章形式閱讀介面)
   ========================================================= */
.article-hero {
  background: var(--white-cool);
  border-bottom: 1px solid var(--border);
  padding: 110px 0 44px;
}
.article-header-container {
  max-width: 960px;
  margin: 0 auto;
}
.article-meta-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  font-size: 13px;
  color: var(--gray);
}
.article-badge {
  background: var(--blue-brand);
  color: #ffffff;
  font-weight: 700;
  font-size: 12px;
  padding: 3px 10px;
  letter-spacing: 0.03em;
  display: inline-flex;
  align-items: center;
}
.article-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--gray);
}
.article-title {
  font-size: 32px;
  line-height: 1.35;
  color: var(--blue-deep);
  font-weight: 700;
  margin-bottom: 16px;
}
.article-lead {
  font-size: 16.5px;
  line-height: 1.75;
  color: var(--gray-dark);
  border-left: 3px solid var(--blue-brand);
  padding-left: 18px;
  margin: 0;
}
.article-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 48px;
  align-items: start;
}
@media (max-width: 991px) {
  .article-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
.article-main {
  min-width: 0;
}
.article-featured-box {
  margin-bottom: 32px;
  border: 1px solid var(--border);
  background: #ffffff;
}
.article-featured-box img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}
.article-featured-caption {
  padding: 12px 18px;
  font-size: 13px;
  color: var(--gray);
  background: var(--white-cool);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.5;
}
.article-brief-card {
  background: var(--blue-verylight);
  border: 1px solid var(--border);
  border-left: 4px solid var(--blue-brand);
  padding: 24px 28px;
  margin-bottom: 36px;
}
.article-brief-card h3 {
  font-size: 17px;
  color: var(--blue-deep);
  margin-bottom: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
.article-brief-card p {
  font-size: 15px;
  color: var(--gray-dark);
  line-height: 1.8;
  margin: 0;
}
.article-section-heading {
  font-size: 22px;
  color: var(--blue-deep);
  margin: 40px 0 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}
.article-section-heading .sec-num {
  color: var(--blue-brand);
  font-size: 18px;
  font-weight: 800;
}
.article-p {
  font-size: 15.5px;
  line-height: 1.85;
  color: var(--gray-dark);
  margin-bottom: 20px;
  text-align: justify;
}
.article-challenge-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0 30px;
}
.article-challenge-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-left: 3px solid #E53E3E;
  padding: 16px 20px;
}
.article-challenge-card h4 {
  font-size: 15.5px;
  color: var(--blue-deep);
  margin-bottom: 4px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
.article-challenge-card p {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.65;
  margin: 0;
}
.article-solution-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 20px 0 30px;
}
.article-solution-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-left: 3px solid var(--blue-brand);
  padding: 18px 20px;
}
.article-solution-card h4 {
  font-size: 16px;
  color: var(--blue-deep);
  margin-bottom: 6px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
.article-solution-card p {
  font-size: 14.5px;
  color: var(--gray);
  line-height: 1.7;
  margin: 0;
}
.article-spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin: 20px 0 32px;
}
.article-spec-item {
  background: var(--white-cool);
  border: 1px solid var(--border);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.article-spec-item h5 {
  font-size: 15.5px;
  color: var(--blue-deep);
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.4;
}
.article-spec-item p {
  font-size: 13.5px;
  color: var(--gray);
  line-height: 1.6;
  margin: 0;
}
.article-spec-item .spec-tag {
  align-self: flex-start;
  margin-top: 14px;
  font-size: 11.5px;
  font-weight: 700;
  color: var(--blue-brand);
  background: #ffffff;
  border: 1px solid var(--border);
  padding: 3px 8px;
}
.article-results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 24px 0 32px;
}
@media (max-width: 640px) {
  .article-results-grid {
    grid-template-columns: 1fr;
  }
}
.article-result-card {
  background: var(--blue-deep);
  color: #ffffff;
  padding: 22px 18px;
  text-align: center;
  border: 1px solid var(--blue-deep);
}
.article-result-card .num {
  font-size: 32px;
  font-weight: 800;
  color: var(--blue-light);
  margin-bottom: 6px;
  line-height: 1;
}
.article-result-card .txt {
  font-size: 13.5px;
  color: rgba(255,255,255,0.9);
  line-height: 1.5;
}
.article-quote-card {
  margin: 32px 0;
  padding: 26px 30px;
  background: #ffffff;
  border: 1px solid var(--border);
  border-left: 4px solid var(--blue-brand);
  font-size: 16px;
  line-height: 1.8;
  color: var(--blue-deep);
  font-weight: 600;
  font-style: normal;
}
.article-tags-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
.article-tag-chip {
  background: var(--white-cool);
  border: 1px solid var(--border);
  padding: 6px 14px;
  font-size: 13px;
  color: var(--gray);
  font-weight: 500;
}
.article-tag-chip:hover {
  border-color: var(--blue-brand);
  color: var(--blue-brand);
}
.sidebar-sticky {
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.sidebar-card {
  background: #ffffff;
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}
.sidebar-card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--blue-deep);
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--border);
  font-size: 13.5px;
}
.sidebar-row:last-child {
  border-bottom: none;
}
.sidebar-row .lbl {
  font-size: 12px;
  color: var(--gray-light);
  font-weight: 700;
  text-transform: uppercase;
}
.sidebar-row .val {
  font-size: 13.5px;
  color: var(--blue-deep);
  font-weight: 600;
  line-height: 1.5;
}
.sidebar-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
.sidebar-scope-tag {
  background: var(--blue-verylight);
  color: var(--blue-brand);
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 8px;
  border: 1px solid var(--border);
}
.sidebar-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}
.sidebar-step {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--gray);
}
.sidebar-step.done {
  color: var(--blue-deep);
  font-weight: 700;
}
.sidebar-step .dot {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  background: var(--white-cool);
  border: 1px solid var(--border);
  font-weight: 700;
  flex-shrink: 0;
}
.sidebar-step.done .dot {
  background: var(--blue-brand);
  border-color: var(--blue-brand);
  color: #ffffff;
}
.sidebar-cta-card {
  background: var(--blue-deep);
  color: #ffffff;
  padding: 24px;
  border: 1px solid var(--blue-deep);
  text-align: center;
}
.sidebar-cta-card h4 {
  color: #ffffff;
  font-size: 17px;
  margin-bottom: 8px;
  font-weight: 700;
}
.sidebar-cta-card p {
  color: rgba(255,255,255,0.85);
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 16px;
}
.article-pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 48px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
}
@media (max-width: 640px) {
  .article-pager {
    grid-template-columns: 1fr;
  }
}
.pager-box {
  background: #ffffff;
  border: 1px solid var(--border);
  padding: 20px 24px;
  cursor: pointer;
  transition: all .2s ease;
  display: flex;
  flex-direction: column;
}
.pager-box:hover {
  border-color: var(--blue-brand);
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}
.pager-box.next {
  text-align: right;
  align-items: flex-end;
}
.pager-dir {
  font-size: 12px;
  color: var(--gray-light);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.pager-title {
  font-size: 15px;
  color: var(--blue-deep);
  font-weight: 700;
  line-height: 1.4;
}
`;

html = html.replace(
  '/* =========================================================\n   PAGE ROUTING & STATE\n   ========================================================= */',
  articleCSS + '\n/* =========================================================\n   PAGE ROUTING & STATE\n   ========================================================= */'
);

// 2. Replace HTML markup for page-case-detail
const oldCaseDetailHTML = `<!-- ============================================================ CASE DETAIL (DYNAMIC) ============================================================ -->
<section class="page" id="page-case-detail">
  <div class="hero">
    <div class="hero-inner">
      <div class="breadcrumb" id="caseBreadcrumb"></div>
      <h1 id="caseTitle"></h1>
    </div>
  </div>

  <section class="block">
    <div class="container">
      <div class="two-col" style="align-items:center;">
        <div>
          <div class="section-eyebrow">PROJECT OVERVIEW</div>
          <h2 style="font-size:26px;margin-bottom:14px;">專案概述</h2>
          <p id="caseOverviewText" style="font-size:15px;line-height:1.8;">乃文協助客戶進行完整任務需求分析，自國際頂尖廠商引進符合特定作業情境之特種設備，並統籌系統調校、現場驗收與原廠認證教育訓練，達成高標準應變能力建置。</p>
        </div>
        <div class="img-box" id="caseImgBox" style="aspect-ratio:4/3;">
          <div class="img-badge">實績專案執行實錄</div>
          <img id="caseDetailImg" src="" alt="案例圖" referrerpolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>

  <section class="block alt">
    <div class="container two-col">
      <div class="capability-item" style="text-align:left;padding:32px;">
        <div class="section-eyebrow">CHALLENGE</div>
        <h3 style="font-size:20px;margin-bottom:12px;color:var(--blue-deep);">任務需求與挑戰</h3>
        <p style="font-size:14.5px;color:var(--gray);line-height:1.8;">因應極端環境化學物質外洩、高風險爆裂物處置或特種密閉空間救災，現場需具備高防護等級、遠端操作抗干擾與高壓充氣可靠性之嚴苛要求。</p>
      </div>
      <div class="capability-item" style="text-align:left;padding:32px;">
        <div class="section-eyebrow">SOLUTION</div>
        <h3 style="font-size:20px;margin-bottom:12px;color:var(--blue-deep);">乃文整合解決方案</h3>
        <p style="font-size:14.5px;color:var(--gray);line-height:1.8;">提供客製化裝備配置、整合式移動工作站、實兵情境演練培訓，並由中壢後勤中心提供長期零組件備品與定期巡檢維護。</p>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="container">
      <div class="section-head"><div class="section-eyebrow">RELATED CASES</div><h2>相關案例</h2></div>
      <div class="grid-3" id="relatedCaseGrid"></div>
    </div>
  </section>

  <div class="cta-band">
    <div class="container">
      <h2>需要專業防災與安全解決方案？</h2>
      <p>歡迎與乃文團隊聯繫，討論您的應變裝備需求</p>
      <a class="btn btn-primary" style="background:#fff;color:var(--blue-brand);border-color:#fff;" onclick="goPage('contact')">聯絡我們 <span class="arrow">→</span></a>
    </div>
  </div>
</section>`;

const newCaseDetailHTML = `<!-- ============================================================ CASE DETAIL (ARTICLE FORMAT) ============================================================ -->
<section class="page" id="page-case-detail">
  <!-- Article Header / Hero -->
  <div class="article-hero">
    <div class="container article-header-container">
      <div class="breadcrumb" id="caseBreadcrumb" style="margin-bottom:16px;"></div>
      <div class="article-meta-bar">
        <span class="article-badge" id="caseSegmentBadge">政府機關與消防特搜</span>
        <span class="article-meta-item" id="caseDate">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span id="caseDateText">2024 年專案實錄</span>
        </span>
        <span class="article-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          <span id="caseReadTimeText">約 4 分鐘閱讀</span>
        </span>
        <span class="article-meta-item" style="color:var(--blue-brand);font-weight:600;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          乃文專案技術團隊
        </span>
      </div>
      <h1 class="article-title" id="caseTitle"></h1>
      <p class="article-lead" id="caseSubtitle"></p>
    </div>
  </div>

  <!-- Article Main Content & Sidebar -->
  <section class="block" style="padding-top:48px;padding-bottom:64px;">
    <div class="container">
      <div class="article-layout">
        <!-- Main Article Body Column -->
        <article class="article-main" id="caseArticleBody">
          <!-- Populated by JavaScript -->
        </article>

        <!-- Article Sticky Sidebar -->
        <aside class="article-sidebar" id="caseArticleSidebar">
          <!-- Populated by JavaScript -->
        </aside>
      </div>

      <!-- Prev / Next Article Navigation -->
      <div class="article-pager" id="casePager"></div>
    </div>
  </section>

  <!-- Related Cases Section -->
  <section class="block alt">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">MORE CASE STUDIES</div>
        <h2>更多客戶實績專案</h2>
        <p>探索乃文在毒化災防救、國防反恐維安與高科技晶圓廠區的指標成功案例</p>
      </div>
      <div class="grid-3" id="relatedCaseGrid"></div>
      <div style="text-align:center;margin-top:36px;">
        <a class="btn btn-outline" onclick="goPage('cases')">瀏覽全部客戶實績 <span class="arrow">→</span></a>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <div class="cta-band">
    <div class="container">
      <h2>需要專業防災與安全整合方案？</h2>
      <p>三十餘年實績經驗，乃文團隊提供從需求分析、方案規劃到驗收培訓之專案全週期服務</p>
      <a class="btn btn-primary" style="background:#fff;color:var(--blue-brand);border-color:#fff;" onclick="goPage('contact')">立即諮詢專案團隊 <span class="arrow">→</span></a>
    </div>
  </div>
</section>`;

html = html.replace(oldCaseDetailHTML, newCaseDetailHTML);

// 3. Replace CASES data and goCase function
const oldCasesJS = `const CASES = {
  'case-gov': {
    title: '政府消防與特搜毒化災應變專案',
    segment: '政府機關與消防特搜',
    image: 'assets/images/hero_banner_hazmat_1788937129400.jpg',
    desc: '規劃並交付各縣市消防應變專用設備與移槽車，長年提供專業檢校與受訓支援。'
  },
  'case-enterprise': {
    title: '半導體晶圓廠化學安全防護專案',
    segment: '高科技電子製造業',
    image: 'assets/images/about_facility_workshop_1788937185525.jpg',
    desc: '為科技園區廠房建置緊急防護裝備庫、呼吸氣瓶充氣站與定期維護檢測。'
  },
  'case-training': {
    title: '軍警反恐維安與特種應變訓練場專案',
    segment: '軍警與專業訓練機構',
    image: 'assets/images/cat_fire_safety_1788937172842.jpg',
    desc: '引進原廠規格訓練器材與場地規劃，協助應變部隊完成高擬真情境操演。'
  }
};`;

const newCasesJS = `const CASES = {
  'case-gov': {
    title: '政府消防與特搜毒化災應變專案',
    subtitle: '整合頂級 A 級氣密防護裝備、特種除汙移槽系統與高壓呼吸空氣灌充站，建構國家級應變戰力',
    segment: '政府機關與消防特搜',
    category: '毒化災應變 / 公共安全',
    date: '2024 年專案實錄',
    readTime: '約 4 分鐘閱讀',
    image: 'assets/images/hero_banner_hazmat_1788937129400.jpg',
    imageCaption: '實績專案執行紀實：第一線特搜人員 A 級氣密防護衣正負壓檢驗與毒災移槽現場實兵驗收',
    clientType: '各級政府消防局 / 災害防救特搜大隊',
    location: '台灣北部 / 中部 / 南部防救災專案',
    timeline: '專案執行期：6 個月（含原廠交付與受訓）',
    standards: 'NFPA 1991 / EN 943-2 / CE 認證',
    servicesProvided: ['任務情境評估', '特種裝備供應', '系統整合改裝', '原廠認證培訓', '年度巡檢校正'],
    tags: ['毒化災應變', 'A級氣密防護衣', '高壓空氣灌充系統', '移槽轉注設備', '消防特搜', '原廠教官訓練'],
    desc: '規劃並交付各縣市消防應變專用設備與移槽車，長年提供專業檢校與受訓支援。',
    summary: '為因應極端化學物質外洩與複合型重大毒化災害救援任務，乃文團隊協助政府消防與特搜應變體系，自國際頂尖製造商引進最高防護等級之個人防護裝備（PPE）、客製化毒化災移槽轉注系統及移動式呼吸空氣灌充站，並統籌系統調校、現場實兵驗收與種子教官培訓，全方位提升第一線救難戰力。',
    challenges: [
      { title: '未知危險氣體與強腐蝕性環境', desc: '極端毒化物、強酸強鹼或有機溶劑洩漏具高度滲透性與致命危險，需符合最高規 NFPA 1991 與 EN 943-2 認證之頂級氣密防護。' },
      { title: '現場呼吸氣源持續性與安全灌充', desc: '長時間搜救任務對高壓氣瓶消耗量極大，傳統後送充填曠日費時，急需具備移動式多氣瓶連續供氣與防爆快速灌充能力。' },
      { title: '特殊化學品移槽防爆與防二次反應', desc: '槽車洩漏或儲槽損壞時，現場轉注必須具備抗腐蝕、防爆及遠端監控功能，避免抽取過程中因摩擦或靜電引發連鎖爆炸。' }
    ],
    solutions: [
      { title: '引進國際指標級 A 級全氣密防護衣', desc: '配置多層高抗化複合材料防護服，提供超長抗化學品滲透防護時效，並配備超寬無視差防霧面罩與防穿刺耐化安全靴。' },
      { title: '建置移動式高壓呼吸空氣壓縮站', desc: '整合高壓靜音壓縮機、智能淨化過濾系統與四重防爆充氣箱，實現災區現場 300 bar 氣瓶即時安全充填。' },
      { title: '客製化氣動防爆化學品移槽轉注模組', desc: '搭配耐強酸鹼鐵氟龍雙隔膜泵浦、防爆接地警報器與抗溶劑快速接頭，支援現場高效安全移槽作業。' },
      { title: '原廠規格實兵情境教育訓練', desc: '由原廠合格教官進行氣密衣正負壓氣密檢校、SCBA 快速換氣著裝、移槽管線阻漏操演，確保裝備發揮最高效能。' }
    ],
    equipments: [
      { name: 'Level A 頂級全氣密化學防護服組', desc: '多層複合材料、符合 NFPA 1991 / EN 943-2 規範，耐 200+ 種劇毒化學品。', tag: '最高防護等級' },
      { name: '移動式高壓呼吸空氣壓縮系統', desc: '300 bar 工作壓力、配備三重空氣淨化與一氧化碳自動停機監測。', tag: 'EN 12021 標準' },
      { name: '防爆型氣動化學品移槽泵浦模組', desc: 'ATEX Zone 1 防爆認證、耐濃硫酸/氫氟酸/有機溶劑耐腐蝕設計。', tag: 'ATEX 防爆認證' },
      { name: '多合一複合氣體與光離子化偵測儀（PID）', desc: '即時定量 ppb 級揮發性有機物（VOCs）與有毒有害氣體濃度監測。', tag: '即時廣譜偵檢' }
    ],
    results: [
      { val: '100%', lbl: '專案驗收與氣密測試通過率' },
      { val: '-35%', lbl: '現場應變整備與著裝部署時間' },
      { val: '37年', lbl: '中壢後勤維修中心常態備品保證' }
    ],
    quote: '「乃文提供的全套毒化災應變裝備與扎實的種子教官培訓，讓特搜隊員在面對最嚴苛的化學品事故時，能毫無後顧之憂地專注於救援核心任務。」'
  },
  'case-enterprise': {
    title: '半導體晶圓廠化學安全防護專案',
    subtitle: '針對先進製程特種氣體與危險化學品庫房，建置全廠區緊急應變防護裝備庫與長效巡檢後勤',
    segment: '高科技電子製造業',
    category: '廠區工安 / 特氣防護',
    date: '2024 年專案實錄',
    readTime: '約 3 分鐘閱讀',
    image: 'assets/images/about_facility_workshop_1788937185525.jpg',
    imageCaption: '半導體科技廠區緊急應變中心（ERC）防護裝備配置、氣瓶充填站與定期氣密檢測紀實',
    clientType: '國際晶圓代工大廠 / 先進封裝與面板製造業',
    location: '新竹科學園區 / 中部科學園區 / 南部科學園區',
    timeline: '專案執行期：長期合約 / 年度定期巡檢與系統維護',
    standards: 'SEMI S2 安全標準 / ISO 45001 / OSHA 規範',
    servicesProvided: ['廠區危害評估', 'ERC 裝備模組化', '無油空氣充填站', '工安實操培訓', '原廠定期檢校'],
    tags: ['半導體工安', 'ERC緊急應變', '特種氣體防護', '無塵防靜電', '氣瓶充氣站', '定期維護保養'],
    desc: '為科技園區廠房建置緊急防護裝備庫、呼吸氣瓶充氣站與定期維護檢測。',
    summary: '針對半導體晶圓製造製程中所使用之高危害特種氣體（如矽烷、砷化氫、磷化氫）與強酸蝕刻液，乃文為國際半導體大廠量身規劃 ERC 緊急應變防護裝備庫、廠區無油呼吸氣瓶充氣站，並建立年度定期氣密檢測與 2 小時耗材快速支援機制。',
    challenges: [
      { title: '自燃性與劇毒性特殊氣體外洩風險', desc: '半導體先進製程特氣具備自燃、劇毒或窒息性，一旦發生異常洩漏，應變時間需精確控制在數分鐘內完成圍堵。' },
      { title: '無塵室超嚴苛潔淨度與防靜電要求', desc: '防護裝備必須同時滿足低發塵 Class 100 潔淨室規範、表面防靜電抗阻，並避免釋放任何揮發性有機物污染晶圓。' },
      { title: '全天候 24/7/365 備戰之妥善率要求', desc: '廠區 ERC 隊員須維持全年無休隨時出勤能力，防護面具、正壓呼吸器與氣瓶氣量必須維持 100% 妥善無虞。' }
    ],
    solutions: [
      { title: '量身配置無塵室專用化學防護裝備櫃', desc: '依各 Fab 廠區危害熱區配置模組化防護裝備櫃，包含防靜電 Level B/C 化學防護服、全視野正壓面具及快速穿脫組件。' },
      { title: '建置廠區專用無油超純呼吸空氣站', desc: '配置無油潤滑高壓壓縮機、醫用級空氣純化過濾器及多瓶連鎖充填台，供應晶圓廠呼吸氣瓶高潔淨氣源。' },
      { title: '導入 RFID 智慧裝備與氣瓶週期履歷管理', desc: '協助廠方建立防護裝備與高壓氣瓶數位巡檢檔案，自動追蹤水壓測試年限、面罩氣密測試數據與濾罐有效期限。' },
      { title: 'ERC 專案實戰模擬與原廠認證培訓', desc: '每季配合廠方工安演練，實施特氣閥箱（VMB）洩漏與槽車裝卸洩漏情境演練，強化第一線應變人員直覺式操作。' }
    ],
    equipments: [
      { name: '晶圓廠無塵防靜電化學防護服套裝', desc: '低發塵無塵室專用材質、表面阻抗 < 10^9 歐姆，具備絕佳酸鹼阻隔性。', tag: 'SEMI 規範認證' },
      { name: '工業級自給式正壓空氣呼吸器（SCBA）', desc: '輕量化碳纖維複合氣瓶、整合電子式殘氣警報與無線語音通訊傳輸。', tag: '長時效輕量化' },
      { name: '無油超純呼吸空氣壓縮與智能充氣系統', desc: '提供符合 EN 12021 醫藥級呼吸空氣，全自動露點與 CO/CO2 監測。', tag: '無油超潔淨' },
      { name: '特種氣體微量洩漏光學氣體檢測儀', desc: '超高靈敏度即時偵測特氣 ppm 級濃度，具備防爆認證與資料記錄功能。', tag: '精密氣體分析' }
    ],
    results: [
      { val: '100%', lbl: '廠區 ERC 裝備常態妥善率' },
      { val: '< 3分', lbl: '緊急應變全套裝備著裝出動時間' },
      { val: '2小時', lbl: '中壢後勤中心緊急備品支援時效' }
    ],
    quote: '「乃文團隊深諳半導體廠區對安全與無塵標準的極致苛求，從裝備規劃到日常檢校後勤，都是我們最值得信賴的工安防護後盾。」'
  },
  'case-training': {
    title: '軍警反恐維安與特種應變訓練場專案',
    subtitle: '引進國際先進 EOD 防爆偵蒐機器人、化生放核（CBRN）防護與高擬真特警情境模擬設施',
    segment: '軍警與國防特勤',
    category: '反恐偵蒐 / CBRN 防護',
    date: '2023-2024 年專案實錄',
    readTime: '約 4 分鐘閱讀',
    image: 'assets/images/cat_fire_safety_1788937172842.jpg',
    imageCaption: '特警攻堅維安與反恐演訓現場：EOD 防爆機器人與 CBRN 戰術防護裝備實兵操演紀實',
    clientType: '憲警特勤維安單位 / 國防部化學兵與特戰部隊',
    location: '國軍特種訓練基地 / 警政署反恐訓練中心',
    timeline: '專案執行期：9 個月（含海外原廠交裝與高階教官認證）',
    standards: '軍規 MIL-STD-810G / STANAG 4155 / NIJ 防護標準',
    servicesProvided: ['軍品引進報驗', '戰術裝備配置', '防爆機器人調校', '情境訓練場建置', '原廠海外教官培訓'],
    tags: ['反恐維安', 'EOD防爆機器人', 'CBRN化生放核', '軍警特勤', '情境模擬演練', '海外原廠認證'],
    desc: '引進原廠規格訓練器材與場地規劃，協助應變部隊完成高擬真情境操演。',
    summary: '為強化軍警特勤部隊應對恐攻威脅、可疑爆裂物處置及化生放核（CBRN）極端事件之處置能力，乃文引進國際先進多功能 EOD 防爆機器人、軍規級 CBRN 戰術防護面具與室內近接作戰情境模擬裝備，並協同海外原廠教官完成高司單位驗收與種子教官培訓。',
    challenges: [
      { title: '爆裂物與可疑危險物遠端處置安全距離', desc: '反恐排爆任務現場極其危險，操作人員需在數百公尺安全距離外，透過高抗干擾無線傳輸與高精度機械臂完成偵蒐與拆解。' },
      { title: '高強度戰術動作下的 CBRN 呼吸防護', desc: '特警攻堅要求高機動性與射擊視野，傳統防毒面罩視野狹窄、呼吸阻力大且難以搭配戰術頭盔及通訊耳機。' },
      { title: '嚴苛戰場環境與電磁干擾環境耐受度', desc: '裝備必須在高低溫極端氣候、泥濘水域、強震動與強電磁干擾環境下保持 100% 穩定作動。' }
    ],
    solutions: [
      { title: '配置全地形高負載多功能 EOD 防爆機器人', desc: '具備 6 軸高自由度機械手臂、360 度高倍率紅外線光學偵蒐雲台、散彈槍破壞器介面與強地爬坡能力。' },
      { title: '導入戰術型 CBRN 全視野防護面罩與抗毒組', desc: '採用低吸氣阻力雙濾罐設計、抗刮防彈全景面鏡，並內建骨傳導麥克風，無縫整合戰術無線電機。' },
      { title: '建置模組化情境模擬訓練與破拆場地', desc: '規劃模擬毒氣室、密閉狹窄空間與爆裂物排除操演動線，提供全套教案與標準化評鑑制度。' },
      { title: '海外原廠高階教官協同實兵認證訓練', desc: '邀請原廠資深教官來台實施為期 2 週密集操演，完成操控員與維修技師雙重專業認證。' }
    ],
    equipments: [
      { name: '軍警用多功能全地形 EOD 防爆偵蒐機器人', desc: '軍規 MIL-STD-810G 認證、高扭力機械臂、雙頻抗干擾長距離無線操控。', tag: '軍規排爆首選' },
      { name: '戰術型 CBRN 全視野正壓防毒面具套裝', desc: '符合 NIJ / NATO STANAG 規範，高抗化生放核毒劑滲透與防彈面鏡。', tag: 'NATO 戰術標準' },
      { name: '手持式拉曼光譜可疑危險物快速分析儀', desc: '非接觸式穿透檢測，數秒內比對 15,000+ 種爆裂物、毒品與毒化品資料庫。', tag: '秒級光譜鑑識' },
      { name: '戰術無線影像傳輸與指揮管制終端', desc: '低延遲高清多路影像中繼傳輸，提供前進指揮所即時現場態勢感知。', tag: '高抗干擾傳輸' }
    ],
    results: [
      { val: '100%', lbl: '軍規驗收指標與嚴苛環境測試' },
      { val: '24員', lbl: '合格取得原廠種子操作教官認證' },
      { val: '48hr', lbl: '原廠技術後勤與零件緊急到場支援' }
    ],
    quote: '「乃文引進的頂尖防爆機器人與 CBRN 防護裝備，大幅提升了特勤隊員在未知高风险環境下的生存率與任務達成率，是最堅強的戰術後盾。」'
  }
};`;

html = html.replace(oldCasesJS, newCasesJS);

// 4. Replace goCase and related logic
const oldGoCaseJS = `function goCase(key) {
  const c = CASES[key]; if (!c) return;
  document.getElementById('caseTitle').textContent = c.title;
  document.getElementById('caseBreadcrumb').innerHTML =
    \`<a onclick="goHome()">首頁</a><span class="sep">/</span><a onclick="goPage('cases')">客戶實績</a><span class="sep">/</span><span class="current">\${c.title}</span>\`;
  
  const imgEl = document.getElementById('caseDetailImg');
  if (imgEl) {
    imgEl.src = c.image;
    imgEl.alt = c.title;
  }
  const ovEl = document.getElementById('caseOverviewText');
  if (ovEl) {
    ovEl.textContent = \`\${c.desc} 乃文以三十餘年特種防災經驗，為客戶量身打造最嚴謹的設備採購與系統整合方案。\`;
  }

  renderRelatedCases(key);
  showPage('case-detail');
  history.replaceState(null, '', '#case/' + key);
}`;

const newGoCaseJS = `function goCase(key) {
  const c = CASES[key]; if (!c) return;
  
  // Header Meta
  document.getElementById('caseTitle').textContent = c.title;
  document.getElementById('caseSubtitle').textContent = c.subtitle || c.desc;
  document.getElementById('caseSegmentBadge').textContent = c.segment;
  document.getElementById('caseDateText').textContent = c.date || '2024 年專案實錄';
  document.getElementById('caseReadTimeText').textContent = c.readTime || '約 4 分鐘閱讀';
  document.getElementById('caseBreadcrumb').innerHTML =
    \`<a onclick="goHome()">首頁</a><span class="sep">/</span><a onclick="goPage('cases')">客戶實績</a><span class="sep">/</span><span class="current">\${c.title}</span>\`;
  
  // Main Article Body HTML
  const bodyEl = document.getElementById('caseArticleBody');
  if (bodyEl) {
    bodyEl.innerHTML = \`
      <!-- Featured Image with Caption -->
      <div class="article-featured-box">
        <img src="\${c.image}" alt="\${c.title}" referrerpolicy="no-referrer" />
        <div class="article-featured-caption">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          \${c.imageCaption || '實績專案執行紀實與設備驗收現場'}
        </div>
      </div>

      <!-- Executive Brief Callout -->
      <div class="article-brief-card">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          專案執行摘要 (Executive Summary)
        </h3>
        <p>\${c.summary}</p>
      </div>

      <!-- Section 1: Background & Challenges -->
      <h2 class="article-section-heading">
        <span class="sec-num">01.</span> 專案背景與任務挑戰 (Background & Challenges)
      </h2>
      <p class="article-p">
        在特種災害防救與高風險工業環境中，第一線作業人員所面臨的危險具有突發性、未知性與不可逆性。乃文團隊在專案初期即深入現場，針對作業場域可能遭遇的極端情境進行全方位風險辨識與需求診斷。
      </p>
      <div class="article-challenge-list">
        \${c.challenges.map((ch, idx) => \`
          <div class="article-challenge-card">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              挑戰 \${idx + 1}：\${ch.title}
            </h4>
            <p>\${ch.desc}</p>
          </div>
        \`).join('')}
      </div>

      <!-- Section 2: Naywen Solution -->
      <h2 class="article-section-heading">
        <span class="sec-num">02.</span> 乃文全方位整合解決方案 (Integrated Solution)
      </h2>
      <p class="article-p">
        秉持 37 年特種防災專業技術積累，乃文不只是單純供應設備，更為客戶規劃從源頭選型、國際規格對標、系統改裝整合到現場交裝的完整專案全週期服務方案。
      </p>
      <div class="article-solution-list">
        \${c.solutions.map((sol, idx) => \`
          <div class="article-solution-card">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-brand)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              方案 \${idx + 1}：\${sol.title}
            </h4>
            <p>\${sol.desc}</p>
          </div>
        \`).join('')}
      </div>

      <!-- Pull Quote -->
      <div class="article-quote-card">
        \${c.quote}
      </div>

      <!-- Section 3: Core Equipments -->
      <h2 class="article-section-heading">
        <span class="sec-num">03.</span> 核心導入設備與技術規格 (Key Equipment Deployed)
      </h2>
      <p class="article-p">
        本專案所導入之主要裝備均來自全球一線特種製造廠，符合國際最嚴苛的防護規範與安全認證標準：
      </p>
      <div class="article-spec-grid">
        \${c.equipments.map(eq => \`
          <div class="article-spec-item">
            <div>
              <h5>\${eq.name}</h5>
              <p>\${eq.desc}</p>
            </div>
            <span class="spec-tag">\${eq.tag}</span>
          </div>
        \`).join('')}
      </div>

      <!-- Section 4: Results & Impact -->
      <h2 class="article-section-heading">
        <span class="sec-num">04.</span> 導入效益與實質成果 (Operational Impact)
      </h2>
      <p class="article-p">
        透過系統化裝備建置與原廠高階教育訓練，協助客戶建立常態化標準應變程序（SOP），大幅強化團隊整體應變機動性與人員安全保障。
      </p>
      <div class="article-results-grid">
        \${c.results.map(r => \`
          <div class="article-result-card">
            <div class="num">\${r.val}</div>
            <div class="txt">\${r.lbl}</div>
          </div>
        \`).join('')}
      </div>

      <!-- Section 5: Long-term Support -->
      <h2 class="article-section-heading">
        <span class="sec-num">05.</span> 長效後勤維護與原廠檢校 (Post-Project Support)
      </h2>
      <p class="article-p">
        專案交付驗收僅是乃文服務的起點。由乃文中壢專業後勤維修中心提供全系列備品庫存、定期正負壓氣密檢測、呼吸氣瓶高壓水壓檢驗與原廠零件供應，確保所有裝備在關鍵時刻皆能發揮 100% 妥善戰力。
      </p>

      <!-- Tags bar -->
      <div class="article-tags-wrap">
        <span style="font-size:13px;font-weight:700;color:var(--blue-deep);margin-right:6px;">文章關鍵字：</span>
        \${c.tags.map(t => \`<span class="article-tag-chip">#\${t}</span>\`).join('')}
      </div>
    \`;
  }

  // Sidebar HTML
  const sidebarEl = document.getElementById('caseArticleSidebar');
  if (sidebarEl) {
    sidebarEl.innerHTML = \`
      <div class="sidebar-sticky">
        <!-- Project At A Glance Card -->
        <div class="sidebar-card">
          <div class="sidebar-card-title">
            <span>專案基本資訊</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-brand)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </div>
          <div class="sidebar-row">
            <span class="lbl">服務對象類別</span>
            <span class="val">\${c.clientType}</span>
          </div>
          <div class="sidebar-row">
            <span class="lbl">專案實施區域</span>
            <span class="val">\${c.location}</span>
          </div>
          <div class="sidebar-row">
            <span class="lbl">執行期程</span>
            <span class="val">\${c.timeline}</span>
          </div>
          <div class="sidebar-row">
            <span class="lbl">符合安全標準</span>
            <span class="val" style="color:var(--blue-brand);">\${c.standards}</span>
          </div>
          <div class="sidebar-row">
            <span class="lbl">乃文服務範疇</span>
            <div class="sidebar-tags-row">
              \${c.servicesProvided.map(s => \`<span class="sidebar-scope-tag">\${s}</span>\`).join('')}
            </div>
          </div>
        </div>

        <!-- Full Lifecycle Stage Card -->
        <div class="sidebar-card">
          <div class="sidebar-card-title">
            <span>專案全週期服務流程</span>
            <span style="font-size:11px;background:var(--blue-brand);color:#fff;padding:2px 6px;font-weight:700;">全階段</span>
          </div>
          <div class="sidebar-timeline">
            <div class="sidebar-step done"><span class="dot">01</span><span>需求評估與場域危害診斷</span></div>
            <div class="sidebar-step done"><span class="dot">02</span><span>方案規劃與國際裝備選型</span></div>
            <div class="sidebar-step done"><span class="dot">03</span><span>系統整合改裝與進口報驗</span></div>
            <div class="sidebar-step done"><span class="dot">04</span><span>現場實兵驗收與教官認證</span></div>
            <div class="sidebar-step done"><span class="dot">05</span><span>常態定期檢校與後勤維護</span></div>
          </div>
        </div>

        <!-- Direct Inquiry CTA Card -->
        <div class="sidebar-cta-card">
          <h4>諮詢此類型專案規劃</h4>
          <p>乃文具備 37 年特種應變與裝備整合實績，歡迎與我們討論客製化規格需求。</p>
          <a class="btn btn-primary" style="background:#ffffff;color:var(--blue-brand);border-color:#ffffff;width:100%;font-weight:700;" onclick="goPage('contact')">立即聯絡專案團隊</a>
        </div>
      </div>
    \`;
  }

  // Prev / Next Pager
  renderCasePager(key);

  // Related Cases
  renderRelatedCases(key);

  showPage('case-detail');
  history.replaceState(null, '', '#case/' + key);
}

function renderCasePager(currentKey) {
  const pagerEl = document.getElementById('casePager');
  if (!pagerEl) return;
  const keys = Object.keys(CASES);
  const currentIndex = keys.indexOf(currentKey);
  const prevKey = currentIndex > 0 ? keys[currentIndex - 1] : keys[keys.length - 1];
  const nextKey = currentIndex < keys.length - 1 ? keys[currentIndex + 1] : keys[0];
  
  const prevCase = CASES[prevKey];
  const nextCase = CASES[nextKey];

  pagerEl.innerHTML = \`
    <div class="pager-box" onclick="goCase('\${prevKey}')">
      <div class="pager-dir">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        上一篇實績文章
      </div>
      <div class="pager-title">\${prevCase.title}</div>
    </div>
    <div class="pager-box next" onclick="goCase('\${nextKey}')">
      <div class="pager-dir">
        下一篇實績文章
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
      <div class="pager-title">\${nextCase.title}</div>
    </div>
  \`;
}`;

html = html.replace(oldGoCaseJS, newGoCaseJS);

fs.writeFileSync('index.html', html);
console.log('Successfully patched index.html for Article format');
